import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Wallet {
  privateKey: string;
  address: string;
  balance: string;
}

interface WalletContextType {
  wallet: Wallet | null;
  createWallet: () => Promise<void>;
  getBalance: () => Promise<string>;
  sendXNO: (to: string, amount: string) => Promise<string>;
  receiveXNO: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState<Wallet | null>(null);

  // Initialize wallet from localStorage
  useEffect(() => {
    const storedWallet = localStorage.getItem('xno_wallet');
    if (storedWallet) {
      setWallet(JSON.parse(storedWallet));
    }
  }, []);

  const createWallet = async () => {
    try {
      const response = await fetch('http://nano-mcp.replit.app:8080', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "initialize",
          params: {},
          id: 1
        })
      });
      
      if (!response.ok) throw new Error('Wallet creation failed');
      
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || 'Wallet creation failed');
      
      const { account: address, privateKey } = data.result;
      const newWallet = { privateKey, address, balance: '0' };
      
      localStorage.setItem('xno_wallet', JSON.stringify(newWallet));
      setWallet(newWallet);
    } catch (error) {
      console.error('Wallet creation error:', error);
      throw error;
    }
  };

  const getBalance = async (): Promise<string> => {
    if (!wallet) return '0';
    
    try {
      const response = await fetch('http://nano-mcp.replit.app:8080', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "getBalance",
          params: { address: wallet.address },
          id: 2
        })
      });
      
      if (!response.ok) throw new Error('Balance check failed');
      
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || 'Balance check failed');
      
      const balance = data.result;
      const updatedWallet = { ...wallet, balance };
      
      localStorage.setItem('xno_wallet', JSON.stringify(updatedWallet));
      setWallet(updatedWallet);
      
      return balance;
    } catch (error) {
      console.error('Balance check error:', error);
      return wallet.balance;
    }
  };

  const sendXNO = async (to: string, amount: string): Promise<string> => {
    if (!wallet) throw new Error('No wallet available');
    
    try {
      const response = await fetch('http://nano-mcp.replit.app:8080', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "send",
          params: {
            privateKey: wallet.privateKey,
            to,
            amount
          },
          id: 3
        })
      });
      
      if (!response.ok) throw new Error('Send transaction failed');
      
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || 'Send transaction failed');
      
      return data.result;
    } catch (error) {
      console.error('Send error:', error);
      throw error;
    }
  };

  const receiveXNO = async () => {
    if (!wallet) throw new Error('No wallet available');
    
    try {
      const response = await fetch('http://nano-mcp.replit.app:8080/pending/receive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account: wallet.address,
          privateKey: wallet.privateKey
        })
      });
      
      if (!response.ok) throw new Error('Receive failed');
      
      // Update balance after receiving
      await getBalance();
    } catch (error) {
      console.error('Receive error:', error);
      throw error;
    }
  };

  return (
    <WalletContext.Provider value={{ wallet, createWallet, getBalance, sendXNO, receiveXNO }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
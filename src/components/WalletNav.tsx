// ... existing imports ...

export const WalletNav = () => {
  // ... existing code ...

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2">
          <Wallet size={16} />
          {wallet ? `XNO: ${balance}` : 'Create Wallet'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        {!wallet ? (
          // ... existing code ...
        ) : (
          // ... existing code ...
          <Button 
            onClick={handleReceive} 
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <Receive size={16} className="mr-2" />
            Receive XNO
          </Button>
        )}
      </PopoverContent>
    </Popover>
  );
};
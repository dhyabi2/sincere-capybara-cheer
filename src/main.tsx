import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { WalletProvider } from "@/contexts/WalletContext";

// Add root element styling
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.style.height = "100vh";
  rootElement.style.width = "100vw";
}

createRoot(rootElement!).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
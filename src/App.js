import "./App.css";
import { Layout } from "antd";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "./context/Wallet";
import { WagmiConfig } from "wagmi";
import Router from "./pages";

const { Header, Content, Footer } = Layout;
function App() {
    return (
        
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider theme={darkTheme()} chains={chains}>
                <Router />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;

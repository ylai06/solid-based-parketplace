import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "./router";
import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import "bootstrap/dist/css/bootstrap.css";

export const WalletContext = createContext(null);
export const PodContext = createContext();

const AppWrapper = () => {
  const [walletDetails, setWalletDetails] = useState({
    walletAddress: "",
    walletName: "",
    walletBalance: 0,
  });
  const [podLatestState, setPodLatestState] = useState(true);
  return (
    <BrowserSolidLdoProvider>
      <WalletContext.Provider value={{ walletDetails, setWalletDetails }}>
        <PodContext.Provider value={{ podLatestState, setPodLatestState }}>
          <RouterProvider router={globalRouters} />
        </PodContext.Provider>
      </WalletContext.Provider>
    </BrowserSolidLdoProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWrapper />);

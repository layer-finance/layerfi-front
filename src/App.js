import "./style/App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Overview from "./pages/desktop/Overview";
import MyWallet from "./pages/desktop/MyWallet";
import Sandbox from "./pages/desktop/Sandbox";
import Pool from "./pages/desktop/Pool";
import NFTStake from "./pages/desktop/NFTStake";
import StakePopup from "./component/desktop/popup/StakePopUp";
import Liquidity from "./component/desktop/popup/Liquidity";

import OverviewMb from "./pages/mobile/Overview";
import MyWalletMb from "./pages/mobile/MyWallet";
import NFTStakeMb from "./pages/mobile/NFTStake";
import SandboxMb from "./pages/mobile/Sandbox";
import PoolMb from "./pages/mobile/Pool";
function App(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    updateDimensions();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [isMobile]);

  const updateDimensions = () => {
    if (window.innerWidth < 940 && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth >= 940 && isMobile) {
      setIsMobile(false);
    }
  };

  const Render = () => {
    if (!isMobile) {
      return (
        <div className="App">
          <Route path="/" exact component={Overview} />
          <Route path="/Exchange" exact component={Overview} />
          <Route path="/My Wallet" exact component={MyWallet} />
          <Route path="/Sandbox" exact component={Sandbox} />
          <Route path="/Pool" exact component={Pool} />
          <Route path="/NFT Stake" exact component={NFTStake} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Route path="/" exact component={OverviewMb} />
          <Route path="/Exchange" exact component={Overview} />
          <Route path="/My Wallet" exact component={MyWalletMb} />
          <Route path="/Sandbox" exact component={SandboxMb} />
          <Route path="/Pool" exact component={PoolMb} />
          <Route path="/NFT Stake" exact component={NFTStakeMb} />
        </div>
      );
    }
  };

  return <BrowserRouter>{Render()}</BrowserRouter>;
}

export default App;

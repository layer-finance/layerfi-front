// Action types
export const CONNECT_WALLET = "wallet/CONNECT_WALLET";

// Action creators
export const connectWallet = props => {
  return {
    type: CONNECT_WALLET,
    props
  };
};

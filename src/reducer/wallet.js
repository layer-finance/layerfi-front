import * as walletActions from "../action/wallet";

const initialStates = {
  wallet: {
    account: "Connect Wallet",
    web3: undefined,
    provider: undefined
  }
};

const wallet = (state = initialStates, action) => {
  const { type, props } = action;
  switch (type) {
    case walletActions.CONNECT_WALLET: {
      const { address, account, web3, provider } = props;
      return {
        ...state,
        wallet: {
          web3,
          account,
          address,
          provider
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default wallet;

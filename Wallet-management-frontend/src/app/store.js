import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import accountinfoReducer from "../features/accountinfos/accountinfoSlice";
import fundAccountReducer from "../features/fundAccount/fundAccountSlice";
import transferReducer from "../features/transfer/transferSlice";
// import transactionReducer from "../features/transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accountinfo: accountinfoReducer,
    fundAccount: fundAccountReducer,
    transfer: transferReducer,
    // transaction: transactionReducer,
  },
});

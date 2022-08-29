import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountinfoService from "./accountinfoService";

const initialState = {
  accountinfo: {},
  accountinfos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create new account info
export const createAccountinfo = createAsyncThunk(
  "accountinfo/create",
  async (accountinfoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.jwtToken;
      return await accountinfoService.createAccountinfo(accountinfoData, token);
      //return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get account infos
export const getAccountinfos = createAsyncThunk(
  "accountinfo/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.jwtToken;
      return await accountinfoService.getAccountinfos(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete user account info
// export const deleteAccountinfo = createAsyncThunk(
//   "accountinfo/delete",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await accountinfoService.deleteAccountinfo(id, token);
//       //return response;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
export const accountinfoSlice = createSlice({
  name: "accountinfo",
  initialState,
  reducers: {
    // reset: (state) => initialState,
    resetAccountInfo: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.accountinfo = {};
    },
    resetAccountInfos: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.accountinfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccountinfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccountinfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accountinfo = action.payload;
        // state.accountinfos.push(action.payload);
      })
      .addCase(createAccountinfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAccountinfos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccountinfos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accountinfos = action.payload;
      })
      .addCase(getAccountinfos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    // .addCase(deleteAccountinfo.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteAccountinfo.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.accountinfos = state.accountinfos.filter(
    //     (accountinfo) => accountinfo._id !== action.payload.id
    //   );
    // })
    // .addCase(deleteAccountinfo.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

export const { resetAccountInfo, resetAccountInfos } = accountinfoSlice.actions;
export default accountinfoSlice.reducer;

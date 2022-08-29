import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fundAccountService from "./fundAccountService";

const initialState = {
  fundAccount: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// fund wallet account
export const fundAccount = createAsyncThunk(
  "fundAccount/fund",
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.jwtToken;
      return await fundAccountService.fund(cardData, token);
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

export const fundAccountSlice = createSlice({
  name: "fundAccount",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fundAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fundAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.fundAccount = action.payload;
      })
      .addCase(fundAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = fundAccountSlice.actions;
export default fundAccountSlice.reducer;

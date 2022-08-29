import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transferService from "./transferService";

const initialState = {
  transferInfo: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const makeTransfer = createAsyncThunk(
  "transfer/makeTransfer",
  async (reference, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.jwtToken;
      return await transferService.transfer(reference, token);
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

export const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makeTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transferInfo = action.payload;
        // state.accountinfos.push(action.payload);
      })
      .addCase(makeTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = transferSlice.actions;
export default transferSlice.reducer;

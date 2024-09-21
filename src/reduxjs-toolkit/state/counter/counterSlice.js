import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementExtra: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log("incrementAsync.pending...", state);
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log("incrementAsync.fullfilled...");
        state.value += action.payload;
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    await new Promise((resolve) => setTimeout(() => resolve(amount), 3000));
    return amount;
  }
);

export const { increment, decrement, incrementExtra } = counterSlice.actions;

export default counterSlice.reducer;

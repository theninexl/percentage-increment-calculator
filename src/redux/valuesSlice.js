import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value1: 0,
  value2: 0,
  result: 0,
};

export const valuesSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    calcIncrement: (state, action) => {
      const {value1, value2} = action.payload;
      state.value1 = value1;
      state.value2 = value2;
      state.result = ((state.value2 - state.value1)/state.value1)*100;
      state.difference = state.value2 - state.value1;
    }
  }
});

export const { calcIncrement } = valuesSlice.actions;
export default valuesSlice.reducer;
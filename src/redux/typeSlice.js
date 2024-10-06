import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: 'grape',
  count: 0,
};

const typeSlice = createSlice({
  name: 'type',
  initialState: initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    increment: state => {
      state.count = state.count + 1;
    },
    decrement: state => {
      state.count = state.count - 1;
    },
  },
});

export const { changeText, increment, decrement } = typeSlice.actions;
export default typeSlice.reducer;

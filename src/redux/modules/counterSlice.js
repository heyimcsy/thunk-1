// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  number: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload
    },
  },
})

export const { addNumber, minusNumber } = counterSlice.actions
export default counterSlice.reducer

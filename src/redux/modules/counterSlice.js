// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//2개의 INPUT
//(1) 이름:의미는 크게 없음
//(2) 함수
export const __addNumber = createAsyncThunk('ADD_NUMBER_WAIT', (payload, thunkAPI) => {
  //수행하고싶은 동작 :3초 기다림
  setTimeout(() => {
    thunkAPI.dispatch(addNumber(payload))
  }, 3000)
})

export const __minusNumber = createAsyncThunk('MINUS_NUMBER_WAIT', (payload, thunkAPI) => {
  //수행하고싶은 동작 :3초 기다림
  setTimeout(() => {
    thunkAPI.dispatch(minusNumber(payload))
  }, 3000)
})

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

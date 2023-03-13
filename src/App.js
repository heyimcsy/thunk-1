// src/App.jsx

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusNumber, addNumber } from './redux/modules/counterSlice'

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number)
  const [number, setNumber] = useState(0)

  const dispatch = useDispatch()

  // const onChangeHandler = (event) => {
  //   const { value } = event.target
  //   setNumber(+value)
  // }

  // thunk 함수를 디스패치한다. payload는 thunk함수에 넣어주면,
  // 리덕스 모듈에서 payload로 받을 수 있다.
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  }

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number))
  }

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  )
}

export default App

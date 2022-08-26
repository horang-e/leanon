import React, { useRef } from 'react'
import styled from 'styled-components'
import List from '../component/list'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../redux/modules/todo'

const Todo = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  //STORE에서 데이터를 뽑아옵니다.
  const lists = useSelector((state) => state.todoReducer.list);

  // TODO리스트를 dispatch를 사용해서 리덕스로 보냅니다.
  const addTodo = ()=>{
    dispatch(createTodo(inputRef.current.value))
    inputRef.current.value=""
  }

  return (
    <Outer>
    <h1>ToDo</h1>
    <UpperBox>
    <InputBox
    type="text"
    placeholder="input text"
    ref={inputRef}
    />
    <AddButton onClick={addTodo}>ADD</AddButton>
    </UpperBox>
    {/* props값으로 store에서 가져온 값을 넘깁니다 */}
    <List list={lists}/>
    </Outer>
  )
}
export default Todo
const Outer =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: auto;
`
const UpperBox = styled.div`
   display: flex;
   margin-bottom: 30px;
   width: 80%;
`
const AddButton = styled.div`
  border-style: double;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
`
const InputBox = styled.input`
  border: none;
  border-bottom: 2px black solid;
  width: 90%;
  margin-right: 4%;
`
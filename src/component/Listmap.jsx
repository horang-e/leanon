import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeTodo, updateTodo } from '../redux/modules/todo'

const Listmap = ({list}) => {
  const dispatch = useDispatch()
  const modiRef = useRef("")
  // 수정버튼클릭해서 true/false를 변환해서 input창을 띄워주고 디폴트값으로 그 값을 넣어준다.
  const [mod, setMod] = useState(false)
  
  //상태관리를 위해서 dispatch로 수정데이터를 보낸다.
  const modify = () => {
    dispatch(updateTodo(
      {todo: modiRef.current.value,
        id: list.id}
      ))
    setMod(false)
  }
  
  return (
    <>
    <div>{list.id}</div>
    {mod?
    <>
     <input type="text" 
     defaultValue={list.todo}
     ref={modiRef}/>
       <Buttonwrap>
        <div onClick={modify}>done</div>
    </Buttonwrap>
    </>:
    <>
    <div>{list.todo}</div>
     <Buttonwrap>
        <DelButton onClick={()=>{
          dispatch(removeTodo(list.id))
        }}>del</DelButton>
        <DelButton onClick={()=>{
          setMod(true)
        }}>mod</DelButton>
    </Buttonwrap>
    </>
    }
    </>
  )
}

export default Listmap

const Buttonwrap =styled.div`
  display: flex;
  /* width: 30%; */
`
const DelButton = styled.div`
  border: 1px solid black;
  width: 50%;
  padding: 0 10px;
  margin: 0 5px;
  text-align: center;
  &:hover{
    color: white;
    background-color: black;
  }
`
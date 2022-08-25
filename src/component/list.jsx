import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/modules/todo'
const List = ({list}) => {
  console.log(list)
  const dispatch = useDispatch()
  const [mod, setMod] = useState(false)
  const modify = () => {
    setMod(true)
  }
  return (
    <Outer>
      {list.map((list, idx)=>{
        return(
          <ListStyle>
          <div>{list.id}</div>
          {mod&&
          <>
          <Modimodal>
            <Container>
            <input type="text" defaultValue={list?.todo}/>
             <Buttonwrap>
            <div onClick={()=>{
                 setMod(false)
            }}>done</div>
          </Buttonwrap>
            </Container>
            </Modimodal>
          </>}
          <div>{list.todo}</div>
          <Buttonwrap>
          <DelButton onClick={()=>{
             dispatch(removeTodo(list.id))
          }}>del</DelButton>
          <DelButton onClick={()=>{
             modify()
          }}>mod</DelButton>
          </Buttonwrap>
          </ListStyle>
        )
      })}
    </Outer>
  )
}
export default List
const Outer = styled.div`
   border-top: 5px solid black;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const ListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 1px red solid;
`
const Buttonwrap =styled.div`
  display: flex;
  /* width: 30%; */
`
const DelButton = styled.div`
  border: 1px solid black;
  width: 50%;
  padding: 0 10px;
  text-align: center;
`
const Modimodal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;
`
const Container =styled.div`
   position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 960px;
    width: 80%;
    border-radius: 10px;
    text-align: center;
    font-size: 1em;
`
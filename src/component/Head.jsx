import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Head = () => {
  const navigate = useNavigate()

  return (
    <HeaderSc>
    <h1>최서현</h1>
    <Inner>
      <Btn onClick={()=>{navigate('/')}}>React</Btn>
      <Btn onClick={()=>{navigate('/todo')}}>Todo</Btn>
      <Btn onClick={()=>{navigate('/restapi')}}>Rest API</Btn>
    </Inner>
    </HeaderSc>
  )
}

export default Head

const HeaderSc =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
const Inner =styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`
const Btn = styled.div`
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  &:hover{
    color: white;
    background-color: black;
  }
`
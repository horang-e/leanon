import React from 'react'
import styled from 'styled-components'
import Listmap from './Listmap'


const List = ({list}) => {

  return (
    <Outer>
      {list.map((list, idx)=>{
        return(
          <ListStyle key={idx}>
            <Listmap list={list}/>
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
   padding-top: 30px;
`
const ListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-bottom: 1px #ddd solid;
  padding: 10px;
`

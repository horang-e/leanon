import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Restful = () => {
  
  const navigate = useNavigate()
  //데이터 비동기로 가져오기 전 map돌릴시에 생길 오류 방지를 위해 빈배열로 기본값 줌
  const [user,setUser] = useState([])

  //async await 비동기 통신을 이용하여 회원정보를 받아옴
  const getUser = async()=>{
    await axios.get("https://reqres.in/api/users?page=2")
               .then((res)=>{
                setUser(res.data.data)
               })
  }
 //화면 랜더링 시 바로 회원정보를 가져오기 위해 useEffect사용
  useEffect(()=>{
    getUser()
  },[])

  return (
    <Wrap>
    <h3>회원목록</h3>
    {user.map((user,idx)=>{
      return(
        <Outer onClick={()=>{navigate(`/restful/${user.id}`)}}>
        <img src={user.avatar} alt="userphoto"/>
        <Inner>
          <h4>🙋‍♂️{user.first_name} {user.last_name}</h4>
          <h5>✉{user.email}</h5>
        </Inner>
        </Outer>
      )
    })}
    </Wrap>
  )
}

export default Restful

const Wrap = styled.div`
  width: 60%;
  margin: auto;
`

const Outer =styled.div`
  display: flex;
  border: 1px #ddd solid;
  border-radius: 10px;
  margin: 10px auto;
  img{
    border-radius: 10px;
  }
 &:hover{
  background-color: black;
  color: white;
 }
`

const Inner = styled.div`
  margin: auto;
`
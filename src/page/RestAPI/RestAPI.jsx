import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const RestAPI = () => {
  const idRef = useRef(null)
  const pwRef = useRef(null)
  const navigate = useNavigate()

  // response값을 async/await함수를 사용하여 비동기 처리로 body에 값을 담아 보내고 성공시 페이지를 이동할수 있게 해줍니다.
  const login = async()=>{
    const user = {
      email: idRef.current.value,
      password : pwRef.current.value
    }
    await axios.post("https://reqres.in/api/register",user)
               .then((res)=>{
                  alert("로그인 완료!")
                  navigate("/restful")
               })
               .catch((err)=>{
                alert("eve.holt@reqres.in 로 로그인 해주세요!")
               })
  } 

  return (
    <Login>
      <div>
      <p>Email</p><input type="text" ref={idRef} defaultValue="eve.holt@reqres.in"/>
      <p>Password</p><input type="password" ref={pwRef} defaultValue="password"/>
      </div>
      <LoginButton onClick={login}>로그인</LoginButton>
    </Login>
  )
}

export default RestAPI

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: auto;
  input{
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #ddd;
  }
`
const LoginButton = styled.div`
  border: 1px black solid;
  width: 30%;
  text-align: center;
  margin-top: 20px;

`
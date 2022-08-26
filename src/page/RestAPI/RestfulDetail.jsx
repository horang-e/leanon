import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const RestfulDetail = () => {
  //path뒤의 파라미터값을 가져와서 수정,삭제,로드할때 사용한다.
  const {id} = useParams()

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  //수정토글
  const [modify, setModify] = useState(false)
  const emailRef = useRef(null)
  const navigate = useNavigate()

  // 유저 데이터를 state값으로 저장해서 뿌려준다.
  // 이메일 값 수정을 위해 이메일 값만 따로 state값으로 빼서 저장한다
  const getUser = async()=>{
    await axios.get(`https://reqres.in/api/users/${id}`)
               .then((res)=>{
                  setUser(res.data.data)
                  setEmail(res.data.data.email)
               })
  } 

  //이메일 값을 수정한후 받은 request값을 setState로 변경시켜주어 바로 눈에 보이게 해준다.
  const modUser = async()=>{
    const user = {
      name: emailRef.current.value,
      job: "job"
    }
    await axios.patch(`https://reqres.in/api/users/${id}`,user)
              .then((res)=>{
                setEmail(res.data.name)
                setModify(false)
              })
  }

  //reqres.in 특성상 삭제후 DB에 반영이 되지 않기 때문에 성공시 알람창을 띄우고 화면을 넘긴다. 
  const delUser = async()=>{
    await axios.delete(`https://reqres.in/api/users/${id}`)
              .then((res)=>{
                alert("삭제 완료!")
                navigate("/restful")
              })
  }

  //화면 랜더 시 해당 유저의 정보를 바로 가져오기 위해 useEffect를  사용한다. 
  useEffect(()=>{
    getUser()
  },[])

  return (
    <Outer>
      <img src={user.avatar} alt="userphoto"/>
      <Outer2>
        {modify?
        <div>
          <Inner>
          <h4>🙋‍♂️{user.first_name} {user.last_name}</h4>
          ✉<input type="text" defaultValue={email} ref={emailRef}/>
         </Inner>
         <Button onClick={modUser}>
          <div>완료</div>
          </Button>
         </div>
         : 
         <Inner>
            <div>
            <h4>🙋‍♂️ {user.first_name} {user.last_name}</h4>
              <h5>✉ {email}</h5>
            </div>
            <Button>
              <div onClick={()=>{setModify(true)}}>수정</div>
              <div onClick={delUser}>삭제</div>
            </Button>
          </Inner>
        }
      </Outer2>
    </Outer>
  )
}

export default RestfulDetail

const Outer =styled.div`
  display: flex;
  border: 1px #ddd solid;
  border-radius: 10px;
  width: 60%;
  margin: 10px auto;
  position: relative;
  img{
    border-radius: 10px;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    margin: auto;
    img{
    border-radius: 10px;
  }
  }
`
const Outer2 =styled.div`
  display: flex;
  border-radius: 10px;
  width: 60%;
  margin: 10px auto;
  position: relative;

`

const Inner = styled.div`
  width: 100%;
  margin: auto;
`

const Button = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    div{
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 4px;
      color: #817e7e;
      margin: 5px;
      &:hover{
        background-color: black;
        color: white;
      }
    }
    @media screen and (max-width: 768px){
      bottom: -50px;
      right: -50px;
  }
`
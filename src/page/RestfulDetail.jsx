import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestfulDetail = () => {
  const {id} = useParams()
  const [user, setUser] = useState("")
  console.log(id)

  const getUser = async()=>{
    await axios.get(`https://reqres.in/api/users/${id}`)
               .then((res)=>{
                  console.log(res.data.data)
                  setUser(res.data.data)
               })
  } 

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
      <div>{user.email}</div>
    </div>
  )
}

export default RestfulDetail
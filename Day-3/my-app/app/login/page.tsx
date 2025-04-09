"use client"

import { useAuth } from '@/context/Authprovider'
import { useRouter } from 'next/navigation'
import React from 'react'

const login = () => {

  const { login } = useAuth()
  const Router = useRouter()

  const hanldeSubmit:any = (e:any)=>{
    e.preventDefault()
    login();
    Router.push("/DashBoard")

  }
  return (
    <div>
      <form action="" onSubmit={hanldeSubmit}>
        <input type="email" placeholder='enter email'/>
        <input type="password" placeholder='enter password'/>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default login
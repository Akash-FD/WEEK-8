"use client"

import React, { useState } from 'react'

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e:any)=>{
        e.preventDefault()
        

    }

    

  return (
    <div className='text-center mx-20'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10 w-[40%]'>
            <input type="email" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border'/>
            <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border'/>
            <button type='submit' className='border px-2 w-24'>Login</button>
        </form>
    </div>
  )
}

export default login
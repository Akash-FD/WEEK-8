"use client"

import React, { useContext, useState } from 'react'
import { createContext } from 'vm'

export const Authcontext:any = createContext()

export const Authprovider:any = ({ children }) => {

    const [isAuthenticate, setIsAuthenticate]= useState(false)

    const login = ()=> setIsAuthenticate(true)
    const logout = ()=> setIsAuthenticate(false)


  return (
    <Authcontext.provider value={{isAuthenticate, login, logout}}>
    {children}
    </Authcontext.provider>
  )
}

// export default Authprovider

export const useAuth:any = ()=>{
    return useContext(Authcontext)
}
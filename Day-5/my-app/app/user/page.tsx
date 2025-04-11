"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const user = () => {

    const [userData, setUserData]= useState([])
    console.log(userData);
    

    useEffect(() => {
        const fetchdata = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUserData(data)

        }
        fetchdata()
     
    }, [])
    
  return (
    <div>
        {userData && userData.map((item)=>{
            return <Link href={`user/${item.id}`} key={item.id}>
                <div>
                {item.name}
                </div></Link>
        })}
        
    </div>
  )
}

export default user
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center text-2xl py-2'>
        <h1>Logo</h1>
        <ul className='flex gap-10'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">profile</Link>
            <Link href="/login" className='bg-yellow-500 px-3 py-1 rounded-xl'>Login</Link>


        </ul>
    </div>
  )
}

export default Navbar
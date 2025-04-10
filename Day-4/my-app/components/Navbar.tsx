import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center py-3 '>
        <h1>Logo</h1>
        <ul className='flex gap-10'>
            <Link href="/">Home</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Link href="/blog">blog</Link>


        </ul>
    </div>
  )
}

export default Navbar
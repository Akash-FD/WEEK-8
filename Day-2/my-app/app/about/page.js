import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const about = () => {
  return (
    <>
    <Script>{`alert('welcom about page')`}</Script>
    <div className='text-2xl'>About page </div>
    <div><Link href="/about/company">About company</Link></div>
    </>
  )
}

export default about
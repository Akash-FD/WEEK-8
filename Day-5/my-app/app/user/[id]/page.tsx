// "use client"
import { useRouter } from 'next/router'
// import React, { useEffect } from 'react'

const userId = () => {
    // const [singleData, setSingleData]= useState({})
    // console.log(singleData);

    const router = useRouter()
    
    // useEffect(() => {
        const id = router.query.id
        console.log(id);
        
        // const fetchData = async()=>{
        //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     const data = await response.json()
        //     setSingleData(data)
            
        // }
        // fetchData()
      
    // }, [router.query.id])
    
  return (
    <div>
        {/* {singleData?.name} */}
    </div>
  )
}

export default userId
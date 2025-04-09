"use client"

import { useAuth } from "@/context/Authprovider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const { isAuthenticate } = useAuth()
  const Router = useRouter()

  useEffect(() => {
    if (!isAuthenticate) {
      Router.push("/login")
      
    }
   
  }, [isAuthenticate, Router])
  
  

  return (
    <>
    <p>hello</p>
    </>
  );
}

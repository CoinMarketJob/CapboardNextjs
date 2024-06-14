"use client"
import React, {useEffect} from 'react'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const page = () => {    
    const router = useRouter()
    useEffect(() => {
        signOut({ callbackUrl: "//login", redirect: true })              
    }, [])
  return (
    <div></div>
  )
}

export default page
"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"
import { useEffect, useState } from "react"

interface LoginClientProps{
  currentUser: User | null | undefined
}

const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {
    const router = useRouter();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const login = () => {
        signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        }).then((callback) => {
            if(callback?.ok){
                router.push('/dashboard')
                router.refresh();
            }
        })
    }

      useEffect(() => {
         if(currentUser){
          router.push('/dashboard')
          router.refresh();
         }
      }, [])
  return (
    <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default LoginClient
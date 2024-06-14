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
    <div style={{display: "flex", flexDirection: "column", marginLeft: "30%", marginTop: "15%", width: "19vw", justifyContent: "center"}} >
      <div style={{display: "flex", flexDirection: "column", marginLeft: "15%", backgroundColor: "white", width: "19vw", justifyContent: "center"}}>
      <label style={{marginTop: "1rem", marginLeft: "1vw"}}>Email</label>
      <input placeholder="Email" style={{marginBottom: "0rem", width: "17vw", marginLeft: "1vw"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label style={{marginTop: "1rem", marginLeft: "1vw"}}>Password</label>
        <input placeholder="Password" style={{marginBottom: "1rem", width: "17vw", marginLeft: "1vw"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button style={{marginBottom: "1rem", width: "17vw", marginLeft: "1vw"}} onClick={() => login()}>Login</button>
        </div>
    </div>
  )
}

export default LoginClient
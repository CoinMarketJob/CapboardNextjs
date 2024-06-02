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
    const[name, setName] = useState("");

    const register = () =>{
        async function save() {
            const submitData = {
                name: name,
                email: email,
                password: password
            }
             try {
              const response = await fetch('/api/auth',{
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                  'content-type': 'application/json'
                }
              })
              console.log(response);
          
              if(response.ok){

                signIn('credentials', {
                    email: email,
                    password: password,
                    redirect: false
                }).then((callback) => {
                    if(callback?.ok){
                        router.push('/dashoboard')
                        router.refresh();
                    }
                })
            }
        }catch (error){
                console.log(error);
             }

            }

            save();
        }  
    

      useEffect(() => {
         if(currentUser){
          router.push('/dashboard')
          router.refresh();
         }
      }, [])

  return (
    <div>
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => register()}>Save</button>
        </div>
    </div>
  )
}

export default LoginClient
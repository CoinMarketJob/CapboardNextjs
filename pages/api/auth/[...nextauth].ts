import NextAuth, { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '@/libs/prismadb'
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'


export const authOptions : AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text"},
        password: {  label: "password", type: "password" }
      },
      authorize: async (credentials) => {
        if(!credentials?.email || !credentials.password){
          throw new Error('Gecersiz mail ya da parola...')
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if(!user || !user.hashedPassword){
          throw new Error('Gecersiz mail ya da parola...')
        }

        const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!comparePassword){
          throw new Error('Yanlıs parola...')
        }

        return user
      },
    }),
    
  ],
  pages : {
    signIn: "/login",
    signOut: "/logout",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
}


export default NextAuth(authOptions)
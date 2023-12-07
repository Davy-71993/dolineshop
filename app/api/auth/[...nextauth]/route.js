import { APP_URL } from "@/lib/constants"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
       
        try {
          const res = await fetch(`${APP_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(credentials)
          })

          const { user } = await res.json()

          return user

        } catch (error) {
          console.log(error)
        }
        
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === 'development',
  pages:{
    signIn: '/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
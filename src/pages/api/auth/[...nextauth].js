import NextAuth from "next-auth/next";
import GithubProviders  from "next-auth/providers/github";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import MongoClientPromise from '../db/mongodb'


export default NextAuth({
  providers: [
    GithubProviders({
        clientId : process.env.GITHUB_ID,
        clientSecret : process.env.GITHUB_SECRET
    })
  ],
  adapter: MongoDBAdapter(MongoClientPromise),
  secret : 'hello',
  sessions: {
    strategy : 'jwt'
  },
  callbacks : {
     async jwt({token , user}){
        if(user){
           token.id  = user.id
        }
        return token
     },
     async session(session , token){
      
         session.user.id = token.id
         return session
     }
  }
})

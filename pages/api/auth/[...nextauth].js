import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   GithubProvider({
      clientId: "c146c774ba2dfa632a3a",//process.env.GITHUB_ID,
      clientSecret: "7fb4869acd30c49121f2a6779d0e40b8b7fd71bd",  // process.env.GITHUB_SECRET,
    }), 
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
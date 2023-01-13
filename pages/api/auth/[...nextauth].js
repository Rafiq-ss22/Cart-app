import NextAuth from 'next-auth'
import GitHub  from 'next-auth/providers/github'



export default NextAuth({
  providers: [
    GitHub({
    clientId:process.env.GITHUB_ID,
    clientSecret:process.env.GITHUB_CLIENT_SECRET,
    }),
  ]
  ,
  callbacks: {
    signIn: async (user, account, profile) => {
      // Perform any additional account or profile setup here
      return Promise.resolve(user)
    },
  },
});





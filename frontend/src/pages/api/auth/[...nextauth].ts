import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type UserResponse = {
  id: string
  name: string
  email: string
  jwt: string
}

export default NextAuth({
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'sign-in',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if (!credentials) {
          return null
        }
        const { email, password } = credentials

        try {
          const result = await axios.post<UserResponse>(
            'http://localhost:3000/api/v1/user/signin',
            {
              email,
              password,
            }
          )

          return {
            id: result.data.id,
            username: result.data.name,
            email: result.data.email,
            jwt: result.data.jwt,
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            console.error(err.toJSON())
          }

          // null when failed
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.jwt = token.jwt
      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
    },
  },
})

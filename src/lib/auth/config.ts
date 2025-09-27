import { NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: 365 * 24 * 60 * 60, // 1 year
  },
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session, token }) {
      if (token.sub && token.email && token.name) {
        session.user = {
          id: token.sub,
          email: token.email as string,
          name: token.name as string
        }
      }
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

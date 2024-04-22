import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GoogleProvider({
            clientId: '70898669907-6mdhi9rtftpt4c9j4s6cr8frah4rl6kk.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }
import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/db'
import User from '@/models/User'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDB()
      const user = await User.findOne({ email: profile.email })
      const username = profile.name.slice(0,20)
      if (!user) {
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        })
      }
      return true
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email })
      if (user) {
        session.user.id = user._id.toString()
      }
      return session
    },
  },
}

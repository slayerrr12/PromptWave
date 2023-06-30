import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ profile }) {
      try {
        console.log("Profile:", profile);
        await connectToDB();
    
        // check if a user already exists
        const userExists = await User.findOne({ email: profile.email });
        console.log(profile)
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.login.toLowerCase(),
            image: profile.avatar_url,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    
  },
});

export { handler as GET, handler as POST };

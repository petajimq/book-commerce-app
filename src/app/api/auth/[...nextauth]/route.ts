// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
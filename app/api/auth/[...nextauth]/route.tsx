import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
const authOptions = {
    providers: [
        // Credentials({

        // })
        // CognitoProvider({
        //     clientId: "3ihnjkd89f98ufgri7l1u8mrs3",
        //     clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
        //     issuer: 'https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_thJcfZlQS',
        // })
    ]
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


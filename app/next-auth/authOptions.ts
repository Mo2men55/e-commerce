import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOption: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: "my-login",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );
        const data = await response.json();

        if (!response.ok || !data.token) {
          throw new Error(data.message || "Invalid email or password");
        }

        const userData: { id: string } = jwtDecode(data.token);

        return {
          id: userData.id,
          email: data.user.email,
          name: data.user.name,
          token: data.token,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};

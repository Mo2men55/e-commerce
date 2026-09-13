import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const pathProtected = [
    "/cart",
    "/checkout",
    "/profile",
    "/orders",
    "/wishlist",
    "/address",
    "api/v1/auth/signout",
    "/api/v1/auth/signin",
    "/api/v1/auth/signup",
  ];
  const psthunprotected = ["/Login", "/SignUp", "/forgetpass"];
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV == "production",
  });
  const accessToken = token?.token;

  if (
    pathProtected.some((path) => req.nextUrl.pathname.startsWith(path)) &&
    !accessToken
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/Login";
    return Response.redirect(url);
  }
  if (
    psthunprotected.some((path) => req.nextUrl.pathname.startsWith(path)) &&
    accessToken
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return Response.redirect(url);
  }
}

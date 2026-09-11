"use server"

type SignUpPayload = {
  name: string
  email: string
  password: string
  rePassword: string
  phone: string
}

export async function signUpUser(values: SignUpPayload) {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Error signing up user:", error)
    return { message: "Something went wrong. Please try again." }
  }
}

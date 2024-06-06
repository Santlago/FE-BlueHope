"use server"

import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 1000))

  const data = {
    email: formData.get("email"),
    senha: formData.get("senha"),
  }

  if (data.email === "admin@gmail.com" && data.senha === "admin123") {
    redirect("/homelogado")
  } else {
    return {
      message: "Invalid email or password"
    }
  }
}

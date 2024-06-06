"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 1000))

  const data = {
    // nome: formData.get("nome"),
    cpf: formData.get("cpf"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    telefone: formData.get("telefone"),
  }

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(`${process.env.API_BASE_URL}/usuario`, options)

  if (resp.ok) {
    redirect("/homelogado")
  }

  if (resp.status == 400) {
    return {
      messageNome: "Validação falhou"
    }
  }

}

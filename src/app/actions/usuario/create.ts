"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 1000))

  const data1 = {
    cpf: formData.get("cpf"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    telefone: formData.get("telefone"),
  }

  type PerfilData = {
    nome: FormDataEntryValue | null;
    somaPontos: number;
    medalha: string;
    usuario?: any;
  };

  const data2: PerfilData = {
    nome: formData.get("nome"),
    somaPontos: 0,
    medalha: "",
  }

  const options1 = {
    method: "POST",
    body: JSON.stringify(data1),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp1 = await fetch(`${process.env.API_BASE_URL}/usuario`, options1)

  if (resp1.ok) {
    const usuario = await resp1.json()

    data2.usuario = usuario

    const options2 = {
      method: "POST",
      body: JSON.stringify(data2),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp2 = await fetch(`${process.env.API_BASE_URL}/perfil`, options2)

    if (resp2.ok) {
      redirect("/homelogado")
    } else {
      return {
        messageNome: "Failed to create perfil"
      }
    }
  } else if (resp1.status == 400) {
    return {
      messageNome: "Validação falhou"
    }
  } else {
    return {
      messageNome: "Failed to create usuario"
    }
  }
}

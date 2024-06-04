'use client'

import { SubmitButton } from "@/components/buttons/SubmitButton";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import { Button, Image, Input, Select, SelectItem } from "@nextui-org/react";
import { create } from "@/app/actions/empresa/create";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { CancelButton } from "@/components/buttons/CancelButton";

const initialState = {
    messageNome: '',
}

export default async function Cadastro() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex h-screen" style={{
            background: 'var(--Azure-Radiance-500, #3B7EFF)',
            boxShadow: '0px 300px 190px 0px #1B57F5 inset'
        }}>
            <section className="h-full w-1/2 flex flex-col justify-between">
                <Link href="/">
                    <Image src="/logo-small.png" className="h-[2.875rem] mt-[2.44rem] ml-[2.63rem] mb-[3.19rem]" />
                </Link>
                <div className="text-sun-50 font-outfit font-se text-[3rem] ml-[4.81rem] max-2-[31.375rem]">
                    <p>
                        Preencha os campos e faça a diferença na vida marinha
                    </p>
                </div>
                <div className="flex justify-center truncate">
                    <Image src="/cadastro.png" className="h-[33.625rem]" />

                </div>
            </section>
            <section className="h-screen w-1/2 flex flex-col justify-center items-center">
                <div>
                    <form action={formAction}>
                        <div className="flex flex-col justify-between bg-white w-[27.9375rem] max-h-[40.5625rem] text-[#1442E1] p-[1.41rem] rounded-[1rem] text-[0.65938rem] mb-[1.51rem]">
                            <div className="">
                                <h2 className="text-[0.942rem] font-bold">Dados do usuário</h2>
                                <p>Preencha com base nos dados do usuário</p>
                                <Input type="text" label="Nome completo" name="nome" variant="underlined" isInvalid={state?.messageNome != ''} errorMessage={state?.messageNome} />
                                <Input type="text" label="País de origem" name="pais" variant="underlined" />
                            </div>
                            <div>
                                <h2 className="text-[0.942rem] font-bold">Dados de acesso</h2>
                                <p>Você utilizará estes dados para fazer login na plataforma</p>
                                <Input type="email" label="Email" name="email" variant="underlined" startContent={<Mail />} />
                                <Input type="password" label="Senha" name="senha" variant="underlined" />
                            </div>
                            <div>
                                <h2 className="text-[0.942rem] font-bold">Contato</h2>
                                <Input type="text" label="Telefone" name="telefone" variant="underlined" startContent={<Phone />} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <SubmitButton text="Finalizar cadastro" />
                            <Link href="/login">
                                <CancelButton text="Voltar" />
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
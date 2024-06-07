import { BorderedButton } from "@/components/buttons/BorderedButton";
import { PlusButton } from "@/components/buttons/PlusButton";
import { StdSmallButton } from "@/components/buttons/StdSmallButton";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import { Image, Input, ScrollShadow } from "@nextui-org/react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { usuarios } from "../lib/usuarios";
import { perfis } from "../lib/perfis";
import { desafios } from "../lib/desafios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CancelButton } from "@/components/buttons/CancelButton";

export default async function Perfil() {
  const usuario = usuarios[0]
  const perfil = perfis[0]
  return (
    <>
      <NavBar active="perfil" user={true} />
      <main
        className="min-h-screen flex flex-col"
        style={{
          background: "var(--Azure-Radiance-500, #3B7EFF)",
          boxShadow: "0px 300px 190px 0px #1B57F5 inset",
        }}
      >
        <h1 className="text-center text-[2.9rem] font-outfit text-sun-50 font-bold my-[3.25rem]">
          Meu Perfil
        </h1>
        <div
          className="flex-grow flex justify-center  gap-[2.59rem]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-between items-center">
              <Image
                src="https://i.pravatar.cc/300"
                className="w-[17.37rem] h-[17.37rem]"
              />
              <div className="flex flex-col justify-around  w-[11.25rem] h-[11.25rem]">
                <WhiteButton text="Editar Perfil" />
                <WhiteButton text="Excluir Perfil" />
              </div>
            </div>
            <div className="flex flex-col justify-between bg-white w-[27.9375rem] max-h-full text-[#1442E1] p-[1.41rem] rounded-[1rem] text-[0.65938rem] mb-[1.51rem] overflow-auto">
              <div className="">
                <h2 className="text-[0.942rem] font-bold">Dados do usuário</h2>
                <p>Preencha com base nos dados do usuário</p>
                <Input
                  isReadOnly
                  type="text"
                  label="Nome do usuário"
                  name="nome"
                  variant="underlined"
                  defaultValue={perfil.nome}
                />
                <Input
                  isReadOnly
                  type="text"
                  label="País de origem"
                  name="pais"
                  variant="underlined"
                  defaultValue="Brasil"
                />
              </div>
              <div>
                <h2 className="text-[0.942rem] font-bold mt-[2.44rem]">Dados de acesso</h2>
                <p>
                  Você utilizará esses dados para fazer login na plataforma
                </p>
                <Input
                  isReadOnly
                  type="email"
                  label="Email"
                  name="email"
                  variant="underlined"
                  defaultValue={usuario.email}
                  startContent={<Mail />}
                />
                <Input
                  isReadOnly
                  type="text"
                  label="Senha"
                  name="senha"
                  variant="underlined"
                  defaultValue={usuario.senha}
                  startContent={<Phone />}
                />
              </div>
              <div>
                <h2 className="text-[0.942rem] font-bold mt-[2.44rem]">Contatos</h2>
                <Input
                  isReadOnly
                  type="text"
                  label="Telefone"
                  name="telefone"
                  variant="underlined"
                  defaultValue={usuario.telefone}
                  startContent={<Phone />}
                />
              </div>
            </div>
            <div className="flex justify-center mb-[6.5rem]">
              <CancelButton text="Excluir Perfil" />
            </div>
          </div>

          <div className="font-outfit font-bold text-[1.58rem] text-[#EEF5FF]">
            <div className="flex flex-col justify-center">
              <h2 className="text-center">Medalhas BlueHope</h2>
              <div>
                <Image src="/medalhas.png" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-center">Meus certificados</h2>
              <div>
                <Image src="/certificados.png" />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-[0.5rem] bg-white w-[27.9375rem] max-h-full text-[#1442E1] p-[1.41rem] rounded-[1rem] text-[1rem] mb-[1.51rem] overflow-auto">
              <h2>Meus desafios ativos</h2>
              {desafios.map(desafio => {
                if (desafio.perfil.id === perfil.id) {
                  return (
                    <div key={desafio.id} className="w-full py-[0.54rem] px-[1.37rem] rounded-[1.5rem] border">
                      {desafio.descricao}
                    </div>
                  );
                }
              })}
            </div>

          </div>

        </div>
        {/* <LogoutButton text="Deslogar"/> */}
      </main>
      <Footer />
    </>
  );
}

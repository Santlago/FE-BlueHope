"use server"

import NavBar from "@/components/NavBar";
import { desafios } from "../lib/desafios";
import { Button } from "@nextui-org/react";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import Footer from "@/components/Footer";

export default async function Desafios() {
    return (
        <>
            <NavBar active="desafios" user={true} />
            <main className="flex flex-col justify-around items-center" style={{
                background: 'var(--Azure-Radiance-500, #3B7EFF)',
                boxShadow: '0px 300px 250px 0px #1B57F5 inset'
            }}>
                <h1 className="text-center font-bold font-outfit text-[3rem] text-[#EEF5FF] mt-[3.63rem] mb-[4.5rem]">Desafios</h1>
                <div className="flex flex-col justify-center items-center text-center gap-5 mb-[6.38rem] font-bold font-outfit text-[0.7rem] text-[#EEF5FF] max-w-[22rem]">
                    <h2>ATENÇÃO!</h2>
                    <p>
                        Você pode visualizar seus desafios já ativos clicando neles aqui ou no seu perfil
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    {desafios.map(desafio => (
                        <div key={desafio.id} className="bg-white p-8 rounded-3xl shadow-md w-[49rem] mb-8">
                            <h1 className="text-2xl font-bold text-blue-600 mb-4">{desafio.descricao}</h1>
                            <div className="mb-4">
                                <h2 className="text-xl font-bold text-blue-600">Dificuldade:</h2>
                                <p className="text-green-500 font-bold" >
                                    Moderado
                                </p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-bold text-blue-600">Compensação:</h2>
                                <p className="text-blue-600 text-2xl font-bold">{desafio.pontos} pontos</p>
                            </div>
                            <Button color="success" radius="full">Começar desafio</Button>
                        </div>
                    ))}
                </div>
                <div className="mb-[6rem]">
                    <WhiteButton text="Ver Mais" />
                </div>
                <Footer/>
            </main>
        </>
    )
}
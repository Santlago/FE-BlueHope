"use server"

import NavBar from "@/components/NavBar";
// import { desafios } from "../lib/desafios";
import { Button, Pagination } from "@nextui-org/react";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { get } from "../actions/usuario/get";
import { DesafioData } from "./desafioData";

export default async function Desafios() {
    let desafios = [];

    try {
        const data: any = await get();
        console.log(data);
        if (data && data._embedded && data._embedded.desafioList) {
            desafios = data._embedded.desafioList;
        }
        console.log(desafios);
    } catch (error) {
        console.error('Error fetching desafios:', error);
    }

    return (
        <>
            <NavBar active="desafios" user={true} />
            <main
                className="flex flex-col justify-around items-center"
                style={{
                    background: 'var(--Azure-Radiance-500, #3B7EFF)',
                    boxShadow: '0px 300px 250px 0px #1B57F5 inset',
                }}
            >
                <h1 className="text-center font-bold font-outfit text-[3rem] text-[#EEF5FF] mt-[3.63rem] mb-[4.5rem]">
                    Desafios
                </h1>
                <div className="flex flex-col justify-center items-center text-center gap-5 mb-[6.38rem] font-bold font-outfit text-[0.7rem] text-[#EEF5FF] max-w-[22rem]">
                    <h2>ATENÇÃO!</h2>
                    <p>
                        Você pode visualizar seus desafios já ativos clicando neles aqui ou no seu perfil
                    </p>
                </div>
                
                <DesafioData desafios={desafios} />
                <Footer />
            </main>
        </>
    );
}

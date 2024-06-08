"use client"

import { Button, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { get } from "../actions/usuario/get";

export function DesafioData({ desafios }: any) {
    // console.log(desafios)
    const [desafio, setDesafios] = useState(desafios)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get(page, 5);
                console.log(data)
                setDesafios(data._embedded.desafioList)
                setTotalPages(data.page.totalPages);
            } catch (error) {
                throw new Error("falha");
            }
        };

        fetchData();
    }, [page]);

    return (
        <>
            <div className="flex flex-col items-center">
                {desafio.map((desafio: any) => (
                    <div key={desafio.id} className="bg-white p-8 rounded-3xl shadow-md w-[49rem] mb-8">
                        <h1 className="text-2xl font-bold text-blue-600 mb-4">{desafio.descricao}</h1>
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-blue-600">Dificuldade:</h2>
                            <p className="text-green-500 font-bold">Moderado</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-blue-600">Compensação:</h2>
                            <p className="text-blue-600 text-2xl font-bold">{desafio.pontos} pontos</p>
                        </div>
                        <Button color="success" radius="full">Começar desafio</Button>
                    </div>
                ))}
            </div>
            <Pagination
                onChange={handlePageChange}
                isCompact
                showControls
                total={totalPages}
                page={page}
                className="mb-6"
            />
        </>
    )
}
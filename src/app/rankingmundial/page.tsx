import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Image } from "@nextui-org/react";
import { usuarios } from "../lib/usuarios";
import { perfis } from "../lib/perfis";
import { WhiteButton } from "@/components/buttons/WhiteButton";

export default function RankingMundial() {
    return (
        <>
            <NavBar active="rankingmundial" user={true} />
            <main className="flex flex-col justify-around items-center" style={{
                background: 'var(--Azure-Radiance-500, #3B7EFF)',
                boxShadow: '0px 300px 250px 0px #1B57F5 inset'
            }}>
                <h1 className="text-center font-bold font-outfit text-[3rem] text-[#EEF5FF] mt-[3.63rem]">Ranking Mundial</h1>
                <div className="mt-[12rem] pb-[4.88rem]">
                    <Image
                        src="/rank.png"
                        className="h-[17rem]"
                    />
                </div>
                <div className="flex items-center gap-[3.94rem] pt-[3.31rem] pb-[4rem] mb-[8rem] border-y-2 border-white ">
                    <div>
                        <Image
                            src="https://i.pravatar.cc/300"
                            className="w-[6.37rem] h-[6.37rem] rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-[.5rem] max-w-[21rem]">
                        <h2 className="font-bold font-outfit text-[1.44rem] text-white">Você está em 90421° lugar com 2500 pontos</h2>
                        <p className="text-[1rem] font-outfit text-white">Nada mal, mas pode melhorar ;p</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[2.11rem] text-[#1442E1] font-outfit font-bold text-[1.4rem] mb-[3.94rem]">
                    {perfis
                        .sort((a, b) => b.somaPontos - a.somaPontos) // Ordena os perfis pelo somaPontos em ordem decrescente
                        .map((perfil, index) => (
                            <div key={perfil.id} className="flex items-center justify-between w-[44rem] bg-white rounded-[4rem]">
                                <Image
                                    src="https://i.pravatar.cc/300"
                                    className="w-[5.2rem] h-[5.2rem] rounded-full m-[0.29rem]"
                                />
                                <h2>#{index + 1}</h2> {/* Adiciona a colocação com base no índice */}
                                <h2>{perfil.nome}</h2>
                                <h2 className="mr-[1.54rem]">{perfil.somaPontos}</h2>
                            </div>
                        ))}
                </div>
                <div className="mb-[10rem]">
                    <WhiteButton text="Ver Mais" />
                </div>

            </main>
            <Footer />
        </>
    )
}
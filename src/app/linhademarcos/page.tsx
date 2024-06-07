import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Image } from "@nextui-org/react";

export default function LinhaDeMarcos() {
    return (
        <>
            <NavBar active="linhademarcos" user={true} />
            <main className="flex flex-col justify-around items-center" style={{
                background: 'var(--Azure-Radiance-500, #3B7EFF)',
                boxShadow: '0px 300px 250px 0px #1B57F5 inset'
            }}>
                <h1 className="text-center font-bold font-outfit text-[3rem] text-[#EEF5FF] mt-[3.63rem]">Linha de Marcos</h1>
                <div className="my-[12rem] w-screen">
                    <Image
                        src="/linhademarcos.png"
                        className="w-screen"
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-5 mb-[5.87rem] font-bold font-outfit text-[0.7rem] text-[#EEF5FF] max-w-[22rem]">
                    <h2>ATENÇÃO!</h2>
                    <p>
                        Alguns certificados não se encontram aqui pois nem todos são obtidos ao atingir uma quantidade de pontos, alguns deles são obtidos realizando certos desafios na plataforma.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { StdButton } from "@/components/buttons/StdButton"
import { Image } from "@nextui-org/react"
import Link from "next/link"

export default function Atualizese() {
    return (
        <>
            <NavBar active="atualizese" user={true} />
            <main>
                <section className="w-full h-[49rem] bg-cover bg-[url('/bg-atualizese.png')]">
                    <div className="px-[4.38rem] pt-[6.75rem]">
                        <p className="pb-[3.25rem] text-[1.9rem] font-bold text-sun-50 max-w-[41.37581rem]">
                            Pela primeira vez, pesquisadores da USP encontram lixo no oceano profundo
                        </p>
                        <Link href="https://www.cnnbrasil.com.br/nacional/pela-primeira-vez-pesquisadores-da-usp-encontram-lixo-no-oceano-profundo/#:~:text=Cientistas%20do%20Instituto%20Oceanográfico%20(IO,ao%20largo%20da%20costa%20brasileira.">
                            <StdButton text="Comece agora!" />
                        </Link>
                    </div>
                </section>
                <section className="w-full" style={{
                    background: 'var(--Azure-Radiance-500, #3B7EFF)',
                    boxShadow: '0px 300px 250px 0px #1B57F5 inset'
                }}>
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem] mt-[2.75rem]">Informações importantes</h1>
                        <p className="p-[4.5rem] mr-[1.87rem] text-[1.57919rem] font-outfit text-sun-50 font-semibold">
                            A Blue Hope está comprometida em fornecer recursos educacionais abrangentes para conscientizar sobre a preservação dos oceanos. Por isso, estamos agregando notícias e artigos de fontes confiáveis na aba "Atualize-se". Esses conteúdos visam informar e educar nossos usuários sobre os desafios ambientais atuais, as inovações em sustentabilidade e as melhores práticas para proteger nossos ecossistemas marinhos. Junte-se a nós e mantenha-se atualizado com as últimas informações para fazer a diferença no combate à poluição dos oceanos.
                        </p>

                    </div>
                </section>
                <section className="bg-white font-outfit text-[#1736B6] p-[6.8rem] text-[1.2rem] font-bold">
                    <h2 className="text-[2rem]">
                        Confira:
                    </h2>
                    <div className="flex pb-[3.25rem] border-b-2 border-black gap-[2.9rem] mt-[4.06rem]">
                        <div className="w-[60%] flex flex-col justify-between">
                            <h3>
                                Rede ambiental traça caminhos para redução de lixo no mar no RJ
                            </h3>
                            <p className="font-normal text-justify">
                                “A rede vem com muito lixo. O pescador faz uma garimpagem para poder pegar o pescado dele”, descreve Paulo Santana, presidente da Associação dos Pescadores, Maricultores e Lazer do Sahy (Assopesca), em Mangaratiba, cidade no litoral sul do Rio de Janeiro.
                            </p>
                            <Link href="https://agenciabrasil.ebc.com.br/geral/noticia/2024-05/rede-ambiental-traca-caminhos-para-reducao-de-lixo-no-mar-no-rj">
                                Leia na íntegra
                            </Link>
                        </div>
                        <div className="w-[40%]">
                            <Image
                                className="rounded-none"
                                src="/artigo1.png"
                            />
                        </div>
                    </div>
                    <div className="flex pb-[3.25rem] border-b-2 border-black gap-[2.9rem] mt-[4.06rem]">
                        <div className="w-[60%] flex flex-col justify-between">
                            <h3>
                                Brasil tem grandes quantidades de lixo no fundo do Oceano
                            </h3>
                            <p className="font-normal text-justify">
                                Uma pesquisa do Instituto Oceanográfico (IO) da USP, que tinha como objetivo estudar os peixes que vivem nas profundezas das águas brasileiras, acabou tendo uma descoberta alarmante. Grande quantidade de lixo foi encontrada entre 200 e 1.500 m de profundidade e a uma distância de 200 km da costa de São Paulo e Santa Catarina.
                            </p>
                            <Link href="https://olhardigital.com.br/2024/03/06/ciencia-e-espaco/brasil-tem-grandes-quantidades-de-lixo-no-fundo-do-oceano/">
                                Leia na íntegra
                            </Link>
                        </div>
                        <div className="w-[40%]">
                            <Image
                                className="rounded-none"
                                src="/artigo2.png"
                            />
                        </div>
                    </div>
                    <div className="flex pb-[3.25rem] border-b-2 border-black gap-[2.9rem] mt-[4.06rem]">
                        <div className="w-[60%] flex flex-col justify-between">
                            <h3>
                                Como ONG holandesa tirou mais de 9 mil toneladas de plástico de rios e oceanos do planeta
                            </h3>
                            <p className="font-normal text-justify">
                                The Ocean Cleanup criou tecnologia própria para limpar a Grande Mancha de Lixo do Pacífico e bloquear detritos em cursos de água de países como Estados Unidos, Guatemala e Indonésia.
                            </p>
                            <Link href="https://agenciabrasil.ebc.com.br/geral/noticia/2024-05/rede-ambiental-traca-caminhos-para-reducao-de-lixo-no-mar-no-rj">
                                Leia na íntegra
                            </Link>
                        </div>
                        <div className="w-[40%]">
                            <Image
                                className="rounded-none"
                                src="/artigo3.png"
                            />
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}
import { CadastreSection } from "@/components/CadastreSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { StdButton } from "@/components/buttons/StdButton";
import { Image } from "@nextui-org/react";
import { Dot } from "lucide-react";
import Link from "next/link";

export default async function Home() {

  // const user = await getSession()

  const user = ""

  return (
    <>
      <NavBar active="paginainicial"/>
      <main className="text-sun-900 font-outfit " style={{
        color: 'var(--Sun-50, #FFFDEA)',
        fontSize: '1.26281rem',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal'
      }}>
        <section className=" w-full h-[51.0625rem] bg-cover bg-no-repeat bg-[url('/landingpage-bg.png')]">
          <div className="px-[4.38rem] pt-[6.75rem]">
            <p className="pb-[3.25rem] text-[1.9rem] font-bold text-sun-50 max-w-[41.37581rem]">
              Contribua para um futuro mais limpo e consciente. Juntos, podemos fazer a diferença!
            </p>
            <Link href="/planos">
              <StdButton text="Comece agora!" />
            </Link>
          </div>
        </section>
        <section className="w-full" style={{
          background: 'var(--Azure-Radiance-500, #3B7EFF)',
          boxShadow: '0px 300px 250px 0px #1B57F5 inset'
        }}>
          <div className="flex justify-center items-center">
            <Image src="/sobrenos.png" className="w-[27.3125rem] h-auto pt-14" />
            <div>
              <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem]">Sobre Nós</h1>
              <p className="max-w-[38.9375rem] pt-[4.5rem] mr-[1.87rem] text-[1.57919rem] font-outfit text-sun-50 font-semibold">
                Na Blue Hope, estamos comprometidos em transformar a paixão pela preservação dos oceanos em ação concreta. Nossa plataforma engaja indivíduos através de desafios interativos, recompensando seus esforços com pontos e prêmios digitais. Combinamos educação ambiental e gamificação para inspirar uma comunidade global dedicada a combater a poluição marinha. Junte-se a nós e seja parte da solução para um futuro mais limpo e saudável.
              </p>

            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B57F5]">
          <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Mas como funciona?</h1>
          <div className="flex justify-around py-24 items-center">
            <div className="text-[1.57919rem] font-outfit text-sun-50 font-semibold ">
              <p className="align-middle w-[34rem]">
                Você irá fazer desafios e após estes serem validados, serão atribuídos pontos a sua conta.
              </p>
            </div>
            <div>
              <Image src="/funciona1.png" className="w-[10.2rem] h-auto " />
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1442E1] flex justify-around items-center">
          <div className="py-[8rem]">
            <Image src="/funciona2.png" className="w-[10.2rem] h-auto " />
          </div>
          <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
            <p>E então uma linha de marcos irá mostrar as recompensas que você poderá ou não reivindicar com base em seus pontos.  </p>
          </div>
        </section>
        <section className="w-full bg-[#19338F] flex justify-around">
          <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
            <p>E para fins de curiosidade, você poderá ver o ranking mundial e despertar um espírito competidor dentro si.   </p>
          </div>
          <div className="py-[8rem]">
            <Image src="/funciona3.png" className="w-[10.2rem] h-auto " />
          </div>
        </section>
        <CadastreSection user="" />
        <Footer />
      </main >
    </>
  );
}

import { Image } from "@nextui-org/react";
import Link from "next/link";

interface NavBarProps {
    user: String
    active: "paginainicial" | "atualizese" | "linhademarcos" | "rankingmundial" | "desafios"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const { user } = props
    const classActive = "border-white border-b-4 pb-2"

    return (
        <nav className="flex  items-center px-4 py-2 bg-[#1736B6] w-full">
            <Link href="/">
                <Image
                    src="/logo-small.png"
                    alt="logo"
                    className="w-[8.625rem] h-[3.0625rem] my-[1.62rem] mx-[1.87rem]"
                />
            </Link>
            <ul className="flex gap-14 justify-center w-full font-outfit text-[#FFFDEA] font-bold text-[1.26rem]">
                <li className={active == "paginainicial" ? classActive : ""}>
                    <Link href="/">Página Inicial</Link>
                </li>
                {user && (
                    <li className={active === "atualizese" ? classActive : ""}>
                        <Link href="/atualizese">Atualize-se</Link>
                    </li>
                )}
                {user && (
                    <li className={active === "linhademarcos" ? classActive : ""}>
                        <Link href="/linhademarcos">Linha de Marcos</Link>
                    </li>
                )}
                {user && (
                    <li className={active === "rankingmundial" ? classActive : ""}>
                        <Link href="/rankingmundial">Ranking Mundial</Link>
                    </li>
                )}
                {user && (
                    <li className={active === "desafios" ? classActive : ""}>
                        <Link href="/desafios">Desafios</Link>
                    </li>
                )}

                <li className="">
                    {user ?
                        <Link href="/perfil">Meu Perfil</Link>
                        :
                        <Link href="/login">Fazer Login</Link>
                    }

                </li>
            </ul>
        </nav>
    )
}
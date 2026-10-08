import { BotaoIcone } from "../components/botaoIcone"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){


    return(
        <section className="w-full h-50 bg-primary flex items-center justify-evenly content-evenly">
            <img className="w-40" src="public\logo.png" alt="Logo"></img>
            <div>
                <p className="text-terciary titan-one-regular">LINKS RÁPIDOS</p>
                <ul className="text-secundary mt-2text-sm anton-regular">
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Trabalhos</a></li>
                    <li><a href="#">Como funciona</a></li>
                </ul>
            </div>
            <div>
                <p className="text-terciary titan-one-regular">REDES SOCIAIS</p>
                <div className="flex flex-row gap-4 mt-2">
                    <BotaoIcone>
                        <FaInstagram />
                    </BotaoIcone>
                    <BotaoIcone>
                        <FaTiktok />
                    </BotaoIcone>
                    <BotaoIcone>
                        <FaYoutube />
                    </BotaoIcone>
                </div>
            </div>
        </section>

    )
}
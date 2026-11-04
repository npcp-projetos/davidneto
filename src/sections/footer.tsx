import { BotaoIcone } from "../components/botaoIcone"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
// import { FaYoutube } from "react-icons/fa"; -> Caso ele queira adicionar Youtube

export default function Footer(){
    const { t } = useLanguage();

    return(
        <section className="w-full h-50  max-sm:h-70 bg-primary flex max-sm:flex-wrap max-sm:space-y-4 items-center justify-evenly content-evenly">
            <img className="w-40  max-sm:order-3" src="public\logo.png" alt="Logo"></img>
            <div className="max-sm:basis-1/3">
                <p className="text-terciary titan-one-regular">{t.footer.quickLinksTitle}</p>
                <ul className="text-secundary mt-2text-sm anton-regular">
                    <li><a href="#sobre-mim">{t.footer.about}</a></li>
                    <li><a href="#project">{t.footer.works}</a></li>
                    <li><a href="#como-funciona">{t.footer.howItWorks}</a></li>
                </ul>
            </div>
            <div className="max-sm:basis-1/3">
                <p className="text-terciary titan-one-regular">{t.footer.socialTitle}</p>
                <div className="flex flex-row gap-4 mt-2">
                    <BotaoIcone href="https://www.instagram.com/davidn_14">
                        <FaInstagram />
                    </BotaoIcone>
                    <BotaoIcone href="https://www.tiktok.com/@davidn_14">
                        <FaTiktok />
                    </BotaoIcone>
                    <BotaoIcone href="https://www.behance.net/davidnetoo">
                        <FaBehanceSquare />
                    </BotaoIcone>
                </div>
            </div>
        </section>

    )
}

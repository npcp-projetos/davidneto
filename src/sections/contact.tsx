import Form from "../components/form";
import { useLanguage } from "../context/LanguageContext";
import imagem_form from "../assets/images/imagem_forms.webp";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full lg:min-h-205 bg-secundary">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full min-h-full bg-secundary">
        <div className="hidden lg:block w-1/2 relative shrink-0 overflow-hidden">
          <img
            className="lg:absolute lg:inset-0 w-full h-full object-cover max-lg:w-3/4 max-lg:object-left max-lg:mask-r-from-60 object-center"
            src={imagem_form}
            alt="David Neto"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-lg:w-full lg:w-3/5 px-6 py-14 md:py-14 md:pl-8 md:pr-16">
          <div className="w-full mb-6">
            <h2 className="text-primary text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl leading-tight lg:leading-16 anton-regular uppercase">
              {t.contact.titlePrefix} <span className="text-terciary">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-primary font-inter text-sm sm:text-base mt-3">
              {t.contact.subtitlePrefix} <b>{t.contact.subtitleBold}</b>
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

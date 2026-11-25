import Form from "../components/form";
import { useLanguage } from "../context/LanguageContext";
import imagem_form from "../assets/images/imagem_forms.webp";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full md:h-230 lg:h-190 bg-secundary">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full h-full bg-secundary">
        <div className="hidden lg:block w-1/2 h-full shrink-0 overflow-hidden">
          <img
            className="w-full h-full object-cover max-lg:w-3/4 max-lg:object-left max-lg:mask-r-from-60 object-center"
            src={imagem_form}
            alt="David Neto"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-lg:w-full lg:w-3/5 px-6 py-12 md:py-8 md:pl-8 md:pr-16">
          <div className="md:self-end w-full md:max-w-xl mb-6">
            <h2 className="text-primary text-4xl max-lg:l sm:text-5xl lg:text-6xl leading-tight lg:leading-17 anton-regular uppercase">
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

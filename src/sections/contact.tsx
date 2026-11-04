import Form from "../components/form";

export default function Contact() {
  return (
    <section id="contact" className="w-full md:h-190 bg-secundary">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full h-full bg-secundary">
        <div className="hidden md:block md:w-1/3 lg:w-2/5 h-full shrink-0 overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src="/imagem_david.png"
            alt="David Neto"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/3 lg:w-3/5 px-6 py-12 md:py-8 md:pl-8 md:pr-16">
          <div className="md:self-end w-full md:max-w-xl mb-6">
            <h2 className="text-primary text-4xl sm:text-5xl lg:text-6xl leading-tight lg:leading-17 anton-regular uppercase">
              SEU CONTEÚDO MERECE UMA EDIÇÃO <span className="text-terciary">À ALTURA</span>
            </h2>
            <p className="text-primary font-inter text-sm sm:text-base mt-3">
              Preencha o formulário e vamos conversar <b>sobre o seu projeto.</b>
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Form() {
  const { t } = useLanguage();
  const [telefone, setTelefone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setTelefone(onlyNumbers);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ];
    if (
      allowedKeys.includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <form
      id="orcamento"
      action="https://formsubmit.co/davidnetocontato@gmail.com"
      method="POST"
      className="bg-primary p-6 md:px-10 md:py-8 flex flex-col gap-5 shadow-md w-full rounded-xl"
    >
      {/* Configurações ocultas do FormSubmit.co */}
      <input type="hidden" name="_subject" value="Novo orçamento pelo site!" />
      <input type="hidden" name="_template" value="table" />
      {/* <input type="hidden" name="_next" value="davidneto-l6fnydqt5-npcp1.vercel.app" /> */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5 w-full items-end">
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="nome">
            {t.form.nameLabel}
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder={t.form.namePlaceholder}
            type="text"
            name="Nome Completo"
            id="nome"
            required
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="social">
            {t.form.socialLabel}
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder={t.form.socialPlaceholder}
            type="text"
            name="Rede Social"
            id="social"
            required
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="telefone">
            {t.form.phoneLabel}
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder={t.form.phonePlaceholder}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
            name="Telefone"
            id="telefone"
            value={telefone}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            required
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="conteudo">
            {t.form.contentLabel}
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder={t.form.contentPlaceholder}
            type="text"
            name="Tipo de Conteúdo"
            id="conteudo"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="projeto">
          {t.form.projectLabel}
        </label>
        <textarea
          className="p-3.5 rounded-md w-full h-32 md:h-36 border border-secundary resize-none text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
          placeholder={t.form.projectPlaceholder}
          name="Sobre o Projeto"
          id="projeto"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 px-6 rounded-md bg-terciary text-primary anton-regular uppercase text-base md:text-lg tracking-wider cursor-pointer transition-all duration-300 hover:brightness-105 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-secundary focus:ring-offset-2 focus:ring-offset-primary"
      >
        {t.form.submitButton}
      </button>
    </form>
  );
}

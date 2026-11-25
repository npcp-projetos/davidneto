import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Substitua pelo código criptografado completo de 32 caracteres enviado pelo FormSubmit
// ou pelo e-mail direto (ex: "seuemail@gmail.com") para ativar no domínio principal da Vercel.
const FORMSUBMIT_ENDPOINT = "davidnetocontato@gmail.com";

export default function Form() {
  const { t, language } = useLanguage();
  const [telefone, setTelefone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setStatus("sending");

    try {
      const formData = new FormData(formElement);
      const response = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === "true" || data?.success === true)) {
        setStatus("success");
        setTelefone("");
        formElement.reset();
        return;
      }

      // Caso o domínio ainda precise de ativação inicial no FormSubmit,
      // faz o envio padrão via POST para exibir a tela de ativação do FormSubmit.
      formElement.submit();
    } catch {
      formElement.submit();
    }
  };

  return (
    <form
      id="orcamento"
      action={`https://formsubmit.co/${FORMSUBMIT_ENDPOINT}`}
      method="POST"
      onSubmit={handleSubmit}
      className="bg-primary p-6 md:px-10 md:py-8 flex flex-col gap-5 shadow-md w-full rounded-xl"
    >
      {/* Configurações ocultas do FormSubmit.co */}
      <input type="hidden" name="_subject" value="Novo orçamento pelo site!" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {currentUrl && <input type="hidden" name="_next" value={currentUrl} />}
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

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
        disabled={status === "sending"}
        className="w-full py-2.5 px-6 rounded-md bg-terciary text-primary anton-regular uppercase text-base md:text-lg tracking-wider cursor-pointer transition-all duration-300 hover:brightness-105 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-secundary focus:ring-offset-2 focus:ring-offset-primary"
      >
        {status === "sending"
          ? language === "pt"
            ? "ENVIANDO..."
            : "SENDING..."
          : t.form.submitButton}
      </button>

      {status === "success" && (
        <p className="text-terciary font-inter text-sm font-semibold text-center">
          {language === "pt"
            ? "Mensagem enviada com sucesso! Em breve entrarei em contato."
            : "Message sent successfully! I will get back to you soon."}
        </p>
      )}
    </form>
  );
}

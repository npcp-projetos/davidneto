import { useState } from "react";

export default function Form() {
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
    <form id="orcamento" className="bg-primary p-6 md:px-10 md:py-8 flex flex-col gap-5 shadow-md w-full rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5 w-full items-end">
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="email">
            NOME COMPLETO
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder="Digite seu nome"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="social">
            REDE SOCIAL
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder="Digite seu username"
            type="text"
            name="social"
            id="social"
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="telefone">
            TELEFONE
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="(XX) XXXXX-XXXX"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
            name="telefone"
            id="telefone"
            value={telefone}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
          />
        </div>
        <div className="flex flex-col justify-end gap-1.5 w-full">
          <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="conteudo">
            QUAL TIPO DE CONTEÚDO VOCÊ PRODUZ?
          </label>
          <input
            className="px-3.5 py-2 h-10 rounded-md w-full border border-secundary text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
            placeholder="Ex: Vlogs, Podcasts, Reels,..."
            type="text"
            name="conteudo"
            id="conteudo"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-secundary anton-regular text-sm md:text-base tracking-wide" htmlFor="projeto">
          CONTE UM POUCO SOBRE O PROJETO
        </label>
        <textarea
          className="p-3.5 rounded-md w-full h-32 md:h-36 border border-secundary resize-none text-secundary text-sm font-inter bg-transparent focus:outline-none focus:border-terciary"
          placeholder="Fale sobre seu projeto, objetivo, referências, prazo,..."
          name="projeto"
          id="projeto"
          rows={4}
        />
      </div>
    </form>
  );
}

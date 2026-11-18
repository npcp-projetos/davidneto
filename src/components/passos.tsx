// src/components/passos.tsx

interface TimelineStepProps {
  number: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  index?: number;
  isVisible?: boolean;
  href?: string;
}

export default function TimelineStep({
  number,
  titleTop,
  titleBottom,
  description,
  index = 0,
  isVisible = true,
  href,
}: TimelineStepProps) {
  const cardBaseClasses =
    "bg-primary flex flex-col justify-center items-center py-2.5 px-3 md:px-2 rounded-md w-full mb-2.5 md:mb-3 min-h-14 md:min-h-15 text-center transition-transform duration-300 ease-out group-hover:-translate-y-1";

  const cardContent = (
    <>
      {/* Texto superior em creme */}
      <span className="text-secundary uppercase font-inter font-black text-xs md:text-sm leading-tight tracking-wide">
        {titleTop}
      </span>
      {/* Texto inferior em rosa */}
      <span className="text-terciary uppercase font-inter font-black text-xs md:text-sm leading-tight tracking-wide">
        {titleBottom}
      </span>
    </>
  );

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith("#")) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    // No mobile: linha horizontal (círculo à esquerda + card/texto à direita). No desktop (md+): coluna centralizada.
    <div
      style={{ transitionDelay: `${index * 350}ms` }}
      className={`group relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 w-full md:max-w-45 z-10 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {/* Círculo numérico: Fundo rosa, texto marrom e fonte Anton (sem sombra) */}
      <div className="w-12 h-12 shrink-0 rounded-full bg-terciary text-primary flex items-center justify-center font-anton text-2xl md:mb-4 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        {number}
      </div>

      {/* Conteúdo do passo (Card marrom + descrição) */}
      <div className="flex flex-col items-start md:items-center flex-1 w-full">
        {/* Caixa de Título: Clicável com feedback sutil no Card 1, ou div padrão nos demais */}
        {href ? (
          <a
            href={href}
            onClick={handleCtaClick}
            className={`${cardBaseClasses} cursor-pointer hover:ring-2 hover:ring-[var(--color-pink)]`}
          >
            {cardContent}
          </a>
        ) : (
          <div className={cardBaseClasses}>{cardContent}</div>
        )}

        {/* Descrição: Texto marrom */}
        <p className="text-primary font-inter text-sm font-medium leading-snug md:leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

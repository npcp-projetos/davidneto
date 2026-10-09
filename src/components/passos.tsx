// src/components/passos.tsx

interface TimelineStepProps {
  number: string;
  titleTop: string;
  titleBottom: string;
  description: string;
}

export default function TimelineStep({ number, titleTop, titleBottom, description }: TimelineStepProps) {
  return (
    // Adicionado z-10 para garantir que o passo fique acima da linha conectora
    <div className="relative flex flex-col items-center text-center w-full max-w-45 z-10">
      
      {/* Círculo numérico: Fundo rosa, texto marrom e fonte Anton */}
      <div className="w-12 h-12 rounded-full bg-terciary text-primary flex items-center justify-center font-['Anton'] text-2xl mb-4 shadow-sm">
        {number}
      </div>

      {/* Caixa de Título: Fundo marrom com cantos um pouco mais arredondados */}
      <div className="bg-primary flex flex-col justify-center items-center py-2 px-1 rounded-md w-full mb-3 shadow-md min-h-15">
        {/* Texto superior em creme */}
        <span className="text-secundary uppercase font-black text-[11px] md:text-xs leading-tight tracking-wide">
          {titleTop}
        </span>
        {/* Texto inferior em rosa */}
        <span className="text-terciary uppercase font-black text-[11px] md:text-xs leading-tight tracking-wide">
          {titleBottom}
        </span>
      </div>

      {/* Descrição: Texto marrom */}
      <p className="text-primary text-sm font-medium leading-tight">
        {description}
      </p>
    </div>
  );
}
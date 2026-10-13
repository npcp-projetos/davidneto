// src/components/testimonials.tsx

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-secundary p-6 rounded-xl shadow-lg flex flex-col justify-between min-h-62.5">
      <div>
        {/* Estrelas */}
        <div className="flex gap-1 mb-4 text-terciary text-xl">
          ★★★★★
        </div>
        
        {/* Ícone de aspas e Texto */}
        <div className="flex gap-3">
          <span className="text-terciary text-4xl font-serif font-bold leading-none">“</span>
          <p className="text-primary italic text-sm md:text-base leading-relaxed">
            {quote}
          </p>
        </div>
      </div>

      {/* Rodapé do Cartão */}
      <div className="mt-6">
        <div className="w-full h-px bg-terciary/30 mb-3"></div>
        <h4 className="text-terciary font-bold uppercase text-sm">{author}</h4>
        <p className="text-primary text-xs">{role}</p>
      </div>
    </div>
  );
}
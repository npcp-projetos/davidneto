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
        <div className="flex justify-center gap-1 mb-4 text-terciary text-xl tracking-widest">
          ★★★★★
        </div>
        
        {/* Ícone de aspas e Texto */}
        <div className="flex gap-3">
          <span className="text-terciary text-4xl font-serif font-bold leading-none">“</span>
          <p className="text-brown font-inter italic text-sm md:text-base leading-relaxed">
            {quote}
          </p>
        </div>
      </div>

      {/* Rodapé do Cartão */}
      <div className="mt-6">
        <div className="w-full h-0.5 bg-brown mb-3"></div>
        <h4 className="text-pink font-anton font-bold uppercase tracking-wide text-base">{author}</h4>
        <p className="text-brown font-inter text-xs mt-0.5">{role}</p>
      </div>
    </div>
  );
}

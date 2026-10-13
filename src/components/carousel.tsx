// src/components/carousel.tsx
import { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  // Referência para acessar a div do carrossel no DOM
  const carouselRef = useRef<HTMLDivElement>(null);

  
// Função que move o scroll e verifica os limites
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = 320; // O tamanho do pulo ao clicar

      if (direction === "right") {
        // Verifica se chegou no final (com margem de 1px para evitar bugs de arredondamento)
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // Volta suavemente para a posição 0 (início)
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Avança normalmente
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        // Verifica se está no início
        if (scrollLeft <= 0) {
          // Pula para o final do carrossel
          carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          // Volta normalmente
          carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  
// Função que move o scroll para a esquerda ou direita
  return (
    <div className="relative w-full flex items-center">
      {/* Botão Esquerda */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 md:-left-12 z-10 bg-terciary hover:bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-xl transition-colors"
      >
        &#10094;
      </button>

      {/* Container Rolável */}
      <div
        ref={carouselRef}
        // As classes 'snap' criam aquele efeito de travar certinho no card seguinte
        // A classe [&::-webkit-scrollbar]:hidden esconde a barra de rolagem cinza padrão
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full py-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }} // Para esconder barra no Firefox
      >
        {children}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 md:-right-12 z-10 bg-terciary hover:bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-xl transition-colors"
      >
        &#10095;
      </button>
    </div>
  );
}
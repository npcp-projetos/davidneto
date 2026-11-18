// src/components/carousel.tsx
import React, { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const validChildren = React.Children.toArray(children).filter(Boolean);

  // Se não houver cards válidos para exibir, esconde o carrossel vazio
  if (validChildren.length === 0) {
    return null;
  }

  // Função que move o scroll exatamente pela largura de 1 card + gap
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth, firstElementChild } = carouselRef.current;
      const cardWidth = firstElementChild ? firstElementChild.clientWidth : 300;
      const scrollAmount = cardWidth + 20; // Largura do card + gap-5 (20px)

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 5) {
          carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  const showArrowsClass =
    validChildren.length <= 1
      ? "hidden"
      : validChildren.length <= 3
      ? "flex md:hidden"
      : "flex";

  return (
    <div className="relative w-full flex items-center">
      {/* Botão Esquerda */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Anterior"
        className={`${showArrowsClass} absolute -left-3 md:-left-11 z-10 bg-terciary hover:bg-pink-500 text-white w-9 h-9 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 cursor-pointer`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Container Rolável */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full py-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {validChildren}
      </div>

      {/* Botão Direita */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Próximo"
        className={`${showArrowsClass} absolute -right-3 md:-right-11 z-10 bg-terciary hover:bg-pink-500 text-white w-9 h-9 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 cursor-pointer`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

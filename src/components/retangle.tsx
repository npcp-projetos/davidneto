// src/components/retangle.tsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface VideoCardProps {
  id?: number;
  titulo: string;
  videoUrl: string;
}

// Extrai o ID de 11 caracteres do YouTube de qualquer formato de URL (shorts, watch?v=, youtu.be, embed)
export function extractYouTubeId(url?: string): string | null {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();

  // Ignora strings vazias ou placeholders fictícios
  if (!trimmed || trimmed.includes("ID_VIDEO_")) return null;

  try {
    const parsedUrl = new URL(trimmed);
    let videoId: string | null = null;

    if (parsedUrl.pathname.startsWith("/shorts/")) {
      videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] || null;
    } else if (parsedUrl.pathname.startsWith("/embed/")) {
      videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] || null;
    } else if (parsedUrl.pathname === "/watch") {
      videoId = parsedUrl.searchParams.get("v");
    } else if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1).split("/")[0] || null;
    }

    if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return videoId;
    }
  } catch {
    // URL inválida
  }

  return null;
}

export default function Retangle({ titulo, videoUrl }: VideoCardProps) {
  const videoId = extractYouTubeId(videoUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useFallbackThumb, setUseFallbackThumb] = useState(false);

  // Fecha o modal ao pressionar ESC e trava o scroll do fundo enquanto aberto
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Esconde o card caso não exista um link válido de vídeo
  if (!videoId) {
    return null;
  }

  const thumbnailUrl = useFallbackThumb
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      {/* Card da Miniatura no Carrossel */}
      <div className="group relative shrink-0 w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] aspect-video bg-black rounded-lg overflow-hidden shadow-md snap-start border border-secundary/20">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Reproduzir ${titulo}`}
          className="relative w-full h-full block cursor-pointer focus:outline-none"
        >
          <img
            src={thumbnailUrl}
            alt={titulo}
            loading="lazy"
            onLoad={(e) => {
              // O YouTube retorna um placeholder de 120px quando maxresdefault não existe
              if (!useFallbackThumb && e.currentTarget.naturalWidth <= 120) {
                setUseFallbackThumb(true);
              }
            }}
            onError={() => {
              if (!useFallbackThumb) {
                setUseFallbackThumb(true);
              }
            }}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay suave e botão de Play centralizado */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-terciary/95 group-hover:bg-terciary group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
              <svg
                className="w-5 h-5 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Modal de Reprodução com Fundo Desfocado */}
      {isModalOpen &&
        createPortal(
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
          >
            {/* Contêiner do Vídeo em tamanho ampliado (modo cinema, sem tela cheia) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl lg:max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/15"
            >
              {/* Botão de Fechar */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-terciary text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={titulo}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

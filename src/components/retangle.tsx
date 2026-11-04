// src/components/retangle.tsx
interface VideoCardProps {
  id?: number;
  titulo: string;
  videoUrl: string;
}

// Converte automaticamente qualquer formato de link do YouTube (shorts, watch?v=, youtu.be) para /embed/
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    // Formato Shorts: https://www.youtube.com/shorts/VIDEO_ID
    if (parsedUrl.pathname.startsWith("/shorts/")) {
      const videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    // Formato Padrão: https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.pathname === "/watch") {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    // Formato Encurtado: https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1).split("/")[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    // Caso não seja uma URL válida, retorna a string original
  }

  return url;
}

export default function Retangle({ titulo, videoUrl }: VideoCardProps) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    // 'shrink-0' impede de espremer o card. 'snap-center' centraliza ele ao rolar.
    <div className="shrink-0 w-69 md:w-80 aspect-square bg-secundary flex items-center justify-center rounded-sm overflow-hidden shadow-md snap-center">
      <iframe
        src={embedUrl}
        title={titulo}
        className="w-full h-full border-0 rounded-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

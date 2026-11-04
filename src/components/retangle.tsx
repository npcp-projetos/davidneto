// src/components/retangle.tsx
interface VideoCardProps {
  id?: number;
  titulo: string;
  videoUrl: string;
}

export default function Retangle({ titulo, videoUrl }: VideoCardProps) {
  return (
    // 'shrink-0' impede de espremer o card. 'snap-center' centraliza ele ao rolar.
    <div className="shrink-0 w-69 md:w-80 aspect-square bg-secundary flex items-center justify-center rounded-sm overflow-hidden shadow-md snap-center">
      <iframe
        src={videoUrl}
        title={titulo}
        className="w-full h-full border-0 rounded-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

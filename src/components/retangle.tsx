// src/components/retangle.tsx
import { useLanguage } from "../context/LanguageContext";

interface VideoCardProps {
  videoUrl?: string;
}

export default function Retangle({ videoUrl }: VideoCardProps) {
  const { t } = useLanguage();

  return (
    // 'shrink-0' impede de espremer o card. 'snap-center' centraliza ele ao rolar.
    <div className="shrink-0 w-69 md:w-80 aspect-square bg-secundary flex items-center justify-center rounded-sm overflow-hidden shadow-md snap-center">
      {videoUrl ? (
        <span className="text-gray-500">{t.portfolio.videoPlaceholder}</span>
      ) : (
        <span className="text-gray-500 text-sm">{t.portfolio.noVideoPlaceholder}</span>
      )}
    </div>
  );
}

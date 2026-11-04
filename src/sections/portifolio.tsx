// src/sections/portifolio.tsx
import Retangle from "../components/retangle";
import Carousel from "../components/carousel";
import { useLanguage } from "../context/LanguageContext";

interface VideoItem {
  id: number;
  titulo: string;
  videoUrl: string;
}

// 1. Vídeos Curtos (Curta Metragem)
const videosCurtos: VideoItem[] = [
  { id: 1, titulo: "Curta Metragem 1", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_1" },
  { id: 2, titulo: "Curta Metragem 2", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_2" },
  { id: 3, titulo: "Curta Metragem 3", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_3" },
  { id: 4, titulo: "Curta Metragem 4", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_4" },
  { id: 5, titulo: "Curta Metragem 5", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_5" },
  { id: 6, titulo: "Curta Metragem 6", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_CURTO_6" },
];

// 2. Vídeos Longos (Longa Metragem)
const videosLongos: VideoItem[] = [
  { id: 1, titulo: "Longa Metragem 1", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_1" },
  { id: 2, titulo: "Longa Metragem 2", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_2" },
  { id: 3, titulo: "Longa Metragem 3", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_3" },
  { id: 4, titulo: "Longa Metragem 4", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_4" },
  { id: 5, titulo: "Longa Metragem 5", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_5" },
  { id: 6, titulo: "Longa Metragem 6", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_6" },
];

// 3. Motion Design
const videosMotionDesign: VideoItem[] = [
  { id: 1, titulo: "Motion Design 1", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_1" },
  { id: 2, titulo: "Motion Design 2", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_2" },
  { id: 3, titulo: "Motion Design 3", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_3" },
  { id: 4, titulo: "Motion Design 4", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_4" },
  { id: 5, titulo: "Motion Design 5", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_5" },
  { id: 6, titulo: "Motion Design 6", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_MOTION_6" },
];

export default function Portifolio() {
  const { t } = useLanguage();

  return (
    <section id="project" className="w-full min-h-screen bg-primary py-16 px-8 md:px-20 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        
        {/* Cabeçalho da Seção */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-3">
            {t.portfolio.badge}
          </span>
          <h2 className="text-white text-6xl font-['Anton'] uppercase">
            {t.portfolio.titlePrefix} <span className="text-terciary">{t.portfolio.titleHighlight}</span>
          </h2>
        </div>

        {/* Categoria: Vídeos Curtos */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            {t.portfolio.shortVideos}
          </span>

          <Carousel>
            {videosCurtos.map((video) => (
              <Retangle
                key={`curto-${video.id}`}
                titulo={video.titulo}
                videoUrl={video.videoUrl}
              />
            ))}
          </Carousel>
        </div>

        {/* Categoria: Vídeos Longos */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            {t.portfolio.longVideos}
          </span>

          <Carousel>
            {videosLongos.map((video) => (
              <Retangle
                key={`longo-${video.id}`}
                titulo={video.titulo}
                videoUrl={video.videoUrl}
              />
            ))}
          </Carousel>
        </div>

        {/* Confecção da área do motion design */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            {t.portfolio.motionDesign}
          </span>
          
          <Carousel>
            {videosMotionDesign.map((video) => (
              <Retangle
                key={`motion-${video.id}`}
                titulo={video.titulo}
                videoUrl={video.videoUrl}
              />
            ))}
          </Carousel>
        </div>

      </div>
    </section>
  );
}

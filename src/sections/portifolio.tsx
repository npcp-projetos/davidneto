// src/sections/portifolio.tsx
import Retangle, { extractYouTubeId } from "../components/retangle";
import Carousel from "../components/carousel";
import { useLanguage } from "../context/LanguageContext";

interface VideoItem {
  id: number;
  titulo: string;
  videoUrl: string;
}

// 1. Vídeos Curtos (Curta Metragem)
const videosCurtos: VideoItem[] = [
  { id: 1, titulo: "Curta Metragem 1", videoUrl: "https://youtube.com/shorts/IqIAf6buo9A" },
  { id: 2, titulo: "Curta Metragem 2", videoUrl: "https://youtube.com/shorts/6owF-QrmXZM" },
  { id: 3, titulo: "Curta Metragem 3", videoUrl: "https://youtube.com/shorts/6jZy6mISBL8" },
  { id: 4, titulo: "Curta Metragem 4", videoUrl: "https://www.youtube.com/watch?v=QTNvagzRsJA" },
  { id: 5, titulo: "Curta Metragem 5", videoUrl: "https://youtube.com/shorts/cDBzde56aX8" },
  { id: 6, titulo: "Curta Metragem 6", videoUrl: "https://youtube.com/shorts/k_yO9UZcB08" },
];

// 2. Vídeos Longos (Longa Metragem)
const videosLongos: VideoItem[] = [
  { id: 1, titulo: "Longa Metragem 1", videoUrl: "https://www.youtube.com/embed/ID_LONGO_1" },
  { id: 2, titulo: "Longa Metragem 2", videoUrl: "https://youtu.be/mDHtsP-TdB8" },
  { id: 3, titulo: "Longa Metragem 3", videoUrl: "https://youtu.be/1w8u7nSSJOE" },
  { id: 4, titulo: "Longa Metragem 4", videoUrl: "https://www.youtube.com/embed/ID_VIDEO_LONGO_4" },
  { id: 5, titulo: "Longa Metragem 5", videoUrl: "https://youtu.be/UTC05QLvDMk" },
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

  const curtosValidos = videosCurtos.filter((v) => extractYouTubeId(v.videoUrl));
  const longosValidos = videosLongos.filter((v) => extractYouTubeId(v.videoUrl));
  const motionValidos = videosMotionDesign.filter((v) => extractYouTubeId(v.videoUrl));

  return (
    <section id="project" className="w-full bg-primary py-14 px-8 md:px-16 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        
        {/* Cabeçalho da Seção */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-3">
            {t.portfolio.badge}
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-['Anton'] uppercase">
            {t.portfolio.titlePrefix} <span className="text-terciary">{t.portfolio.titleHighlight}</span>
          </h2>
        </div>

        {/* Categoria: Vídeos Curtos */}
        {curtosValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.shortVideos}
            </span>

            <Carousel>
              {curtosValidos.map((video) => (
                <Retangle
                  key={`curto-${video.id}`}
                  titulo={video.titulo}
                  videoUrl={video.videoUrl}
                />
              ))}
            </Carousel>
          </div>
        )}

        {/* Categoria: Vídeos Longos */}
        {longosValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.longVideos}
            </span>

            <Carousel>
              {longosValidos.map((video) => (
                <Retangle
                  key={`longo-${video.id}`}
                  titulo={video.titulo}
                  videoUrl={video.videoUrl}
                />
              ))}
            </Carousel>
          </div>
        )}

        {/* Confecção da área do motion design */}
        {motionValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.motionDesign}
            </span>
            
            <Carousel>
              {motionValidos.map((video) => (
                <Retangle
                  key={`motion-${video.id}`}
                  titulo={video.titulo}
                  videoUrl={video.videoUrl}
                />
              ))}
            </Carousel>
          </div>
        )}

      </div>
    </section>
  );
}

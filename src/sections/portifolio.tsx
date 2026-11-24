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
  { id: 1, titulo: "Todo Mundo Odeia Ser Estudante - (Dia do Estudante)", videoUrl: "https://www.youtube.com/embed/68ZIGfqF24w" },
  { id: 2, titulo: "O que é Sankofa - Afrogalaxia", videoUrl: "https://www.youtube.com/embed/A5suq_M2MuE" },
  { id: 3, titulo: "O Que é o Prisma? - Prêmio Prisma", videoUrl: "https://www.youtube.com/embed/yzVPbpyJNMo" },
  { id: 4, titulo: "POV: Sequestradas - Pré-Calourada Noite dos Vilões", videoUrl: "https://www.youtube.com/embed/zVyKD3XlZpQ" },
  { id: 5, titulo: "Análise do Marketing Moma Cookies - Maria Torquato", videoUrl: "https://www.youtube.com/embed/3kwbAX9nB_8" },
  { id: 6, titulo: "Entrevista Clinica Holiste - Projeto Universitário", videoUrl: "https://www.youtube.com/embed/DEbxj32tVEQ" },
  { id: 7, titulo: "Americanas Páscoa - Publicidade David Neto", videoUrl: "https://www.youtube.com/embed/bReDc_1t-Q4" },
  { id: 8, titulo: "Redbull Afropunk", videoUrl: "https://www.youtube.com/embed/DP0CJz_uelQ" },
  { id: 9, titulo: "Video Sequestro Calouro - Pré-Calourada Noite dos Vilões", videoUrl: "https://www.youtube.com/embed/cfM1653s9no" },
  { id: 10, titulo: "Aftermovie Adesivaço Zélia", videoUrl: "https://www.youtube.com/embed/zEBOlkaqc9g" },
  { id: 11, titulo: "Aftermovie Samba Zelia Beneficente - Dia das Crianças", videoUrl: "https://www.youtube.com/embed/5YHNXF8vOgg" },
  { id: 12, titulo: "Ei Criollo - Pré-Trote 2026.2", videoUrl: "https://www.youtube.com/embed/70XZ7xaCEl4" },
];

// 2. Aftermovies Real Time
const aftermoviesRealTime: VideoItem[] = [
  { id: 1, titulo: "Cobertura Real Time - Zé Paredão", videoUrl: "https://www.youtube.com/embed/hopUUza3IkQ" },
  { id: 2, titulo: "Cobertura Real Time - Vitrem", videoUrl: "https://www.youtube.com/embed/4C2XSXBoyeI" },
  { id: 3, titulo: "Cobertura Real Time - DJ Davi Wav", videoUrl: "https://www.youtube.com/embed/67fgUowM2DA" },
  { id: 4, titulo: "Cobertura Real Time - Bloquinho Delas", videoUrl: "https://www.youtube.com/embed/SAeCztMyDh4" }, 
];

// 3. Projetos Universitários
const projetosUniversitarios: VideoItem[] = [
  { id: 1, titulo: "The Publi Night Show", videoUrl: "https://www.youtube.com/embed/Xdz-JIpMmNA?si=cWX1pBg_LFkcEXUP" },
  { id: 2, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/py7Ims_tihI?si=4sk56OwRfcbyv5Nu" },
  { id: 3, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/BOdRR43j96M?si=dgsGN_9tOTKBLP-2" },
  { id: 4, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/Z27vjEjzDpU?si=fZDeqEI6IgEdiLUw" },
];

// 4. Aftermovies Eventos
const aftermoviesEventos: VideoItem[] = [
  { id: 1, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/jtt7TGBn7y4?si=Mr7yY0I2MLgOe0N_" },
  { id: 2, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/hSDlac4ORSk?si=GrmQl5gHp2RDiYdI" },
  { id: 3, titulo: "YouTube video player", videoUrl: "https://www.youtube.com/embed/S7xL-YInAuU?si=F5Aa2odOMmExKn78" },
];

export default function Portifolio() {
  const { t } = useLanguage();

  const curtosValidos = videosCurtos.filter((v) => extractYouTubeId(v.videoUrl));
  const projUniValidos = projetosUniversitarios.filter((v) => extractYouTubeId(v.videoUrl));
  const aftermoviesRealValidos = aftermoviesRealTime.filter((v) => extractYouTubeId(v.videoUrl));
  const aftermoviesEventosValidos = aftermoviesEventos.filter((v) => extractYouTubeId(v.videoUrl));


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

        {/* Categoria: Aftermovies Real Time */}
        {aftermoviesRealValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.aftermovieReal}
            </span>
            
            <Carousel>
              {aftermoviesRealValidos.map((video) => (
                <Retangle
                  key={`motion-${video.id}`}
                  titulo={video.titulo}
                  videoUrl={video.videoUrl}
                />
              ))}
            </Carousel>
          </div>
        )}

        {/* Categoria: Projetos Universitários */}
        {projUniValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.projectUni}
            </span>

            <Carousel>
              {projUniValidos.map((video) => (
                <Retangle
                  key={`longo-${video.id}`}
                  titulo={video.titulo}
                  videoUrl={video.videoUrl}
                />
              ))}
            </Carousel>
          </div>
        )}

        {/* Categoria: Aftermovies Eventos */}
        {aftermoviesEventosValidos.length > 0 && (
          <div>
            <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-xs md:text-sm inline-block mb-4">
              {t.portfolio.aftermovieEvents}
            </span>

            <Carousel>
              {aftermoviesEventosValidos.map((video) => (
                <Retangle
                  key={`longo-${video.id}`}
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

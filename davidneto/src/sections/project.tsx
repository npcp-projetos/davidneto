// src/sections/project.tsx
import Retangle from "../components/retangle";
import Carousel from "../components/carousel";

export default function Project() {

    const videosFicticios = [1, 2, 3, 4, 5, 6];

    return (
    <section id="project" className="w-full min-h-screen bg-primary py-16 px-8 md:px-20 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        
        {/* Cabeçalho da Seção */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-3">
            Projetos
          </span>
          <h2 className="text-white text-6xl font-['Anton'] uppercase">
            Alguns <span className="text-terciary">Trabalhos</span>
          </h2>
        </div>

        {/* Categoria: Vídeos Curtos */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            Vídeos Curtos
          </span>

          <Carousel>
            {videosFicticios.map((item) => (
                <Retangle key={`curto-${item}`} />
            ))}
            </Carousel>
        </div>

        {/* Categoria: Vídeos Longos */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            Vídeos Longos
          </span>

          <Carousel>
            {videosFicticios.map((item) => (
                <Retangle key={`curto-${item}`} />
            ))}
            </Carousel>
        
        </div>

        {/* Confecção da área do motion design */}
        <div>
          <span className="titan-regular bg-terciary text-white px-4 py-1 font-bold rounded-sm uppercase tracking-wider text-sm inline-block mb-6">
            Motion Design
          </span>
          
          <Carousel>
            {videosFicticios.map((item) => (
                <Retangle key={`curto-${item}`} />
            ))}
            </Carousel>
        </div>
        

      </div>
    </section>
  );
}
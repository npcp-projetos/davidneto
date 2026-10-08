// src/sections/about.tsx (ou o nome que preferir dar a esta seção)
import TimelineStep from "../components/passos";
import TestimonialCard from "../components/testimonials";

export default function ProcessAndTestimonials() {
  return (
    <div className="w-full flex flex-col">
      
      {/* Fundo creme aplicado com bg-secondary */}
      <section className="w-full bg-secundary py-20 px-8 md:px-24 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Título da Esquerda */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-6xl font-['Anton'] uppercase leading-none mb-4 tracking-wide">
              <span className="text-primary block">Como</span>
              <span className="text-terciary block">Funciona</span>
            </h2>
            <p className="text-primary text-lg md:text-xl font-medium max-w-xs">
              Simples, direto e feito para você!
            </p>
          </div>

          {/* Timeline da Direita */}
          <div className="lg:w-2/3 relative flex flex-col md:flex-row justify-between gap-6 md:gap-4 w-full mt-8 lg:mt-0">
            
            {/* Eixo da Timeline: Linha grossa com bordas arredondadas que passa por trás */}
            <div className="hidden md:block absolute top-5.25 left-3.75 right-3.75 h-3 bg-terciary rounded-full z-0"></div>

            <TimelineStep 
              number="1" 
              titleTop="Você entra" 
              titleBottom="Em contato" 
              description="Me conta sua ideia, objetivo e tipo de vídeo que você precisa." 
            />
            <TimelineStep 
              number="2" 
              titleTop="Recebo seus" 
              titleBottom="Arquivos" 
              description="Você me envia da maneira que preferir." 
            />
            <TimelineStep 
              number="3" 
              titleTop="Começo a" 
              titleBottom="Edição" 
              description="Organização, cortes, montagem." 
            />
            <TimelineStep 
              number="4" 
              titleTop="Você recebe" 
              titleBottom="Pronto" 
              description="Entrega dentro do prazo e ajuste se necessário." 
            />
          </div>
        </div>
      </section>

      {/* --- PARTE 2: DEPOIMENTOS (Fundo Escuro) --- */}
      {/* O 'relative' aqui é necessário para posicionar a borda rasgada */}
      <section className="relative w-full bg-primary py-24 px-8 md:px-24 flex justify-center">
        
        {/* Efeito de papel rasgado separando as sessões */}
        <div className="absolute top-0 left-0 w-full h-8 bg-primary -translate-y-full rotate-180 mask-edge z-10" />

        <div className="w-full max-w-6xl flex flex-col gap-12">
          
          {/* Cabeçalho Depoimentos */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-white text-5xl md:text-6xl font-['Anton'] uppercase leading-none mb-2">
                O que falam <br/> 
                <span className="text-terciary">sobre o trabalho</span>
              </h2>
              <p className="text-secondary text-lg">Resultados que falam mais que palavras.</p>
            </div>
            
            <div className="relative">
              {/* Botão flutuante estilizado */}
              <span className="titan-regular bg-terciary text-white px-6 py-2 rounded-sm uppercase tracking-wider text-sm shadow-md">
                Depoimentos
              </span>
              {/* Espaço reservado para aquele ícone/vetor pontilhado rosa do Figma, se você tiver exportado */}
              <div className="absolute -right-8 -top-8 w-12 h-12 bg-contain bg-no-repeat opacity-50" style={{ backgroundImage: "url('/assets/decoracao-depoimento.png')" }}></div>
            </div>
          </div>

          {/* Grid de Cartões */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <TestimonialCard 
              quote="Desde que eu comecei a trabalhar com David, meus vídeos evoluíram muito."
              author="Caio Morelli"
              role="Criador de conteúdo"
            />
            <TestimonialCard 
              quote="Edição impecável. Ele entende o que eu quero mesmo quando não sei explicar."
              author="Rafaela Lima"
              role="Empreendedora"
            />
            <TestimonialCard 
              quote="Meu canal deu outro salto quando comecei a investir em edição profissional."
              author="Victor Hugo"
              role="Youtuber"
            />
            <TestimonialCard 
              quote="Edições perfeitas e entregas dentro do prazo."
              author="Felipe Mendes"
              role="Criador de conteúdo"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
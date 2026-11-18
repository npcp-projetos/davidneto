// src/sections/about.tsx (ou o nome que preferir dar a esta seção)
import { useEffect, useRef, useState } from "react";
import TimelineStep from "../components/passos";
import TestimonialCard from "../components/testimonials";
import paperTexture from "../assets/images/efeito-papel-rasgado.png";
import buttonDetail from "../assets/images/efeito-botao-depoimento.png";
import { useLanguage } from "../context/LanguageContext";

export default function ProcessAndTestimonials() {
  const { t } = useLanguage();
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      number: "1",
      titleTop: t.process.steps.step1TitleTop,
      titleBottom: t.process.steps.step1TitleBottom,
      description: t.process.steps.step1Description,
      href: "#contact",
    },
    {
      number: "2",
      titleTop: t.process.steps.step2TitleTop,
      titleBottom: t.process.steps.step2TitleBottom,
      description: t.process.steps.step2Description,
    },
    {
      number: "3",
      titleTop: t.process.steps.step3TitleTop,
      titleBottom: t.process.steps.step3TitleBottom,
      description: t.process.steps.step3Description,
    },
    {
      number: "4",
      titleTop: t.process.steps.step4TitleTop,
      titleBottom: t.process.steps.step4TitleBottom,
      description: t.process.steps.step4Description,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* Fundo creme aplicado com bg-secundary */}
      <section
        id="como-funciona"
        ref={sectionRef}
        className="relative w-full bg-secundary py-20 px-8 md:px-24 flex justify-center"
      >
        
        {/* Efeito de papel rasgado superior separando as seções */}
        <img
          src={paperTexture}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 -translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
        />

        <div className="relative z-20 w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Título da Esquerda */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-6xl font-anton uppercase leading-none mb-4 tracking-wide">
              <span className="text-primary block">{t.process.titleLine1}</span>
              <span className="text-terciary block">{t.process.titleLine2}</span>
            </h2>
            <p className="text-primary font-inter text-lg md:text-xl font-bold max-w-xs">
              {t.process.subtitle}
            </p>
          </div>

          {/* Timeline da Direita */}
          <div className="lg:w-2/3 relative flex flex-col md:flex-row justify-between gap-8 md:gap-4 w-full mt-6 lg:mt-0">
            
            {/* Eixo Vertical da Timeline (Mobile): Linha reta vertical conectando os círculos numerados */}
            <div
              className={`md:hidden absolute top-2 bottom-8 left-6 -translate-x-1/2 w-2.5 bg-terciary rounded-full z-0 origin-top transition-transform duration-1500 ease-out ${
                isTimelineVisible ? "scale-y-100" : "scale-y-0"
              }`}
            ></div>

            {/* Eixo Horizontal da Timeline (Desktop): Linha grossa com bordas arredondadas que passa por trás */}
            <div
              className={`hidden md:block absolute top-4.5 left-3.75 right-3.75 h-3 bg-terciary rounded-full z-0 origin-left transition-transform duration-2800 ease-out ${
                isTimelineVisible ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>

            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                index={index}
                isVisible={isTimelineVisible}
                number={step.number}
                titleTop={step.titleTop}
                titleBottom={step.titleBottom}
                description={step.description}
                href={step.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTE 2: DEPOIMENTOS (Fundo Escuro) --- */}
      {/* O 'relative' aqui é necessário para posicionar a borda rasgada */}
      <section className="relative w-full bg-brown py-24 px-8 md:px-24 flex justify-center">
        
        {/* Efeito de papel rasgado superior separando as seções */}
        <img
          src={paperTexture}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 -translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
        />

        <div className="relative z-20 w-full max-w-6xl flex flex-col gap-12">
          
          {/* Cabeçalho Depoimentos */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-white text-5xl md:text-6xl font-anton uppercase leading-none mb-3">
                {t.testimonials.titleLine1} <br/> 
                <span className="text-pink">{t.testimonials.titleLine2}</span>
              </h2>
              <p className="text-off-white font-inter font-semibold text-base md:text-lg">
                {t.testimonials.subtitle}
              </p>
            </div>
            
            <div className="relative inline-block mt-6 md:mt-0 mr-10 md:mr-12">
              {/* Botão flutuante estilizado */}
              <span className="inline-block titan-regular bg-pink text-white px-6 py-2.5 rounded-sm uppercase tracking-wider text-sm">
                {t.testimonials.badge}
              </span>
              {/* Detalhe decorativo dos três traços rosas */}
              <img
                src={buttonDetail}
                alt=""
                aria-hidden="true"
                className="absolute -top-9 -right-10 md:-top-11 md:-right-12 w-12 h-12 md:w-14 md:h-14 object-contain pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Grid de Cartões */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <TestimonialCard 
              quote={t.testimonials.cards.card1Quote}
              author="Caio Morelli"
              role={t.testimonials.cards.card1Role}
            />
            <TestimonialCard 
              quote={t.testimonials.cards.card2Quote}
              author="Rafaela Lima"
              role={t.testimonials.cards.card2Role}
            />
            <TestimonialCard 
              quote={t.testimonials.cards.card3Quote}
              author="Victor Hugo"
              role={t.testimonials.cards.card3Role}
            />
            <TestimonialCard 
              quote={t.testimonials.cards.card4Quote}
              author="Felipe Mendes"
              role={t.testimonials.cards.card4Role}
            />
          </div>

        </div>

        {/* Efeito de papel rasgado inferior separando as seções */}
        <img
          src={paperTexture}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
        />
      </section>
    </div>
  );
}

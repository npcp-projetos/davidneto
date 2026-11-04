// import aboutImage from '../assets/images/about-image.webp';
import paperTexture from '../assets/images/efeito-papel-rasgado.png';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const metrics = [
    { value: "+80", label: t.about.metrics.videosDelivered },
    { value: "+6", label: t.about.metrics.professionalsServed },
    { value: "+3", label: t.about.metrics.eventsCovered },
    { value: "+3", label: t.about.metrics.shortFilmsMade },
  ];

  return (
    <section id="sobre-mim" className="relative w-full bg-off-white">
      <img
        src={paperTexture}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
      />

      <div className="relative w-full flex items-center justify-center">
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-14 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="w-full max-w-sm h-52 sm:h-56 md:h-60 bg-stone-300 rounded-sm overflow-hidden">
                {/* <img
                  src={aboutImage}
                  alt="David Neto"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-wide leading-none text-brown">
                {t.about.titlePrefix} <span className="text-pink inline-block">{t.about.titleHighlight}</span>
              </h2>

              <div className="space-y-1.5 text-brown text-xs sm:text-sm leading-relaxed font-inter font-medium">
                <p>
                  {t.about.bioParagraph1BeforeName}
                  <strong className="text-pink font-bold">{t.about.bioName}</strong>
                  {t.about.bioParagraph1AfterName}
                </p>
                <p>
                  {t.about.bioParagraph2}
                </p>
                <p>
                  {t.about.bioParagraph3}
                </p>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-2 max-w-4xl mx-auto text-center">
            {metrics.map(({ value, label }, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="font-anton text-3xl md:text-4xl text-pink uppercase leading-none">
                  {value}
                </span>
                <span className="font-inter font-bold uppercase text-brown text-[11px] sm:text-xs mt-1.5 leading-tight max-w-[14ch] text-balance">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="relative w-full h-8 bg-brown">
        <img
          src={paperTexture}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 -translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

// import hero from '../assets/images/hero.webp';
// import fundo from '../assets/images/fundo-portfolio.png';
import fundo2 from '../assets/images/fundo-padrao-portfolio.png';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="relative w-full min-h-125 flex items-center justify-start overflow-hidden shadow-lg">
        <img 
          src={fundo2} 
          alt={t.hero.bannerAlt} 
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
        />

        <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-brown from-25% via-brown/90 via-35% to-transparent to-75%" />

        <div className="relative z-20 text-left text-white px-4 md:w-3/5 md:px-16 w-xs py-12 max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-anton uppercase tracking-tight drop-shadow-md">
            {t.hero.titleLine1}<br />
            <span className="whitespace-nowrap text-pink">{t.hero.titleLine2}</span>
          </h1>
          <p className="text-sm md:text-base md:w-md w-4/6 text-gray-200">
            {t.hero.subtitleLine1}<br /> {t.hero.subtitleLine2}
          </p>

          <div className="flex gap-3">
            <Button element="anchor" href="#contact" variant="primary" size="lg">
              {t.hero.ctaButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
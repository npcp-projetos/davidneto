import hero from '../assets/images/hero.webp';
import { Button } from './Button';

export default function Hero() {
  return (
    <section>
      <div className="relative w-full min-h-[500px] flex items-center justify-start overflow-hidden shadow-lg">
        <img 
          src={hero} 
          alt="Banner David Neto" 
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
        />

        <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-brown from-25% via-brown/80 via-35% to-transparent to-55%" />

        <div className="relative z-20 text-left text-white px-4 md:px-16 py-12 max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-anton uppercase tracking-tight drop-shadow-md">
            Você cria.<br />
            <span className="whitespace-nowrap text-pink">Eu faço acontecer.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-200">
            Edição de vídeos para criadores que querem<br /> transformar boas ideias em conteúdos memoráveis.
          </p>

          <div className="flex gap-3">
            <Button element="anchor" href="#orcamento" variant="primary" size="lg">
              Quero fazer um orçamento
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
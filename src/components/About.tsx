// import aboutImage from '../assets/images/about-image.webp';
import paperTexture from '../assets/images/efeito-papel-rasgado.png';

export default function About() {
  const metrics = [
    { value: "+80", label: "Vídeos Entregues" },
    { value: "+6", label: "Profissionais Atendidos" },
    { value: "+3", label: "Eventos Cobertos" },
    { value: "+3", label: "Curtas Metragens Feitos" },
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
                Não entrego só <span className="text-pink inline-block">edição.</span>
              </h2>

              <div className="space-y-1.5 text-brown text-xs sm:text-sm leading-relaxed font-inter font-medium">
                <p>
                  Meu nome é
                  <strong className="text-pink font-bold"> David Neto</strong> e o
                  audiovisual é a linguagem que escolhi para traduzir tudo o que
                  minha boca não consegue falar. Acredito que tudo se comunica,
                  inclusive o que passa despercebido, e é desse olhar atento que
                  nasce o meu trabalho.
                </p>
                <p>
                  Enquadramentos, ritmo e silêncios não são escolhas técnicas para
                  mim, mas decisões de sentido. Busco transformar ideias simples
                  em Imagens com identidade, criando vídeos que equilibram
                  estética e intenção.
                </p>
                <p>
                  Ao colaborar com marcas, meu foco é traduzir a essência em
                  imagem, construindo conteúdos com personalidade, qualidade e
                  coerência, pensados não apenas para serem vistos, mas para
                  permanecerem.
                </p>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-2 max-w-4xl mx-auto text-center">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
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

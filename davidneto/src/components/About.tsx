// import aboutImage from '../assets/images/about-image.webp';
import paperTexture from '../assets/images/efeito-papel-rasgado.png';

export default function About() {
  const metrics = [
    { value: "+250", label: "Vídeos Entregues" },
    { value: "+30", label: "Criadores Atendidos" },
    { value: "Milhões", label: "De Visualizações Geradas" },
    { value: "100%", label: "Personalizado Para Você" },
  ];

  return (
    <section className="relative w-full bg-off-white">
      <img
        src={paperTexture}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-y-1/2 w-full h-8 md:h-12 object-cover z-30 pointer-events-none select-none"
      />

      <div className="relative w-full min-h-125 flex items-center justify-start">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-12 py-16 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 sm:h-100 lg:h-112.5 bg-stone-300 rounded-sm overflow-hidden shadow-sm">
              {/* <img
                src={aboutImage}
                alt="David Neto"
                className="w-full h-full object-cover"
              /> */}
            </div>

            <div className="space-y-6">
              <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wide leading-none text-brown">
                Não entrego só <span className="text-pink inline-block">edição.</span>
              </h2>

              <div className="space-y-4 text-brown text-base sm:text-lg leading-relaxed font-inter font-medium">
                <p>
                  Meu nome é
                  <strong className="text-pink font-bold"> David Neto</strong> e o
                  audiovisual é a linguagem que escolhi para traduzir tudo o que
                  minha boca não consegue falar. Acredito que tudo se comunica,
                  inclusive o que passa despercebido, e é desse olhar atento que
                  nasce o meu trabalho.
                </p>
                <p>
                  Enquadramentos, ritmo e silêncio não são escolhas técnicas para
                  mim, mas decisões de sentido. Busco transformar ideias simples
                  em imagens com identidade, criando vídeos que equilibram
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 text-center">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-anton text-4xl md:text-6xl text-pink uppercase">
                  {value}
                </span>
                <span className="font-inter font-bold uppercase text-brown text-sm sm:text-base mt-2 leading-tight max-w-[15ch] text-balance">
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
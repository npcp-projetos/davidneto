// import aboutImage from '../assets/images/about-image.webp';

export default function About() {
  const metrics = [
    { value: "+250", label: "Vídeos Entregues" },
    { value: "+30", label: "Criadores Atendidos" },
    { value: "Milhões", label: "De Visualizações Geradas" },
    { value: "100%", label: "Personalizado Para Você" },
  ];

  return (
    <section>
      <div className="relative w-full min-h-[500px] flex items-center justify-start overflow-hidden shadow-lg">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-12 py-12 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[450px] bg-stone-300 rounded-sm overflow-hidden shadow-sm">
              <img
                alt="David Neto"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-anton text-4xl md:text-6xl uppercase tracking-wide leading-none text-brown whitespace-nowrap">
                Não entrego só <span className="text-pink inline-block">edição.</span>
              </h2>

              <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-brown text-center">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-anton text-4xl md:text-6xl text-pink">
                  {value}
                </span>
                <span className="font-anton uppercase text-stone-800 text-sm sm:text-base mt-1 leading-snug text-balance">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
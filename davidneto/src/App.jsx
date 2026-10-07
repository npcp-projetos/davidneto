import './App.css';

function Passo(props) {
  return (
    <div className="passo">
      <div className="numero-circulo">{props.numero}</div>
      <div className="caixa-marrom">{props.titulo} <span>{props.titulo2}</span></div>
      <p>{props.texto}</p>
    </div>
  );  
}

function CartaoDepoimento({ texto, nome, cargo }) { 
  return (
    <div className="cartao">
      <div className="estrelas">★★★★★</div>
      <div className="citacao">“</div>
      <p className="texto-depoimento">{texto}</p>
      <hr />
      <p className="nome-cliente">{nome}</p>
      <p className="cargo-cliente">{cargo}</p>
    </div>
  );
}

function App() {
  return (
    <div className="pagina">
      
      <section className="secao-como-funciona">
        <div className="container-flex">
          <div className="textos-esquerda">
            <h1>COMO <span>FUNCIONA</span></h1>
            <p>Simples, direto e feito para você!</p>
          </div>

          <div className="linha-do-tempo">
            <div className="linha-rosa-fundo"></div>
            
            <div className="passos-container">
              
              <Passo 
                numero="1" 
                titulo="VOCÊ ENTRA"
                titulo2="EM CONTATO"
                texto="Me conta sua ideia, objetivo e tipo de vídeo que você precisa." 
              />
              <Passo 
                numero="2" 
                titulo="RECEBO SEUS" 
                titulo2="ARQUIVOS"
                texto="Você me envia da maneira que preferir." 
              />
              <Passo 
                numero="3" 
                titulo="COMEÇO A" 
                titulo2="EDIÇÃO"
                texto="Organização, cortes, montagem." 
              />
              <Passo 
                numero="4" 
                titulo="VOCÊ RECEBE" 
                titulo2="PRONTO"
                texto="Entrega dentro do prazo e ajuste se necessário." 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="secao-depoimentos">
        <div className="container-depoimentos">
          <div className="cabecalho-depoimentos">
            <div className="textos-cabecalho">
              <h2>O QUE FALAM <br /><span>SOBRE O TRABALHO</span></h2>
              <p>Resultados que falam mais que palavras.</p>
            </div>
            <button className="botao-depoimentos">DEPOIMENTOS</button>
          </div>

          <div className="grid-depoimentos">
            <CartaoDepoimento 
              texto="Desde que eu comecei a trabalhar com David, meus vídeos evoluíram muito."
              nome="CAIO MORELLI"
              cargo="Criador de conteúdo"
            />
            <CartaoDepoimento 
              texto="Edição impecável. Ele entende o que eu quero mesmo quando não sei explicar."
              nome="RAFAELA LIMA"
              cargo="Empreendedora"
            />
            <CartaoDepoimento 
              texto="Meu canal deu outro salto quando comecei a investir em edição profissional."
              nome="VICTOR HUGO"
              cargo="Youtuber"
            />
            <CartaoDepoimento 
              texto="Edições perfeitas e entregas dentro do prazo."
              nome="FELIPE MENDES"
              cargo="Criador de conteúdo"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;

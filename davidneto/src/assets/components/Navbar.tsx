import logo from '../images/logo.webp';
import { Button } from './Button'

export default function Navbar() {
  const toggleLanguage: () => void = () => {
    // Ainda não implementado, checa se alterna o idioma do site.
    console.log('Alterando idioma...');
  };

  return (
    <nav className="bg-brown py-2"aria-label="Navegação principal">
      <div className="flex items-center justify-between px-4 md:px-16">
        <div>
          <a href="#" className="block transition-opacity">
            <img src={logo} alt="Logo David Neto" className="h-12 w-auto"/>
          </a>
        </div>

        <div className="hidden md:flex gap-8">
          <ul className="flex items-center gap-10 list-none m-0 p-0 font-anton text-lg">
            <li>
              <a href="#" className="uppercase text-white hover:opacity-80 transition-opacity">Sobre mim</a>
            </li>
            <li>
              <a href="#" className="uppercase text-white hover:opacity-80 transition-opacity">Trabalhos</a>
            </li>
            <li>
              <a href="#" className="uppercase text-white hover:opacity-80 transition-opacity">Como Funciona</a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>English</Button>

              <Button element="anchor" href="#orcamento" variant="outline-pink" size="sm">Orçamento</Button>
          </div>
        </div>

      </div>
    </nav>
  )
}
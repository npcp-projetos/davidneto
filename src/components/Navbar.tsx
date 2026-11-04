import logo from '../assets/images/logo.webp';
import { Button } from './Button'
import { useMobileMenu } from '../hooks/useMobileMenu';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu()

  const toggleLanguage: () => void = () => {
    // Ainda não implementado, checa se alterna o idioma do site.
    console.log('Alterando idioma...');
  };

  return (
    <header className="main-header">
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
                <a href="#sobre-mim" className="uppercase text-white hover:opacity-80 transition-opacity">Sobre mim</a>
              </li>
              <li>
                <a href="#project" className="uppercase text-white hover:opacity-80 transition-opacity">Trabalhos</a>
              </li>
              <li>
                <a href="#como-funciona" className="uppercase text-white hover:opacity-80 transition-opacity">Como Funciona</a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={toggleLanguage}>English</Button>
                <Button element="anchor" href="#contact" variant="outline-pink" size="sm">Orçamento</Button>
            </div>
          </div>
        
        <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 text-white md:hidden rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden px-4 pb-4 pt-2 border-t border-white/10 mt-2">
            <ul className="flex flex-col list-none m-0 p-0 font-anton text-lg">
              <li><a href="#sobre-mim" onClick={close} className="block py-3 uppercase text-white hover:opacity-80">Sobre mim</a></li>
              <li><a href="#project" onClick={close} className="block py-3 uppercase text-white hover:opacity-80">Trabalhos</a></li>
              <li><a href="#como-funciona" onClick={close} className="block py-3 uppercase text-white hover:opacity-80">Como Funciona</a></li>
            </ul>

            <div className="flex flex-col gap-3 pt-3">
              <Button variant="outline" classes="w-full justify-center" onClick={toggleLanguage}>English</Button>
              <Button element="anchor" href="#contact" variant="outline-pink" classes="w-full justify-center" onClick={close}>Orçamento</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
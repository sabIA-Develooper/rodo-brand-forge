import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Produtos', href: '/produtos' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Portfólio', href: '/portfolio' },
  { name: 'Representantes', href: '/representantes' },
];

const products = [
  { name: 'Caçambas Basculantes', href: '/produtos/cacambas-basculantes' },
  { name: 'Carrocerias', href: '/produtos/carrocerias' },
  { name: 'Baús', href: '/produtos/baus' },
  { name: 'Tanques', href: '/produtos/tanques' },
];

const services = [
  { name: 'Corte e Dobra', href: '/servicos#corte-dobra' },
  { name: 'Montagem Industrial', href: '/servicos#montagem' },
  { name: 'Reforma de Equipamentos', href: '/servicos#reforma' },
  { name: 'Orçamento', href: '/orcamento' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5579321830000";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os equipamentos RODOTEC.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-3 sm:mb-6">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-base sm:text-lg">R</span>
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl">
                RODOTEC
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Há mais de 25 anos fabricando equipamentos rodoviários de qualidade superior, 
              atendendo todo o Brasil com soluções sob medida.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="touch-target w-10 h-10 sm:w-11 sm:h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="#" 
                className="touch-target w-10 h-10 sm:w-11 sm:h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="#" 
                className="touch-target w-10 h-10 sm:w-11 sm:h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base touch-target block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/sobre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base touch-target block py-1"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base touch-target block py-1"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Produtos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base touch-target block py-1"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-xs sm:text-sm">
                  <p className="font-medium">RODOTEC Equipamentos</p>
                  <p>Sergipe - Brasil</p>
                  <p>CEP: 00000-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0" />
                <a 
                  href="tel:+5579321830000"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base touch-target"
                >
                  (79) 3218-3000
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/60 flex-shrink-0" />
                <a 
                  href="mailto:comercial@rodotec.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm touch-target break-all"
                >
                  comercial@rodotec.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mt-1 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-xs sm:text-sm">
                  <p>Segunda a Sexta: 07h às 17h</p>
                  <p>Sábado: 07h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-primary-foreground/60 text-xs sm:text-sm">
              © {currentYear} RODOTEC Equipamentos Rodoviários. Todos os direitos reservados.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <Link 
                to="/politica-privacidade" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors touch-target"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-uso" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors touch-target"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp flutuante agora centralizado no App */}
    </footer>
  );
}
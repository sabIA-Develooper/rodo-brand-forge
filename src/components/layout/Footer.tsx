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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <div className="font-display font-bold text-2xl">
                RODOTEC
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Há mais de 25 anos fabricando equipamentos rodoviários de qualidade superior, 
              atendendo todo o Brasil com soluções sob medida.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/sobre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Produtos</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium">RODOTEC Equipamentos</p>
                  <p>Sergipe - Brasil</p>
                  <p>CEP: 00000-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <a 
                  href="tel:+5579321830000"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (79) 3218-3000
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <a 
                  href="mailto:comercial@rodotec.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  comercial@rodotec.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div className="text-primary-foreground/80 text-sm">
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} RODOTEC Equipamentos Rodoviários. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/politica-privacidade" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-uso" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </footer>
  );
}
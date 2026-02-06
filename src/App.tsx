import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Trash2, 
  Construction, 
  Maximize, 
  Navigation, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Hammer,
  MessageCircle
} from 'lucide-react';

// Definimos la estructura de los servicios para TypeScript
interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber: string = "5492926475933";
  const whatsappLink: string = `https://wa.me/${whatsappNumber}`;

  const services: Service[] = [
    {
      title: "Excavaciones de Precisión",
      desc: "Especialistas en pozos, zanjas y bases con maquinaria de última generación.",
      icon: <Construction className="w-10 h-10" />,
      img: "/assets/excavacion.jpg" 
    },
    {
      title: "Movimiento de Suelos",
      desc: "Nivelación, compactación y preparación de terrenos para cualquier escala de obra.",
      icon: <Maximize className="w-10 h-10" />,
      img: "/assets/suelos.jpg"
    },
    {
      title: "Remolque de Maquinaria",
      desc: "Traslado seguro de maquinaria pesada y vehículos especiales con logística propia.",
      icon: <Truck className="w-10 h-10" />,
      img: "/assets/remolque.jpg"
    },
    {
      title: "Limpieza de Terrenos",
      desc: "Desmonte y retiro de vegetación para dejar el lote listo para construir.",
      icon: <Navigation className="w-10 h-10" />,
      img: "/assets/limpieza.jpg"
    },
    {
      title: "Movimiento de Escombros",
      desc: "Retiro eficiente de materiales excedentes con disposición final certificada.",
      icon: <Trash2 className="w-10 h-10" />,
      img: "/assets/escombros.jpg"
    },
    {
      title: "Demoliciones",
      desc: "Ejecución controlada de demoliciones totales o parciales con máxima seguridad.",
      icon: <Hammer className="w-10 h-10" />,
      img: "/assets/demolicion.jpg"
    }
  ];

  const BrandLogo: React.FC<{ light?: boolean }> = ({ light = false }) => (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="flex shadow-xl border-2 border-black/10">
        <div className="bg-white text-black w-10 h-10 flex items-center justify-center font-black text-2xl border-r border-black/10">
          F
        </div>
        <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-black text-2xl">
          B
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tighter ${light ? 'text-white' : 'text-neutral-900'}`}>
          SERVICIOS
        </span>
        <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase">
          C. Suárez, Bs. As.
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <BrandLogo light={!scrolled} />

          <div className="hidden md:flex gap-8 items-center font-medium">
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${scrolled ? 'text-neutral-600' : 'text-white/90'} hover:text-orange-600 font-bold transition-colors uppercase text-xs tracking-widest`}>
                {item}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all active:scale-95 shadow-lg font-bold flex items-center gap-2 text-xs">
              <MessageCircle className="w-4 h-4" /> WHATSAPP
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-black' : 'text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
            <div className="flex flex-col p-6 gap-4">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-bold py-2 border-b border-neutral-100 uppercase" onClick={() => setIsMenuOpen(false)}>{item}</a>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-center flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" /> WhatsApp Directo
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero.jpg" className="w-full h-full object-cover brightness-[0.3]" alt="Portada FB Servicios" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase">
              Fuerza que <br/><span className="text-orange-600">Construye</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
              Expertos en movimientos de suelos en Coronel Suárez y la región. Potencia y precisión para sus bases.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all items-center gap-3 shadow-2xl">
              CONSULTAR POR WHATSAPP <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">Nuestra Flota</h2>
            <h3 className="text-4xl md:text-6xl font-black text-neutral-900 leading-none uppercase tracking-tighter">Servicios Profesionales</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-200">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="mb-6 text-orange-600 bg-orange-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-neutral-900 uppercase leading-none tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-neutral-600 font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <img src="/assets/trayectoria.jpg" className="w-full h-full object-cover grayscale" alt="Trayectoria FB" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-orange-600 font-black tracking-[0.3em] uppercase mb-6 text-sm italic">Trayectoria Local</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-10 leading-none uppercase tracking-tighter italic text-white">Coronel Suárez</h3>
          <p className="text-xl text-neutral-400 mb-12 font-medium">
            Brindamos soluciones de infraestructura para todo el sudoeste de Buenos Aires. Seriedad, cumplimiento y maquinaria propia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{v:"15+",l:"Años"},{v:"400+",l:"Obras"},{v:"20+",l:"Máquinas"},{v:"100%",l:"Confianza"}].map((s,i)=>(
              <div key={i}>
                <div className="text-3xl font-black text-white">{s.v}</div>
                <div className="text-orange-600 text-[10px] font-black uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-12 rounded-[2rem] text-white flex flex-col items-center text-center">
              <Phone className="w-10 h-10 text-orange-600 mb-6" />
              <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">Llamadas</p>
              <p className="text-2xl font-bold">2926 47-5933</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 p-12 rounded-[2rem] text-white flex flex-col items-center text-center transform hover:scale-105 transition-all shadow-xl">
              <MessageCircle className="w-10 h-10 text-white mb-6" />
              <p className="text-green-200 text-xs font-black uppercase tracking-widest mb-2">WhatsApp</p>
              <p className="text-2xl font-bold">Enviar Mensaje</p>
            </a>
            <div className="bg-neutral-900 p-12 rounded-[2rem] text-white flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-orange-600 mb-6" />
              <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">Ubicación</p>
              <p className="text-2xl font-bold">Coronel Suárez</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 pt-20 pb-10 text-white border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <BrandLogo light={true} />
          <p className="text-neutral-600 text-[10px] font-black uppercase tracking-widest text-center">
            © {new Date().getFullYear()} FB SERVICIOS - Movimiento de Suelos en el Sudoeste Bonaerense.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
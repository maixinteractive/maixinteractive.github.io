import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import mxLogo from "./assets/mx.png"; 

export default function App() {
  const containerRef = useRef(null);
  const [lang, setLang] = useState("en");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // İçerik Sözlüğü ve Gizlilik Politikası Metinleri
  const t = {
    en: {
      nav: [
        { id: "vision", text: "VISION" },
        { id: "apps", text: "APPS" },
        { id: "games", text: "GAMES" },
        { id: "support", text: "SUPPORT" }
      ],
      hero: {
        tag: "FUTURE FORWARD",
        line1: "WHERE IDEAS",
        line2: "COME ALIVE.",
        cta: "DISCOVER MAIX"
      },
      vision: {
        title: "VISION",
        text: "We are driven by a singular passion: to transform bold ideas into living, breathing digital worlds. By blending cutting-edge technology with artistic vision, we create immersive experiences that leave a lasting mark on the mobile and PC ecosystems."
      },
      projects: {
        appsTitle: "APPS",
        gamesTitle: "GAMES",
        card1: {
          title: "SubVex",
          status: "COMING SOON"
        },
        card2: {
          title: "The Edge of the Mind",
          status: "COMING SOON"
        }
      },
      contact: {
        title: "SUPPORT",
        subtitle: "GET IN TOUCH",
        buttonText: "heymaix@outlook.com",
      },
      privacy: {
        linkText: "Privacy Policy",
        title: "Privacy Policy – MAIX Interactive",
        date: "Last Updated: February 20, 2026",
        intro: "MAIX Interactive (“we”, “our”, “MAIX”) values the privacy of our users. This policy explains how information is handled for visitors of our website hosted on GitHub Pages.",
        sections: [
          {
            title: "1. Information We Collect",
            body: "We may automatically collect the following information from visitors of our website:\n\n• IP address, browser type, device type, and operating system.\n• Site navigation data (pages visited, time spent on site, etc.)\n\nThis information is used for analytics and performance purposes and does not personally identify visitors.\nAdditionally, if users contact us via our email links, this information (email address and message content) is stored solely for support purposes."
          },
          {
            title: "2. Cookies",
            body: "Our website may use cookies. These cookies are used to:\n\n• Collect site usage statistics\n• Optimize the site and identify errors\n\nCookies do not personally identify you."
          },
          {
            title: "3. Sharing of Information",
            body: "MAIX Interactive does not sell or share collected information with third parties. However, information may be shared in the following cases:\n\n• When required by law\n• With hosting or technical service providers (e.g., GitHub Pages, analytics services)"
          },
          {
            title: "4. Security",
            body: "Collected information is protected with reasonable technical measures. However, 100% security of data transmitted over the Internet cannot be guaranteed."
          },
          {
            title: "5. User Rights",
            body: "Since the data collected is anonymous, deletion requests are generally not applicable.\nAny emails sent to us can be deleted upon request: heymaix@outlook.com"
          },
          {
            title: "6. Children’s Privacy",
            body: "Our website is not intended for children under 13. We do not knowingly collect information from children under 13."
          },
          {
            title: "7. Policy Changes",
            body: "This privacy policy may be updated from time to time. Updates will be published on our GitHub Pages site."
          }
        ],
        closeBtn: "CLOSE"
      }
    },
    tr: {
      nav: [
        { id: "vision", text: "VİZYON" },
        { id: "apps", text: "UYGULAMALAR" },
        { id: "games", text: "OYUNLAR" },
        { id: "support", text: "DESTEK" }
      ],
      hero: {
        tag: "GELECEĞE YÖN VER",
        line1: "FİKİRLERİN",
        line2: "HAYAT BULDUĞU YER.",
        cta: "MAIX'İ KEŞFET"
      },
      vision: {
        title: "VİZYON",
        text: "Tek bir tutkuyla hareket ediyoruz: Cesur fikirleri yaşayan, nefes alan dijital evrenlere dönüştürmek. İleri teknolojiyi sanatsal vizyonumuzla harmanlayarak, mobil ve PC ekosistemlerinde kalıcı izler bırakan sürükleyici deneyimler yaratıyoruz."
      },
      projects: {
        appsTitle: "UYGULAMALAR",
        gamesTitle: "OYUNLAR",
        card1: {
          title: "SubVex",
          status: "ÇOK YAKINDA"
        },
        card2: {
          title: "The Edge of the Mind",
          status: "ÇOK YAKINDA"
        }
      },
      contact: {
        title: "DESTEK",
        subtitle: "BİZE ULAŞIN",
        buttonText: "heymaix@outlook.com",
      },
      privacy: {
        linkText: "Gizlilik Politikası",
        title: "Gizlilik Politikası – MAIX Interactive",
        date: "Son Güncelleme: 20 Şubat 2026",
        intro: "MAIX Interactive (“biz”, “bizim”, “MAIX”) olarak kullanıcılarımızın gizliliğine önem veriyoruz. Bu politika, GitHub Pages üzerinde yayınladığımız web sitemizi ziyaret eden kullanıcıların verilerinin nasıl işlendiğini açıklar.",
        sections: [
          {
            title: "1. Topladığımız Bilgiler",
            body: "Web sitemizi ziyaret edenlerden şu bilgiler otomatik olarak toplanabilir:\n\n• IP adresi, tarayıcı türü, cihaz tipi ve işletim sistemi bilgileri.\n• Site üzerindeki sayfa gezinme verileri (hangi sayfaları ziyaret ettiğiniz, ziyaret süresi vb.)\n\nBu bilgiler analytics veya performans amacıyla kullanılabilir, doğrudan kişisel olarak tanımlayıcı değildir.\nEk olarak, kullanıcı e-posta linklerimizi kullanarak iletişime geçerse, bu bilgiler (e-posta adresi ve mesaj içeriği) yalnızca destek amacıyla saklanır."
          },
          {
            title: "2. Çerezler (Cookies)",
            body: "Web sitemizde çerezler kullanılabilir. Bu çerezler:\n\n• Site kullanım istatistiklerini toplamak\n• Siteyi optimize etmek ve hataları tespit etmek\n\namacıyla kullanılmaktadır. Çerezler kişisel olarak sizi tanımlamaz."
          },
          {
            title: "3. Bilgi Paylaşımı",
            body: "MAIX Interactive, topladığı bilgileri üçüncü taraflarla satmaz veya paylaşmaz. Ancak aşağıdaki durumlarda paylaşabilir:\n\n• Yasal zorunluluk gereği\n• Site hosting veya teknik servis sağlayıcıları ile (ör. GitHub Pages, analytics servisi)"
          },
          {
            title: "4. Güvenlik",
            body: "Sitemizde toplanan bilgiler makul teknik önlemlerle korunur. Ancak internet üzerinden veri iletiminde %100 güvenlik garanti edilemez."
          },
          {
            title: "5. Kullanıcı Hakları",
            body: "Toplanan veriler anonim olduğu için kişisel silme talebi genellikle geçerli değildir.\nE-posta ile gönderdiğiniz mesajlar için istediğiniz zaman silinmesini talep edebilirsiniz: heymaix@outlook.com"
          },
          {
            title: "6. Çocukların Gizliliği",
            body: "Web sitemiz 13 yaş altı çocuklara yönelik değildir. 13 yaş altı çocuklardan bilinçli olarak bilgi toplanmaz."
          },
          {
            title: "7. Politika Değişiklikleri",
            body: "Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler GitHub Pages üzerinde yayınlanacaktır."
          }
        ],
        closeBtn: "KAPAT"
      }
    }
  };

  const content = t[lang];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Ortak Kart Bileşeni
  const ProjectCard = ({ title, status, sectionTitle }) => (
    <div className="flex flex-col h-full">
      <h3 className="text-white font-bold tracking-widest uppercase mb-4 ml-1">{sectionTitle}</h3>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative h-[350px] bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-red-600/50 transition-all duration-500 shadow-[0_0_0px_rgba(220,38,38,0)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)]"
      >
        <div className="h-2/3 bg-gradient-to-b from-black/80 to-[#111] relative flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,transparent_20%,#000_100%)]" style={{backgroundImage: 'repeating-conic-gradient(#ffffff10 0deg 10deg, #00000000 10deg 20deg)'}}></div>
           
           <div className="border-2 border-white/30 text-white/50 font-bold tracking-[0.2em] px-6 py-2 -rotate-12 backdrop-blur-sm uppercase text-sm group-hover:text-red-500/80 group-hover:border-red-500/50 transition-colors duration-500">
             {status}
           </div>
        </div>

        <div className="h-1/3 p-6 flex flex-col justify-end bg-[#0f0f0f] relative z-10">
          <h4 className="text-2xl font-black uppercase tracking-wide text-white group-hover:text-red-500 transition-colors duration-300">{title}</h4>
          <p className="text-gray-500 tracking-widest text-xs uppercase mt-1">{status}</p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-red-600 selection:text-white scroll-smooth">
      
      {/* --- DEVASA ARKA PLAN FİLİGRANI (LOGO) --- */}
      <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
         <img 
           src={mxLogo} 
           alt="MAIX Background Logo" 
           className="w-[120vw] md:w-[80vw] max-w-none opacity-[0.15] object-contain transform -translate-y-10"
         />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_80%)]"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm"
      >
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="text-3xl font-black text-red-600 tracking-wider leading-none">
            MAIX
          </div>
          <div className="text-[10px] font-bold text-gray-400 tracking-[0.3em] mt-1">
            INTERACTIVE
          </div>
        </div>
        
        <div className="flex items-center gap-12">
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest uppercase text-gray-300">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-white transition-colors">
                {item.text}
              </a>
            ))}
          </div>
          <div className="text-sm font-bold tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
            <button onClick={() => setLang("en")} className={`${lang === 'en' ? 'text-red-600' : 'text-gray-500 hover:text-white'} transition-colors`}>EN</button>
            <span className="mx-2 text-gray-700">|</span>
            <button onClick={() => setLang("tr")} className={`${lang === 'tr' ? 'text-red-600' : 'text-gray-500 hover:text-white'} transition-colors`}>TR</button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex flex-col justify-center px-8 md:px-16 z-10 mt-20">
        <motion.div style={{ y: yHero }} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-2">
             <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-2xl md:text-4xl">
              {content.hero.tag}
            </h2>
            <div className="h-[2px] w-20 bg-red-600"></div>
          </div>
         
<h1 className="text-6xl md:text-8xl uppercase leading-[0.85] mb-12 flex flex-col">
  <span className="text-white font-black">{content.hero.line1}</span>
  
  <span 
    className="text-transparent font-bold" 
    style={{ 
      WebkitTextStroke: '1px white', 
      letterSpacing: '0.2em', 
      marginTop: '0.2em'
    }}
  >
    {content.hero.line2}
  </span>
</h1>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220,38,38,0.8)" }}
            onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-red-600 text-white font-bold tracking-widest uppercase text-sm rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300"
          >
            {content.hero.cta}
          </motion.button>
        </motion.div>
      </section>

      {/* Orta Kısım: Vision, Apps ve Games Grid */}
      <section className="py-20 px-8 md:px-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div id="vision" className="lg:col-span-1 mt-12 scroll-mt-32">
             <h3 className="text-white font-bold tracking-widest uppercase mb-6">{content.vision.title}</h3>
             <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-md">
               {content.vision.text}
             </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div id="apps" className="scroll-mt-32">
                <ProjectCard 
                  sectionTitle={content.projects.appsTitle}
                  title={content.projects.card1.title}
                  status={content.projects.card1.status}
                />
              </div>

              <div id="games" className="scroll-mt-32">
                <ProjectCard 
                  sectionTitle={content.projects.gamesTitle}
                  title={content.projects.card2.title}
                  status={content.projects.card2.status}
                />
              </div>
          </div>
        </div>
      </section>

      {/* Support / İletişim Bölümü */}
      <section id="support" className="py-32 px-8 md:px-16 relative z-20 flex flex-col md:flex-row items-end justify-between gap-12 scroll-mt-20 border-t border-white/5 mt-10">
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase mb-2">{content.contact.title}</h3>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wide text-white">
            {content.contact.subtitle}
          </h2>
        </div>
        
        <motion.a 
          href={`mailto:${content.contact.buttonText}`}
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(220,38,38,0.6)" }}
          className="px-12 py-5 bg-red-600 text-white font-bold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 text-lg text-center"
        >
          {content.contact.buttonText}
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-white/10 relative z-20 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-gray-500">
            © MAIX INTERACTIVE
          </div>
          <div className="flex flex-wrap justify-center space-x-8 text-xs font-bold tracking-widest uppercase text-gray-500">
             {/* Tek Bağlantı: Gizlilik Politikası */}
             <button 
               onClick={() => setIsPrivacyOpen(true)} 
               className="hover:text-white transition-colors uppercase tracking-widest"
             >
               {content.privacy.linkText}
             </button>
          </div>
        </div>
      </footer>

      {/* Gizlilik Politikası Modalı (Pencere) */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10 p-6 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white">{content.privacy.title}</h2>
                  <p className="text-gray-500 text-xs tracking-widest mt-1">{content.privacy.date}</p>
                </div>
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="text-gray-400 hover:text-red-600 font-bold tracking-widest text-sm transition-colors"
                >
                  {content.privacy.closeBtn}
                </button>
              </div>
              
              <div className="p-6 md:p-8 text-gray-300 space-y-8 text-sm md:text-base leading-relaxed">
                <p>{content.privacy.intro}</p>
                
                {content.privacy.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-white font-bold text-lg mb-3">{section.title}</h3>
                    <p className="whitespace-pre-wrap text-gray-400">{section.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

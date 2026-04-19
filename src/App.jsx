import { AnimatePresence, motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mxLogo from "./assets/mx.png";
import subvexLogo from "./assets/SubVex.png";
import SubvexPage from "./SubvexPage";

const BASE_URL = import.meta.env.BASE_URL || "/";
const EASE = [0.22, 1, 0.36, 1];

const HOME_CONTENT = {
  tr: {
    seo: {
      title: "MAIX Interactive | Dijital Ürünler, Uygulamalar ve Yazılım Çözümleri",
      description:
        "MAIX Interactive, insanların günlük hayatını kolaylaştıran uygulamalar, yazılımlar ve dijital ürünler geliştirir. Sade, kullanışlı ve etkili çözümler üretir.",
      keywords:
        "MAIX Interactive,dijital ürünler,mobil uygulamalar,yazılım çözümleri,teknoloji markası,kullanıcı odaklı yazılım"
    },
    nav: {
      vision: "Vizyon",
      products: "Ürünler",
      support: "Destek",
      openSubvex: "Subvex’i keşfet"
    },
    hero: {
      title: "Günlük Hayatı Kolaylaştıran\nDijital Ürünler",
      subtitle:
        "MAIX Interactive, insanların günlük işlerini daha kolay ve verimli hale getiren mobil uygulamalar, yazılımlar ve dijital ürünler geliştirir.",
      cta: "Subvex’i keşfet"
    },
    intro: {
      title: "Ne geliştiriyoruz",
      text: "Karmaşıklığı azaltan, gerçek hayatta işe yarayan ve sürdürülebilir kullanım değeri sunan teknoloji çözümleri tasarlıyoruz."
    },
    vision: {
      title: "Vizyon",
      text: "Teknolojiyi gösteriş için değil, net fayda için kullanıyoruz. Kullanıcıya zaman kazandıran, güven veren ve uzun ömürlü dijital deneyimler üretiyoruz."
    },
    products: {
      title: "Ürünler",
      cardTitle: "Subvex",
      cardText:
        "Gider takibi ve bütçe planlamayı tek bir akışta birleştiren modern bir finansal farkındalık uygulaması.",
      cta: "Ürün sayfasına git"
    },
    support: {
      title: "Destek",
      subtitle: "Yardıma ihtiyacın olursa buradayız",
      email: "heymaix@outlook.com"
    },
    footer: {
      privacy: "Gizlilik Politikası",
      close: "Kapat"
    },
    privacy: {
      title: "Gizlilik Politikası – MAIX Interactive",
      date: "Son Güncelleme: 20 Şubat 2026",
      intro: "MAIX Interactive (\"biz\", \"bizim\", \"MAIX\") olarak kullanıcılarımızın gizliliğine önem veriyoruz. Bu politika, GitHub Pages üzerinde yayınladığımız web sitemizi ziyaret eden kullanıcıların verilerinin nasıl işlendiğini açıklar.",
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
      ]
    }
  },
  en: {
    seo: {
      title: "MAIX Interactive | Digital Products, Apps, and Software Solutions",
      description:
        "MAIX Interactive builds apps, software solutions, and digital products that make everyday life easier. Practical, simple, and effective by design.",
      keywords:
        "MAIX Interactive,digital products,mobile apps,software solutions,technology brand,user-focused software"
    },
    nav: {
      vision: "Vision",
      products: "Products",
      support: "Support",
      openSubvex: "Explore Subvex"
    },
    hero: {
      title: "Digital Products\nfor Everyday Simplicity",
      subtitle:
        "MAIX Interactive creates mobile apps, software, and digital tools that help people get daily work done with less friction.",
      cta: "Explore Subvex"
    },
    intro: {
      title: "What we build",
      text: "We design practical technology that reduces complexity and delivers clear value in real-life usage."
    },
    vision: {
      title: "Vision",
      text: "We use technology for measurable utility, not noise. Calm, reliable, and durable product experiences."
    },
    products: {
      title: "Products",
      cardTitle: "Subvex",
      cardText:
        "A focused mobile experience that brings expense tracking and budget planning into one clear flow.",
      cta: "Open product page"
    },
    support: {
      title: "Support",
      subtitle: "Reach out when you need us",
      email: "heymaix@outlook.com"
    },
    footer: {
      privacy: "Privacy Policy",
      close: "Close"
    },
    privacy: {
      title: "Privacy Policy – MAIX Interactive",
      date: "Last Updated: February 20, 2026",
      intro: "MAIX Interactive (\"we\", \"our\", \"MAIX\") values the privacy of our users. This policy explains how information is handled for visitors of our website hosted on GitHub Pages.",
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
      ]
    }
  }
};

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== "content") el.setAttribute(key, value);
    });
    document.head.appendChild(el);
  }
  el.setAttribute("content", attrs.content);
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function normalizePath(pathname) {
  const base = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  if (base && base !== "/" && pathname.startsWith(base)) {
    return pathname.slice(base.length).replace(/^\/+|\/+$/g, "");
  }
  return pathname.replace(/^\/+|\/+$/g, "");
}

function getRoute() {
  return normalizePath(window.location.pathname) === "subvex" ? "subvex" : "home";
}

function SubvexWord({ className = "" }) {
  return (
    <span className={className}>
      <span className="text-[#f3f7ff]">Sub</span>
      <span className="text-[#22c55e]">Vex</span>
    </span>
  );
}

function HomePage({ lang, setLang }) {
  const content = HOME_CONTENT[lang];
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduce = useReducedMotion();
  const homeHref = BASE_URL;
  const subvexHref = `${BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`}subvex/`;
  const socialLinks = {
    instagram: "https://www.instagram.com/maixinteractive/?hl=en",
    tiktok: "https://www.tiktok.com/@maixinteractive"
  };

  const pageRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "8%"]);

  useEffect(() => {
    const canonicalHref = `${window.location.origin}${BASE_URL}`;
    document.title = content.seo.title;
    upsertMeta('meta[name="description"]', { name: "description", content: content.seo.description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: content.seo.keywords });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index,follow,max-image-preview:large" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "MAIX Interactive" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalHref });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: content.seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: content.seo.description });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: `${window.location.origin}/favicon.png` });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: content.seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: content.seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: `${window.location.origin}/favicon.png` });
    upsertCanonical(canonicalHref);
  }, [content.seo]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-hidden bg-[#02040a] text-[#eaf0ff] selection:bg-[#2d4f87]/45">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Motion.div
          style={{ y: bgY1 }}
          className="absolute inset-0 bg-[radial-gradient(120%_95%_at_12%_6%,rgba(96,140,214,0.14),transparent_58%),radial-gradient(95%_80%_at_88%_92%,rgba(63,94,148,0.12),transparent_60%),linear-gradient(168deg,#010205_0%,#050b18_54%,#060f1e_100%)]"
        />
        <Motion.div
          style={{ y: bgY2 }}
          className="absolute inset-0 bg-[radial-gradient(85%_68%_at_50%_2%,rgba(118,151,212,0.06),transparent_62%),radial-gradient(70%_55%_at_15%_84%,rgba(85,117,176,0.07),transparent_66%)]"
        />
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:3px_3px]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center">
        <img src={mxLogo} alt="MAIX" className="w-[84vw] max-w-none -translate-y-3 opacity-[0.06]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto mt-2 flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-500 md:mt-3 md:px-10 ${
            isScrolled
              ? "rounded-2xl border border-[#7f9ac7]/28 bg-[#040a16]/88 shadow-[0_10px_40px_rgba(1,4,10,0.62)] backdrop-blur-xl"
              : "rounded-2xl border border-transparent bg-transparent"
          }`}
        >
          <a href={homeHref} className="text-left">
            <p className="text-2xl font-black tracking-[0.16em] text-[#dfe8ff] md:text-3xl">MAIX</p>
            <p className="text-[10px] tracking-[0.34em] text-[#c2d2fb]/55">INTERACTIVE</p>
          </a>

          <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.2em] text-[#dbe7ff]/82 md:flex">
            <a href="#vision" className="transition-colors hover:text-white">{content.nav.vision}</a>
            <a href="#products" className="transition-colors hover:text-white">{content.nav.products}</a>
            <a href="#support" className="transition-colors hover:text-white">{content.nav.support}</a>
            <a
              href={subvexHref}
              className="inline-flex items-center justify-center rounded-full border border-[#7f9cd4]/40 bg-[#15233f]/66 px-4 py-2 text-[11px] leading-none tracking-[0.18em] text-[#e6eeff] transition-colors hover:border-[#9eb6e6]/58 hover:bg-[#1f3258]/72"
            >
              {lang === "tr" ? (
                <>
                  <SubvexWord />'i keşfet
                </>
              ) : (
                <>
                  Explore <SubvexWord />
                </>
              )}
            </a>
          </nav>

          <div className="rounded-full border border-[#7895cb]/32 bg-[#091327]/72 px-3 py-1 text-xs tracking-[0.14em] text-[#d1dfff]/78 backdrop-blur-md">
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-[#e6eeff]" : "hover:text-[#dee9ff]"}>EN</button>
            <span className="px-2 text-[#9db1db]/35">|</span>
            <button onClick={() => setLang("tr")} className={lang === "tr" ? "text-[#e6eeff]" : "hover:text-[#dee9ff]"}>TR</button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section ref={heroRef} className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:px-10 md:pb-40 md:pt-46">
          <Motion.div style={{ y: heroY }}>
            <Motion.h1
              initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: reduce ? 0 : 1.05, ease: EASE }}
              className="whitespace-pre-line text-5xl font-black uppercase leading-[1.08] tracking-[-0.01em] text-[#f2f6ff] md:text-7xl lg:text-8xl"
            >
              {content.hero.title}
            </Motion.h1>

            <Motion.p
              initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: reduce ? 0 : 0.92, delay: 0.08, ease: EASE }}
              className="mt-10 max-w-2xl text-base leading-relaxed text-[#dee8ff]/88 md:text-lg"
            >
              {content.hero.subtitle}
            </Motion.p>

            <Motion.a
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.82, delay: 0.14, ease: EASE }}
              href={subvexHref}
              className="mt-11 inline-flex items-center justify-center rounded-full border border-[#89a6d9]/44 bg-[#1a2d51]/72 px-8 py-3 text-sm uppercase leading-none tracking-[0.18em] text-[#edf3ff] transition-colors duration-300 hover:border-[#a8bfe7]/60 hover:bg-[#243d69]/80"
            >
              {lang === "tr" ? (
                <>
                  <SubvexWord />'i keşfet
                </>
              ) : (
                <>
                  Explore <SubvexWord />
                </>
              )}
            </Motion.a>
          </Motion.div>
        </section>

        <Motion.section
          initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduce ? 0 : 0.82, ease: EASE }}
          className="mx-auto max-w-7xl px-6 pb-10 md:px-10 md:pb-14"
        >
          <h2 className="mb-4 text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.intro.title}</h2>
          <p className="max-w-4xl text-lg leading-relaxed text-[#dde8ff]/88 md:text-xl">{content.intro.text}</p>
        </Motion.section>

        <Motion.section
          id="vision"
          initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.42 }}
          transition={{ duration: reduce ? 0 : 0.88, ease: EASE }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-18 md:grid-cols-12 md:px-10 md:py-26"
        >
          <h2 className="text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60 md:col-span-3">{content.vision.title}</h2>
          <p className="text-2xl leading-[1.56] text-[#edf3ff] md:col-span-7 md:col-start-5 md:text-3xl">{content.vision.text}</p>
        </Motion.section>

        <Motion.section
          id="products"
          initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.34 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
          className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-26"
        >
          <h2 className="mb-8 text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.products.title}</h2>
          <div className="overflow-hidden rounded-3xl border border-[#7896c9]/24 bg-[#081226]/84 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-9 md:p-12">
                <h3 className="text-3xl font-black uppercase leading-none md:text-4xl">
                  <SubvexWord />
                </h3>
                <p className="mt-5 max-w-md text-[#dde7ff]/88">{content.products.cardText}</p>
                <a
                  href={subvexHref}
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#84a0d2]/38 bg-[#152a4b]/72 px-6 py-3 text-xs uppercase leading-none tracking-[0.18em] text-[#e7efff] transition-colors duration-300 hover:border-[#a8bee5]/58 hover:bg-[#203b67]/80"
                >
                  {content.products.cta}
                </a>
              </div>
              <div className="relative min-h-[310px] border-t border-[#7998cc]/18 md:border-l md:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(105%_90%_at_74%_22%,rgba(79,117,186,0.24),transparent_62%),linear-gradient(170deg,#070f1d,#0b1730_58%,#0b1b36)]" />
                <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.95)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
                <img
                  src={subvexLogo}
                  alt="Subvex"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Motion.section>

        <section id="support" className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-22">
          <div className="flex flex-col gap-8 border-t border-[#7f95bf]/18 pt-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.support.title}</h2>
              <p className="mt-3 text-4xl font-black uppercase text-[#f1f6ff] md:text-5xl">{content.support.subtitle}</p>
            </div>
            <a
              href={`mailto:${content.support.email}`}
              className="rounded-full border border-[#84a0d2]/35 bg-[#142743]/38 px-7 py-3 text-sm uppercase tracking-[0.17em] text-[#dce8ff] transition-colors hover:border-[#a7bde4]/55 hover:bg-[#1f3760]/50"
            >
              {content.support.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#7f95bf]/16 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs uppercase tracking-[0.18em] text-[#b7c8ea]/48">© MAIX INTERACTIVE</p>
          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-[#b7c8ea]/56">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAIX Interactive Instagram"
              className="transition-colors hover:text-[#dbe8ff]"
            >
              Instagram
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAIX Interactive TikTok"
              className="transition-colors hover:text-[#dbe8ff]"
            >
              TikTok
            </a>
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-xs uppercase tracking-[0.18em] text-[#b7c8ea]/52 transition-colors hover:text-[#dbe8ff]"
            >
              {content.footer.privacy}
            </button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isPrivacyOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.65, ease: EASE }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 p-4 backdrop-blur-md"
          >
            <Motion.div
              initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
              className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#7c95c5]/22 bg-[#081022]"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#7b93c0]/16 bg-[#081022]/95 p-6 backdrop-blur-sm">
                <div>
                  <h2 className="text-lg font-bold text-[#edf3ff] md:text-2xl">{content.privacy.title}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#b7c8ea]/45">{content.privacy.date}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="text-xs uppercase tracking-[0.16em] text-[#b7c8ea]/65 transition-colors hover:text-[#dbe8ff]"
                >
                  {content.footer.close}
                </button>
              </div>
              <div className="space-y-8 p-6 text-sm leading-relaxed text-[#d4e2ff]/78 md:text-base">
                <p>{content.privacy.intro}</p>
                {content.privacy.sections.map((section) => (
                  <article key={section.title}>
                    <h3 className="mb-2 text-base font-semibold text-[#edf3ff] md:text-lg">{section.title}</h3>
                    <p className="whitespace-pre-wrap">{section.body}</p>
                  </article>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("tr");
  const [route, setRoute] = useState(() => getRoute());

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (route === "subvex") {
    return <SubvexPage lang={lang} setLang={setLang} />;
  }

  return <HomePage lang={lang} setLang={setLang} />;
}




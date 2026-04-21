import { motion as Motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import subvexLogo from "./assets/SubVex.png";
import ScrollVideoHero from "./components/ScrollVideoHero";

const EASE = [0.22, 1, 0.36, 1];

const SUBVEX_CONTENT = {
  tr: {
    seo: {
      title: "Subvex Tasarruf Uygulaması | Gider Takibi ve Bütçe Planlama",
      description:
        "Subvex ile giderlerini takip et, bütçeni yönet ve daha bilinçli tasarruf et. Günlük harcama kontrolü için pratik tasarruf uygulaması.",
      keywords: "tasarruf uygulaması, gider takibi, bütçe planlama, harcama kontrolü, subvex"
    },
    nav: {
      home: "Anasayfa",
      features: "Özellikler",
      faq: "SSS"
    },
    hero: {
      title: "Daha az harca.\nDaha çok fark et.",
      subtitle:
        "Subvex, gider takibini sadeleştirir; bütçe planlama ve harcama kontrolünü günlük hayatın doğal bir parçasına dönüştürür.",
      cta: "Google Play’de aç"
    },
    about: {
      title: "Subvex nedir?",
      text1:
        "Subvex, günlük harcamalarını net biçimde görmeni sağlayan bir tasarruf uygulamasıdır. Harcama verisini anlaşılır hale getirir.",
      text2:
        "Gider takibi, bütçe planlama ve kontrol odaklı akışıyla finansal kararlarını daha tutarlı almanı destekler."
    },
    features: {
      title: "Temel özellikler",
      items: [
        {
          title: "Günlük gider takibi",
          text: "Harcamalarını saniyeler içinde kaydet, kategorilere göre net bir görünüm elde et."
        },
        {
          title: "Bütçe planlama",
          text: "Aylık bütçeni hedeflere göre düzenle ve limitlerini sürdürülebilir şekilde yönet."
        },
        {
          title: "Harcama analizi",
          text: "Harcama eğilimlerini gör, gereksiz kalemleri erken fark ederek kontrolünü artır."
        }
      ]
    },
    seoBlock: {
      title: "Neden Subvex?",
      text:
        "Subvex, yalnızca bir tasarruf uygulaması değil; aynı zamanda pratik bir gider takibi altyapısı sunar. Bütçe planlama adımlarını sadeleştirirken harcama kontrolü alışkanlığını güçlendirir. Böylece finansal kararlar günlük hayat içinde daha sakin, daha net ve daha sürdürülebilir hale gelir."
    },
    faq: {
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Subvex nedir?",
          a: "Subvex, gider takibi ve bütçe planlama odaklı modern bir kişisel finans uygulamasıdır."
        },
        {
          q: "Kimler için uygundur?",
          a: "Harcamalarını görünür hale getirmek ve bütçesini daha bilinçli yönetmek isteyen herkes için uygundur."
        },
        {
          q: "Nasıl tasarruf sağlar?",
          a: "Harcama alışkanlıklarını netleştirir, bütçe hedefleriyle karşılaştırır ve gereksiz giderleri azaltmana yardımcı olur."
        }
      ]
    },
    support: {
      title: "Destek",
      subtitle: "Bir sorunda yanındayız",
      email: "heymaix@outlook.com"
    }
  },
  en: {
    seo: {
      title: "Subvex Savings App | Expense Tracking and Budget Planning",
      description:
        "Track expenses with Subvex, manage your budget, and save with better awareness. A practical app for daily spending control.",
      keywords: "savings app, expense tracking, budget planning, spending control, subvex"
    },
    nav: {
      home: "Home",
      features: "Features",
      faq: "FAQ"
    },
    hero: {
      title: "Spend less.\nNotice more.",
      subtitle:
        "Subvex turns expense tracking, budget planning, and spending control into one calm mobile experience.",
      cta: "Open on Google Play"
    },
    about: {
      title: "What is Subvex?",
      text1:
        "Subvex is a savings-focused app that keeps your daily expenses visible and easy to understand.",
      text2:
        "With structured budget planning and practical tracking, it helps build stronger financial consistency."
    },
    features: {
      title: "Core features",
      items: [
        {
          title: "Daily expense tracking",
          text: "Capture spending quickly and keep your categories readable every day."
        },
        {
          title: "Budget planning",
          text: "Define monthly targets and manage limits with a clear structure."
        },
        {
          title: "Spending analysis",
          text: "Understand spending patterns and reduce unnecessary costs over time."
        }
      ]
    },
    seoBlock: {
      title: "Why Subvex?",
      text:
        "Subvex combines expense tracking, budget planning, and spending control in a practical flow. It is built to support long-term savings behavior without complexity."
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is Subvex?",
          a: "Subvex is a mobile app focused on expense tracking and budget planning."
        },
        {
          q: "Who is it for?",
          a: "Anyone who wants clearer visibility over spending and better monthly budget control."
        },
        {
          q: "How does it improve savings?",
          a: "It makes spending visible, compares it with budget goals, and reduces unnecessary costs."
        }
      ]
    },
    support: {
      title: "Support",
      subtitle: "We are here when you need us",
      email: "heymaix@outlook.com"
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

function SubvexWord({ className = "" }) {
  return (
    <span className={className}>
      <span className="text-[#f3f7ff]">Sub</span>
      <span className="text-[#22c55e]">Vex</span>
    </span>
  );
}

export default function SubvexPage({ lang, setLang }) {
  const content = SUBVEX_CONTENT[lang];
  const reduce = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const homeHref = "/";
  const socialLinks = {
    instagram: "https://www.instagram.com/maixinteractive/?hl=en",
    tiktok: "https://www.tiktok.com/@maixinteractive"
  };

  useEffect(() => {
    const canonicalHref = `${window.location.origin}/subvex/`;
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
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-[#eaf0ff] selection:bg-[#2d4f87]/45">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_95%_at_12%_6%,rgba(96,140,214,0.12),transparent_58%),radial-gradient(95%_80%_at_88%_92%,rgba(63,94,148,0.1),transparent_60%),linear-gradient(168deg,#010205_0%,#050b18_54%,#060f1e_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:3px_3px]" />

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

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#dbe7ff]/82 md:flex">
            <a href={homeHref} className="transition-colors hover:text-white">{content.nav.home}</a>
            <a href="#features" className="transition-colors hover:text-white">{content.nav.features}</a>
            <a href="#faq" className="transition-colors hover:text-white">{content.nav.faq}</a>
          </nav>

          <div className="rounded-full border border-[#7895cb]/32 bg-[#091327]/72 px-3 py-1 text-xs tracking-[0.14em] text-[#d1dfff]/78 backdrop-blur-md">
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-[#e6eeff]" : "hover:text-[#dee9ff]"}>EN</button>
            <span className="px-2 text-[#9db1db]/35">|</span>
            <button onClick={() => setLang("tr")} className={lang === "tr" ? "text-[#e6eeff]" : "hover:text-[#dee9ff]"}>TR</button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <ScrollVideoHero title={content.hero.title.replace("\n", " ")} subtitle={content.hero.subtitle} />

        <Motion.section
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.85, ease: EASE }}
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-[#7794c8]/22 bg-[#081226]/84 p-8 backdrop-blur-md md:p-10">
              <h2 className="text-3xl font-black uppercase text-[#f2f6ff] md:text-4xl">{content.about.title}</h2>
              <p className="mt-5 text-[#dde7ff]/88">{content.about.text1}</p>
              <p className="mt-5 text-[#dde7ff]/88">{content.about.text2}</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#7794c8]/22 bg-[#081226]/84">
              <div className="relative min-h-[320px]">
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

        <Motion.section
          id="features"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.85, ease: EASE }}
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
        >
          <h2 className="mb-8 text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.features.title}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.features.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#7895c9]/22 bg-[#091428]/84 p-6">
                <h3 className="text-xl font-semibold text-[#f0f5ff]">{item.title}</h3>
                <p className="mt-3 text-[#dde7ff]/86">{item.text}</p>
              </article>
            ))}
          </div>
        </Motion.section>

        <Motion.section
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
        >
          <div className="rounded-3xl border border-[#7895c9]/22 bg-[#091428]/84 p-8 md:p-10">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.seoBlock.title}</h2>
            <p className="mt-5 leading-relaxed text-[#dde7ff]/88 md:text-lg">{content.seoBlock.text}</p>
          </div>
        </Motion.section>

        <Motion.section
          id="faq"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.85, ease: EASE }}
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
        >
          <h2 className="mb-8 text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.faq.title}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.faq.items.map((item) => (
              <article key={item.q} className="rounded-2xl border border-[#7895c9]/22 bg-[#091428]/84 p-6">
                <h3 className="text-lg font-semibold text-[#f0f5ff]">{item.q}</h3>
                <p className="mt-3 text-[#dde7ff]/86">{item.a}</p>
              </article>
            ))}
          </div>
        </Motion.section>

        <section className="mx-auto max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
          <div className="rounded-3xl border border-[#7d99cc]/24 bg-gradient-to-br from-[#0a1429]/94 to-[#101e38]/86 p-8 md:p-12">
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              <SubvexWord />
            </h2>
            <p className="mt-5 max-w-xl text-[#dde7ff]/88">Giderlerini takip et, bütçeni planla, tasarruf ritmini güçlendir.</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.maixinteractivedev.subvex"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-[#89a6d9]/44 bg-[#1a2d51]/72 px-8 py-3 text-sm uppercase tracking-[0.18em] text-[#edf3ff] transition-colors duration-300 hover:border-[#a8bfe7]/60 hover:bg-[#243d69]/80"
            >
              {content.hero.cta}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
          <div className="flex flex-col gap-8 border-t border-[#7f95bf]/18 pt-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-[0.22em] text-[#b8ccf4]/60">{content.support.title}</h2>
              <p className="mt-3 text-4xl font-black uppercase text-[#edf3ff] md:text-5xl">{content.support.subtitle}</p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}




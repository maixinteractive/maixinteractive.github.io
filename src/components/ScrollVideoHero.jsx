import { useEffect, useMemo, useRef } from "react";

const videoModules = import.meta.glob("../assets/subvex_scrollanim.mp4", {
  eager: true,
  import: "default"
});

export default function ScrollVideoHero({ title, subtitle }) {
  const videoRef = useRef(null);

  const videoSrc = useMemo(
    () => videoModules["../assets/subvex_scrollanim.mp4"] || "",
    []
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("[ScrollVideoHero] Autoplay failed", error);
      }
    };

    if (video.readyState >= 2) {
      void tryPlay();
      return;
    }

    const onCanPlay = () => {
      void tryPlay();
    };

    video.addEventListener("canplay", onCanPlay, { once: true });
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          defaultMuted
          autoPlay
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          className="h-full w-full object-cover"
          aria-label="Subvex background animation"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-black/20 to-black/55" />

      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 md:px-10">
        <div className="max-w-3xl text-center">
          <h1 className="whitespace-pre-line text-5xl font-black uppercase leading-[1.08] tracking-[-0.01em] text-[#f2f6ff] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-8 text-base leading-relaxed text-[#dee8ff]/90 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

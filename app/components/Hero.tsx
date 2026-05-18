export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Навигация сверху */}
      <nav className="relative z-20 flex justify-between items-center px-6 py-4 border-b border-[#ff00ff44]">
        <div
          className="text-lg font-bold tracking-[0.2em]"
          style={{ color: "var(--neon-magenta)", textShadow: "0 0 8px var(--neon-magenta)" }}
        >
          ▮ CRYPTIGERS
        </div>

        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest">
          <a href="#about" style={{ color: "var(--neon-cyan)" }}>About</a>
          <a href="#gallery" style={{ color: "var(--neon-cyan)" }}>Gallery</a>
          <a href="#connect" style={{ color: "var(--neon-cyan)" }}>Connect</a>
        </div>

        <button
          className="text-xs uppercase tracking-[0.2em] px-4 py-2 border transition hover:bg-[#ff00ff22]"
          style={{
            color: "var(--neon-magenta)",
            borderColor: "var(--neon-magenta)",
            textShadow: "0 0 4px var(--neon-magenta)",
            boxShadow: "0 0 8px #ff00ff44, inset 0 0 8px #ff00ff22",
          }}
        >
          Connect Wallet
        </button>
      </nav>

      {/* Ретро-сетка снизу */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ff00ff33 1px, transparent 1px), linear-gradient(90deg, #ff00ff33 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(400px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Контент по центру */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6">
        {/* Synthwave-солнце */}
        <div
          className="relative mb-8"
          style={{
            width: "260px",
            height: "130px",
            borderRadius: "260px 260px 0 0",
            background:
              "linear-gradient(180deg, #ff00ff 0%, #ff0080 35%, #ff6600 70%, #ffff00 100%)",
            boxShadow: "0 0 60px #ff00ff88, 0 0 100px #ff008066",
          }}
        >
          {/* Полоски на солнце */}
          <div
            className="absolute inset-x-0 pointer-events-none"
            style={{
              bottom: "10px",
              height: "4px",
              background: "var(--background)",
              boxShadow:
                "0 14px 0 var(--background), 0 28px 0 var(--background), 0 42px 0 var(--background), 0 56px 0 var(--background)",
            }}
          />
        </div>

        {/* Главный заголовок */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-[0.15em] text-center"
          style={{
            background: "linear-gradient(180deg, #ff00ff 0%, #00ffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 12px #ff00ff66)",
          }}
        >
          CRYPTIGERS
        </h1>

        {/* Подзаголовок */}
        <div
          className="mt-5 text-xs md:text-sm tracking-[0.5em] uppercase"
          style={{ color: "var(--neon-cyan)", textShadow: "0 0 8px var(--neon-cyan)" }}
        >
          web3 · pixel · synthwave
        </div>

        {/* Слоган */}
        <p className="mt-10 max-w-md text-center text-sm md:text-base leading-relaxed opacity-90">
          Identity born in the neon grid.
          <br />
          Hunting alpha in the blockchain jungle.
        </p>
      </div>
    </section>
  );
}
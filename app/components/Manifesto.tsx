export default function Manifesto() {
  return (
    <section id="about" className="px-6 py-20 border-t border-[#ff00ff22]">
      {/* Заголовок секции */}
      <h2
        className="text-center text-xs uppercase tracking-[0.4em] mb-10"
        style={{ color: "var(--neon-cyan)" }}
      >
        <span style={{ color: "var(--neon-magenta)" }}>&lt; </span>
        manifesto
        <span style={{ color: "var(--neon-magenta)" }}> /&gt;</span>
      </h2>

      {/* Текст манифеста */}
      <div className="max-w-2xl mx-auto text-center text-sm md:text-base leading-loose opacity-90 space-y-4">
        <p>
          We are pixel-souled, decentralized, and analog at heart.
        </p>
        <p>
          Building, collecting, and signing on-chain since the dawn of web3.
        </p>
        <p style={{ color: "var(--neon-magenta)", textShadow: "0 0 6px #ff00ff44" }}>
          The grid never sleeps.
        </p>
      </div>
    </section>
  );
}
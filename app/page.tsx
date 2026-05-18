export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-widest">
          <span style={{ color: "var(--neon-magenta)", textShadow: "0 0 12px var(--neon-magenta)" }}>
            CRYPTIGERS
          </span>
        </h1>
        <p className="mt-4 text-sm tracking-[0.4em]" style={{ color: "var(--neon-cyan)" }}>
          web3 · pixel · synthwave
        </p>
      </div>
    </main>
  );
}
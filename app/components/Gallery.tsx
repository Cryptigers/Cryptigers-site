// Описываем массив с данными о наших NFT
const tigers = [
  { id: 1, body: "#ff8833", ears: "#ff6600", eyes: "#0a0014", label: "ORANGE" },
  { id: 2, body: "#cc00cc", ears: "#ff00ff", eyes: "#00ffff", label: "MAGENTA" },
  { id: 3, body: "#0099ff", ears: "#00ffff", eyes: "#ffffff", label: "CYAN" },
  { id: 4, body: null, ears: null, eyes: null, label: "SOON" },
  { id: 5, body: null, ears: null, eyes: null, label: "SOON" },
  { id: 6, body: null, ears: null, eyes: null, label: "SOON" },
];

// Компонент одной пиксельной тигриной мордочки (SVG)
function PixelTiger({ body, ears, eyes }: { body: string; ears: string; eyes: string }) {
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" className="w-20 h-20">
      <rect x="3" y="2" width="2" height="2" fill={ears} />
      <rect x="11" y="2" width="2" height="2" fill={ears} />
      <rect x="2" y="4" width="12" height="8" fill={body} />
      <rect x="4" y="6" width="2" height="2" fill={eyes} />
      <rect x="10" y="6" width="2" height="2" fill={eyes} />
      <rect x="6" y="9" width="4" height="1" fill="#0a0014" />
      <rect x="2" y="6" width="1" height="3" fill="#0a0014" />
      <rect x="13" y="6" width="1" height="3" fill="#0a0014" />
    </svg>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-20 border-t border-[#ff00ff22]">
      <h2
        className="text-center text-xs uppercase tracking-[0.4em] mb-10"
        style={{ color: "var(--neon-cyan)" }}
      >
        <span style={{ color: "var(--neon-magenta)" }}>&lt; </span>
        gallery
        <span style={{ color: "var(--neon-magenta)" }}> /&gt;</span>
      </h2>

      {/* Сетка карточек */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {tigers.map((tiger) => (
          <div
            key={tiger.id}
            className="relative aspect-square flex items-center justify-center bg-[#1a0030] border border-[#ff00ff55] transition hover:border-[#ff00ff] hover:shadow-[0_0_20px_#ff00ff66]"
          >
            {/* Тонкая пунктирная рамка внутри */}
            <div className="absolute inset-2 border border-dashed border-[#00ffff44] pointer-events-none" />

            {/* Если есть данные тигра — рисуем его, иначе — надпись */}
            {tiger.body ? (
              <PixelTiger body={tiger.body} ears={tiger.ears!} eyes={tiger.eyes!} />
            ) : (
              <span
                className="text-xs tracking-[0.3em]"
                style={{ color: "var(--neon-magenta)" }}
              >
                {tiger.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
// Описываем массив ссылок на соцсети
const links: { name: string; url: string; color: string }[] = [  {
    name: "Twitter / X",
    url: "#",
    color: "#00ffff",
  },
  {
    name: "Magic Eden",
    url: "#",
    color: "#ff00ff",
  },
  {
    name: "Telegram",
    url: "#",
    color: "#00ffff",
  },
  {
    name: "Discord",
    url: "#",
    color: "#ff00ff",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="px-6 py-20 border-t border-[#ff00ff22]">
      <h2
        className="text-center text-xs uppercase tracking-[0.4em] mb-10"
        style={{ color: "var(--neon-cyan)" }}
      >
        <span style={{ color: "var(--neon-magenta)" }}>&lt; </span>
        connect
        <span style={{ color: "var(--neon-magenta)" }}> /&gt;</span>
      </h2>

      {/* Сетка кнопок-ссылок */}
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs uppercase tracking-[0.2em] border transition hover:bg-white/5"
            style={{
              color: link.color,
              borderColor: link.color,
              boxShadow: `0 0 8px ${link.color}44`,
              textShadow: `0 0 4px ${link.color}`,
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
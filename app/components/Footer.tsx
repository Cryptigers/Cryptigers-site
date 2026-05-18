export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 border-t border-[#ff00ff22] text-center">
      <p
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "#ff00ff88" }}
      >
        © {year} CRYPTIGERS.COM
      </p>
      <p
        className="text-[10px] tracking-[0.3em] uppercase mt-2"
        style={{ color: "#ff00ff66" }}
      >
        Made with ▮ in the neon grid
      </p>
    </footer>
  );
}
const BROWN = "#3d1f10";

export default function Footer({ profile }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: BROWN, padding: "56px 56px 36px", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 26 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
        </svg>
        <span style={{ color: "#fff", fontSize: "1.2rem", fontFamily: "Georgia, serif" }}>
          {profile?.name || "Ankit Das"}
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {[["home", "Home"], ["about-me", "About Me"], ["my-projects", "My Projects"], ["contact-me", "Contact Me"]]
          .map(([id, label], i, arr) => (
            <span key={id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={() => scrollTo(id)} style={{
                background: "none", border: "none", color: "rgba(255,255,255,0.75)",
                fontSize: "0.84rem", cursor: "pointer",
                fontFamily: "Georgia, serif",
                textDecoration: "underline", textUnderlineOffset: 3
              }}>{label}</button>
              {i < arr.length - 1 && <span style={{ color: "rgba(255,255,255,0.35)" }}>|</span>}
            </span>
          ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 24 }}>
        {[
          { label: "GH", href: profile?.githubUrl || "#" },
          { label: "LI", href: profile?.linkedinUrl || "#" },
          { label: "IG", href: "#" },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{
            width: 38, height: 38, borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", textDecoration: "none",
            fontSize: "0.65rem", fontWeight: 700, fontFamily: "sans-serif"
          }}>{label}</a>
        ))}
      </div>

      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.72rem", fontFamily: "sans-serif" }}>
        © 2026 {profile?.name || "Ankit Das"} · All rights reserved
      </p>
    </footer>
  );
}
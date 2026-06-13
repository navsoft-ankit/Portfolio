import { Link } from "react-router-dom";
const BROWN = "#3d1f10";

export default function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: BROWN, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 56px", height: "70px"
    }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
        }}
        onClick={() => scrollTo("home")}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <span
          style={{
            color: "#fff",
            fontSize: "2.15rem",
          }}
        >
          Ankit Das
        </span>
      </div>

      <div style={{ display: "flex", gap: 36 }}>
        <Link
          to="/about"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.10rem",
            fontFamily: "Georgia, serif",
            opacity: 0.9,
          }}
        >
          About Me
        </Link>

        <Link
          to="/projects"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.10rem",
            fontFamily: "Georgia, serif",
            opacity: 0.9,
          }}
        >
          My Projects
        </Link>

        <Link
          to="/contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.10rem",
            fontFamily: "Georgia, serif",
            opacity: 0.9,
          }}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
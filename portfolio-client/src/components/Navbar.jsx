import { Link } from "react-router-dom";

const BROWN = "#3d1f10";

export default function Navbar() {
  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontFamily: "Georgia, serif",
    opacity: 0.9,
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: BROWN,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 56px",
        height: "70px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Logo / Name */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        {/* <svg
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
        </svg> */}

        <span
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "500",
            letterSpacing: "1px",
          }}
        >
          Ankit Das
        </span>
      </Link>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "36px",
        }}
      >
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>

        <Link to="/about" style={navLinkStyle}>
          About Me
        </Link>

        <Link to="/projects" style={navLinkStyle}>
          My Projects
        </Link>

        <Link to="/skills" style={navLinkStyle}>
          Skills
        </Link>

        <Link to="/contact" style={navLinkStyle}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
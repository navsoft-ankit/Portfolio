import { Link } from "react-router-dom";
const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

export default function Projects({ projects }) {
  return (
    <section id="my-projects" style={{ background: "#fff", padding: "100px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: 3,
          textTransform: "uppercase", color: BROWN,
          fontFamily: "sans-serif", marginBottom: 10
        }}>My Work</p>
        <h2 style={{
          fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400,
          fontFamily: "Georgia, serif", marginBottom: 52
        }}>Projects</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(projects.length || 3, 3)}, 1fr)`,
          gap: 0
        }}>
          {(projects.length > 0 ? projects : [
            { id: 1, title: "Navsoft Feedback System", description: "Enterprise feedback platform with React frontend and ASP.NET Core backend." },
            { id: 2, title: "Weather API Application", description: "Real-time weather application integrated with external Weather APIs. Users can search locations and view current weather conditions instantly." },
            { id: 3, title: "QR Generator", description: "QR code generation application built with React and ASP.NET Core. Users can generate QR codes instantly and download them." },
          ]).map((p, i, arr) => (
            <div key={p.id} style={{
              borderTop: `3px solid ${BROWN}`,
              borderRight: i < arr.length - 1 ? "1px solid #e0d9d0" : "none",
              padding: "36px 28px"
            }}>
              <div style={{
                width: "100%", height: 200, background: CREAM,
                marginBottom: 20, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "2.5rem"
              }}>💻</div>
              <h3 style={{
                fontSize: "1.5rem", fontWeight: 400, marginBottom: 10,
                fontFamily: "Georgia, serif"
              }}>{p.title}</h3>
              <p style={{
                fontSize: "1.00rem", color: "#666", lineHeight: 1.7,
                marginBottom: 16, fontFamily: "sans-serif"
              }}>{p.description}</p>
              <Link
                to={`/projects/${p.id}`}
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: BROWN,
                  textDecoration: "none",
                  borderBottom: `1.5px solid ${BROWN}`,
                  paddingBottom: 2
                }}
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
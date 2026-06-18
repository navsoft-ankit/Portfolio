import { Link } from "react-router-dom";

const BROWN = "#3d1f10";

export default function Hero({ profile }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -70;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Safe bio fallback
  const bio =
    typeof profile?.bio === "string" &&
      profile.bio.trim() !== "" &&
      profile.bio.toLowerCase() !== "string"
      ? profile.bio
      : ".NET Full Stack Developer";

  // SAFE CV URL BUILDER (FIXED)
  const getCvUrl = (url) => {
    if (!url) return "";

    // already full URL (Cloudinary etc.)
    if (url.startsWith("http")) return url;

    const base = "https://portfolio-6k0f.onrender.com";

    return `${base}${url.startsWith("/") ? url : "/" + url}`;
  };

  // safer CV check
  const hasCv = profile?.cvUrl && profile.cvUrl.length > 10;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={profile?.profileImage || "/image.png"}
        alt={profile?.name || "Portfolio"}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 10, 5, 0.55)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {/* NAME */}
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "20px",
            fontFamily: "Georgia, serif",
          }}
        >
          {profile?.name || "Ankit Das"}
        </h1>

        {/* BIO */}
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "700px",
            lineHeight: 1.8,
            marginBottom: "40px",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          {bio}
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Projects */}
          <button
            onClick={() => scrollTo("my-projects")}
            style={{
              background: "#fff",
              color: "#111",
              border: "none",
              padding: "15px 36px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            View My Projects
          </button>

          {/* Contact */}
          <Link
            to="/contact"
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              padding: "15px 36px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              display: "inline-block",
              textTransform: "uppercase",
            }}
          >
            Contact Me
          </Link>

          {/* CV DOWNLOAD */}
          {hasCv && (
            <a
              href={getCvUrl(profile.cvUrl)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                padding: "15px 36px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textDecoration: "none",
                display: "inline-block",
                textTransform: "uppercase",
              }}
            >
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}


const BROWN = "#3d1f10";

export default function About({ profile }) {
  console.log(profile);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const bio =
    profile?.bio &&
      profile.bio.trim() !== "" &&
      profile.bio.toLowerCase() !== "string"
      ? profile.bio
      : "I'm a Full Stack .NET Developer specializing in ASP.NET Core, React, SQL Server and modern web application development.";

  return (
    <section
      id="about-me"
      style={{
        background: "#fff",
        padding: "100px 56px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <h2
            style={{
              fontSize: "clamp(1.9rem,3.5vw,3rem)",
              fontWeight: 400,
              color: BROWN,
              lineHeight: 1.18,
              marginBottom: 26,
              fontFamily: "Georgia, serif",
            }}
          >
            Building with clarity,
            <br />
            precision, and craft.
          </h2>

          <p
            style={{
              fontSize: "1.00rem",
              color: "#555",
              lineHeight: 1.85,
              marginBottom: 18,
              fontFamily: "sans-serif",
            }}
          >
            {bio}
          </p>

          <p
            style={{
              fontSize: "0.92rem",
              color: "#555",
              lineHeight: 1.85,
              marginBottom: 32,
              fontFamily: "sans-serif",
            }}
          >
            📧 {profile?.email || "ankit@gmail.com"}
          </p>

          <a
            href="https://github.com/navsoft-ankit"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: 16,
              color: BROWN,
              fontFamily: "sans-serif",
              fontSize: "1.00rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: BROWN,
              fontFamily: "sans-serif",
              fontSize: "1.00rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            LinkedIn ↗
          </a>

          <div style={{ marginTop: 32 }}>
            <button
              onClick={() => scrollTo("contact-me")}
              style={{
                background: BROWN,
                color: "#fff",
                border: "none",
                padding: "14px 36px",
                fontSize: "1.0rem",
                fontWeight: 700,
                letterSpacing: 2,
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              CONTACT ME
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            width: "100%",
            height: 460,
            overflow: "hidden",
          }}
        >
          <img
            src="/image.png"
            alt="Ankit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>
    </section>
  );
}

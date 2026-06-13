const BROWN = "#3d1f10";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: BROWN,
        color: "#fff",
        padding: "70px 56px 30px",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Top Section */}
        <div
          className="footer-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 50,
          }}
        >
          {/* About */}
          <div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                fontFamily: "Georgia, serif",
                marginBottom: 15,
              }}
            >
              Ankit Das
            </h2>

            <p
              style={{
                color: "#d7d0c8",
                maxWidth: 350,
                lineHeight: 1.8,
                fontFamily: "sans-serif",
              }}
            >
              Full Stack Developer specializing in ASP.NET Core,
              React, SQL Server, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                marginBottom: 15,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: "0.8rem",
                fontFamily: "sans-serif",
              }}
            >
              Quick Links
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a
                href="#home"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                Home
              </a>

              <a
                href="#about-me"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                About
              </a>

              <a
                href="#skills"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                Skills
              </a>

              <a
                href="#my-projects"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                Projects
              </a>

              <a
                href="#contact-me"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                marginBottom: 15,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: "0.8rem",
                fontFamily: "sans-serif",
              }}
            >
              Connect
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a
                href="https://github.com/navsoft-ankit"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitdas7956@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#d7d0c8",
                  textDecoration: "none",
                  wordBreak: "break-word",
                }}
              >
                ankitdas7956@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 25,
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#bdb4ab",
              fontSize: "0.85rem",
              fontFamily: "sans-serif",
            }}
          >
            © {new Date().getFullYear()} Ankit Das. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
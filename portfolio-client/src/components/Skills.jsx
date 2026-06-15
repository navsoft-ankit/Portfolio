const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

export default function Skills({ skills }) {
  return (
    <section style={{ background: CREAM, padding: "60px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: BROWN,
            fontFamily: "sans-serif",
            marginBottom: 10,
          }}
        >
          What I Know
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem,3vw,2.6rem)",
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            marginBottom: 40,
          }}
        >
          Skills & Tools
        </h2>

        <div
          className="skills-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {skills.length > 0 ? (
            skills.map((s) => (
              <div
                key={s.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    padding: "8px 20px",
                    border: `1px solid ${BROWN}`,
                    color: BROWN,
                    fontSize: "0.75rem",
                    letterSpacing: 1,
                    fontFamily: "sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {s.name}
                </span>

                {s.percentage && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#888",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {s.percentage}%
                  </span>
                )}
              </div>
            ))
          ) : (
            [
              "ASP.NET Core",
              "C#",
              "React",
              "TypeScript",
              "Entity Framework",
              "SQL Server",
              "REST APIs",
              "Git",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "8px 20px",
                  border: `1px solid ${BROWN}`,
                  color: BROWN,
                  fontSize: "0.75rem",
                  letterSpacing: 1,
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
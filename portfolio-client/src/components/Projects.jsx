import { Link } from "react-router-dom";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

const IMAGE_BASE =
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace("/api", "")
    : "https://portfolio-6k0f.onrender.com";

export default function Projects({ projects }) {

  // ১. MongoDB-র সাথে মিল রেখে id পরিবর্তন করে _id করা হয়েছে
  const defaultProjects = [
    {
      _id: "1",
      title: "Voxify Feedback System",
      description:
        "Feedback platform with React frontend and ASP.NET Core backend.",
    },
    {
      _id: "2",
      title: "Weather API Application",
      description:
        "Real-time weather application integrated with external Weather APIs.",
    },
    {
      _id: "3",
      title: "QR Generator",
      description:
        "QR code generation application built with React and ASP.NET Core.",
    },
  ];

  const projectList =
    projects && projects.length > 0
      ? projects
      : defaultProjects;

  return (
    <section
      id="my-projects"
      style={{
        background: "#fff",
        padding: "100px 56px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: BROWN,
            marginBottom: 10,
          }}
        >
          My Work
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem,3vw,2.6rem)",
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            marginBottom: 52,
          }}
        >
          Projects
        </h2>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(
              projectList.length,
              3
            )},1fr)`,
            gap: 0,
          }}
        >

          {projectList.map((project, index) => (

            <div
              key={project._id} // 👈 id এর বদলে _id ব্যবহার করা হয়েছে
              style={{
                borderTop: `3px solid ${BROWN}`,
                borderRight:
                  index < projectList.length - 1
                    ? "1px solid #e0d9d0"
                    : "none",
                padding: "36px 28px",
              }}
            >

              {/* IMAGE */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  background: CREAM,
                  marginBottom: "20px",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                {project.imageUrl ? (
                  <img
                    // 👈 Cloudinary ফুল URL অথবা লোকাল রিলেটিভ পাথ দুটোই হ্যান্ডেল করবে এই লজিকটি
                    src={
                      project.imageUrl?.startsWith("http")
                        ? project.imageUrl
                        : `${IMAGE_URL}${project.imageUrl}`
                    }
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#777",
                      fontSize: "1rem",
                    }}
                  >
                    No Image
                  </div>
                )}
              </div>

              {/* TITLE */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  marginBottom: "12px",
                  fontFamily: "Georgia, serif",
                }}
              >
                {project.title}
              </h3>

              {/* TECHNOLOGIES */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: BROWN,
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                {project.technologies}
              </p>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              {/* BUTTON */}
              <Link
                to={project._id ? `/projects/${project._id}` : "#"}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: BROWN,
                  textDecoration: "none",
                  borderBottom: `1.5px solid ${BROWN}`,
                  paddingBottom: "2px",
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
import { Link } from "react-router-dom";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

const projects = [
    {
        id: 1,
        title: "Feedback Management System",
        short:
            "Enterprise feedback platform built with React and ASP.NET Core.",
        description:
            "A complete feedback management platform where users can submit feedback, administrators can manage records, track responses and monitor performance through dashboards.",
        image: "image copy.png",
    },

    {
        id: 2,
        title: "Weather API Application",
        short:
            "Real-time weather application integrated with external APIs.",
        description:
            "Users can search any location and instantly view weather conditions, temperature, humidity and forecasts using third-party weather APIs.",
        image:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200",
    },

    {
        id: 3,
        title: "QR Generator",
        short:
            "Generate and download QR codes instantly.",
        description:
            "Built with React and ASP.NET Core. Users can create QR codes for URLs, text and other resources and download them instantly.",
        image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
    },
];

export default function ProjectsPage() {
    return (
        <section
            style={{
                background: CREAM,
                minHeight: "100vh",
            }}
        >
            <Link
                to="/"
                style={{
                    position: "fixed",
                    top: "25px",
                    left: "25px",
                    textDecoration: "none",
                    color: BROWN,
                    fontWeight: "600",
                    background: "#fff",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
                    zIndex: 100,
                }}
            >
                ← Back To Home
            </Link>
            {/* HERO */}

            <div
             className="projects-hero"
                style={{
                    background: BROWN,
                    color: "#fff",
                    padding: "20px 0",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "5rem",
                        fontFamily: "Georgia, serif",
                        fontWeight: "400",
                    }}
                >
                    My Projects
                </h1>
            </div>

            {/* PROJECTS */}

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="project-row"
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        padding: "10px 40px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "center",
                    }}
                >
                    {/* LEFT */}

                    {index % 2 === 0 ? (
                        <>
                            <div
                                style={{
                                    width: "100%",
                                    height: "650px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            <div>
                                <h2
                                 className="project-title"
                                    style={{
                                        fontSize: "4rem",
                                        fontFamily: "Georgia, serif",
                                        color: BROWN,
                                        marginBottom: "30px",
                                    }}
                                >
                                    {project.title}
                                </h2>

                                <p
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#666",
                                        lineHeight: "1.8",
                                        marginBottom: "40px",
                                    }}
                                >
                                    {project.short}
                                </p>

                                <p
                                    style={{
                                        fontSize: "1.15rem",
                                        color: "#666",
                                        lineHeight: "2",
                                        marginBottom: "50px",
                                    }}
                                >
                                    {project.description}
                                </p>

                                <Link
                                    to={`/projects/${project.id}`}
                                    style={{
                                        background: BROWN,
                                        color: "#fff",
                                        textDecoration: "none",
                                        padding: "18px 50px",
                                        display: "inline-block",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    VIEW PROJECT
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <h2
                                    style={{
                                        fontSize: "4rem",
                                        fontFamily: "Georgia, serif",
                                        color: BROWN,
                                        marginBottom: "30px",
                                    }}
                                >
                                    {project.title}
                                </h2>

                                <p
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#666",
                                        lineHeight: "1.8",
                                        marginBottom: "40px",
                                    }}
                                >
                                    {project.short}
                                </p>

                                <p
                                    style={{
                                        fontSize: "1.15rem",
                                        color: "#666",
                                        lineHeight: "2",
                                        marginBottom: "50px",
                                    }}
                                >
                                    {project.description}
                                </p>

                                <Link
                                    to={`/projects/${project.id}`}
                                    style={{
                                        background: BROWN,
                                        color: "#fff",
                                        textDecoration: "none",
                                        padding: "18px 50px",
                                        display: "inline-block",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    VIEW PROJECT
                                </Link>
                            </div>

                            <div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "650px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
}
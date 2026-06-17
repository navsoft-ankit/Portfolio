import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getProjects } from "../api/api";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

const IMAGE_BASE =
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace("/api", "")
    : "https://portfolio-6k0f.onrender.com";
    
export default function ProjectsPage() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        getProjects()
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
            });

    }, []);

    return (
        <>
            <section
                style={{
                    background: CREAM,
                    minHeight: "100vh",
                }}
            >
                <Link
                    className="back-btn"
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

                        {index % 2 === 0 ? (

                            <>
                                <div className="project-image-wrap">

                                    <img
                                        className="project-image"
                                       src={`${IMAGE_BASE}${project.imageUrl}`}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: "650px",
                                            objectFit: "cover",
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

                                    <div style={{ marginBottom: "25px" }}>
                                        <h3
                                            style={{
                                                color: BROWN,
                                                marginBottom: "12px",
                                                fontSize: "1.2rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            Technologies
                                        </h3>

                                        <p
                                            style={{
                                                fontSize: "1rem",
                                                color: "#666",
                                                lineHeight: "1.8"
                                            }}
                                        >
                                            {project.technologies || "Not specified"}
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: "40px" }}>
                                        <h3
                                            style={{
                                                color: BROWN,
                                                marginBottom: "12px",
                                                fontSize: "1.2rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            Description
                                        </h3>

                                        <p
                                            style={{
                                                fontSize: "1rem",
                                                color: "#666",
                                                lineHeight: "1.9"
                                            }}
                                        >
                                            {project.description || "No description available"}
                                        </p>
                                    </div>

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

                                    <div style={{ marginBottom: "40px" }}>
                                        <h3
                                            style={{
                                                color: BROWN,
                                                marginBottom: "12px",
                                                fontSize: "1.2rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            Description
                                        </h3>

                                        <p
                                            style={{
                                                fontSize: "1rem",
                                                color: "#666",
                                                lineHeight: "1.9"
                                            }}
                                        >
                                            {project.description || "No description available"}
                                        </p>
                                    </div>

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

                                <div className="project-image-wrap">

                                    <img
                                        className="project-image"
                                        src={`${IMAGE_BASE}${project.imageUrl}`}
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

            <Footer />

        </>
    );
}
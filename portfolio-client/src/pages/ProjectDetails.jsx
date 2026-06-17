import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById } from "../api/api";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

const IMAGE_URL =
  import.meta.env.VITE_API_URL ||
  "https://portfolio-6k0f.onrender.com";;

export default function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {

        getProjectById(id)
            .then(res => {

                setProject(res.data);

            })
            .catch(err => {


            });

    }, [id]);

    if (!project) {

        return (

            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <h1>Loading...</h1>

            </div>

        );
    }

    return (

        <section
            style={{
                minHeight: "100vh",
                background: "#fff",
                padding: "40px 60px 100px",
            }}
        >

            {/* Back Button */}

            <Link
                to="/"
                style={{
                    position: "fixed",
                    top: "25px",
                    left: "30px",
                    color: BROWN,
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "15px",
                    zIndex: 999,
                    background: "#fff",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                }}
            >
                ← Back To Home
            </Link>


            {/* Hero Banner */}

            <div
                style={{
                    width: "100%",
                    height: "600px",
                    background: CREAM,
                    borderRadius: "12px",
                    marginTop: "40px",
                    overflow: "hidden",
                }}
            >

                <img
                    src={`${IMAGE_URL}${project.imageUrl}`}
                    alt={project.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />

            </div>


            {/* Content */}

            <div
                style={{
                    width: "100%",
                    marginTop: "50px",
                }}
            >

                <h1
                    style={{
                        fontSize: "4rem",
                        fontFamily: "Georgia, serif",
                        color: BROWN,
                        marginBottom: "20px",
                    }}
                >
                    {project.title}
                </h1>


                <p
                    style={{
                        maxWidth: "100%",
                        fontSize: "1.1rem",
                        lineHeight: "1.9",
                        color: "#555",
                        marginBottom: "50px",
                    }}
                >
                    {project.description}
                </p>


                <h2
                    style={{
                        color: BROWN,
                        marginBottom: "20px",
                        fontFamily: "Georgia, serif",
                    }}
                >
                    Tech Stack
                </h2>


                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "50px",
                    }}
                >

                    {project.technologies
                        ?.split(",")
                        .map((tech) => (

                            <span
                                key={tech}
                                style={{
                                    padding: "12px 18px",
                                    background: CREAM,
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    fontWeight: "500",
                                }}
                            >
                                {tech}
                            </span>

                        ))}

                </div>


                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        display: "inline-block",
                        background: BROWN,
                        color: "#fff",
                        textDecoration: "none",
                        padding: "16px 32px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                    }}
                >
                    View Source Code →
                </a>

            </div>

        </section>

    );
}
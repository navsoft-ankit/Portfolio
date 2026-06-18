import { useEffect, useState } from "react";
import { getProfile, getProjects, getSkills } from "../api/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const CREAM = "#f0ece4";
const BROWN = "#3d1f10";

export default function Home() {
    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getProfile()
            .then((r) => setProfile(r.data))
            .catch(() => { });

        getProjects()
            .then((r) => setProjects(r.data))
            .catch(() => { });

        getSkills()
            .then((r) => setSkills(r.data))
            .catch(() => { });
    }, []);

    if (!profile) {
        return (
            <div
                style = {{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                }}
                >
                    <div
                        style = {{
                            width: "60px",
                            height: "60px",
                            border: "6px solid #e5e5e5",
                            borderTop: "6px solid #3d1f10",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                        }}
                    />
            </div>
        );
    }

    return (
        <div
            style={{
                fontFamily: "Georgia, serif",
                color: "#1a1a1a",
                background: "#fff",
            }}
        >
            <Navbar />

            <Hero profile={profile} />

            {/* Highlights Section */}
            <section
                style={{
                    background: CREAM,
                    padding: "80px 56px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "48px",
                            textAlign: "center",
                        }}
                    >
                        {[
                            {
                                value: "0+",
                                title: "Years Experience",
                                desc: "Building modern web applications with .NET, SQL Server and React.",
                            },
                            {
                                value: "7+",
                                title: "Projects Completed",
                                desc: "Academic, personal and enterprise-grade software solutions.",
                            },
                            {
                                value: "4+",
                                title: "Technologies",
                                desc: "Frontend, backend, databases and cloud fundamentals.",
                            },
                        ].map((item) => (
                            <div key={item.title}>
                                <h2
                                    style={{
                                        fontSize: "3rem",
                                        color: BROWN,
                                        marginBottom: "12px",
                                        fontWeight: "600",
                                    }}
                                >
                                    {item.value}
                                </h2>

                                <h3
                                    style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "12px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#666",
                                        lineHeight: "1.8",
                                        fontFamily: "sans-serif",
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <About profile={profile} />

            <Skills skills={skills} />

            <Projects projects={projects} />

            <Contact profile={profile} />

            <Footer profile={profile} />
        </div>
    );
}
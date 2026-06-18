import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getSkills } from "../api/api";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

export default function SkillsPage() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        getSkills()
            .then(res => {

                setSkills(res.data);

            })
            .catch(err => {

                console.log(err);

            });

    }, []);

    return (
        <>
            <Navbar />

            <section
                style={{
                    background: CREAM,
                    minHeight: "100vh",
                    padding: "120px 8% 80px",
                }}
            >

                {/* Header */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "60px",
                    }}
                >

                    <h1
                        style={{
                            color: BROWN,
                            fontSize: "3rem",
                            marginBottom: "15px",
                            fontWeight: "700",
                        }}
                    >
                        My Skills
                    </h1>

                    <div
                        style={{
                            width: "80px",
                            height: "4px",
                            background: BROWN,
                            margin: "0 auto 20px",
                        }}
                    />

                    <p
                        style={{
                            maxWidth: "700px",
                            margin: "0 auto",
                            color: "#555",
                            lineHeight: "1.8",
                            fontSize: "1rem",
                        }}
                    >
                        Here are the technologies and tools I use to build scalable,
                        efficient, and modern web applications.
                    </p>

                </div>


                {/* Skills Grid */}
                <div
                    className="skills-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                        gap: "30px",
                    }}
                >

                    {skills.map((skill) =>
                    (

                        <div
                            key={skill.id}
                            style={{
                                background: "#fff",
                                padding: "25px",
                                borderRadius: "15px",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                            }}
                        >

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >

                                <h3
                                    style={{
                                        color: BROWN,
                                        margin: 0,
                                    }}
                                >
                                    {skill.name}
                                </h3>

                                <span
                                    style={{
                                        color: BROWN,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {skill.percentage}%
                                </span>

                            </div>


                            <div
                                style={{
                                    height: "10px",
                                    background: "#ddd",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                }}
                            >

                                <div
                                    style={{
                                        width: `${skill.percentage}%`,
                                        height: "100%",
                                        background: BROWN,
                                        borderRadius: "10px",
                                        transition: "0.5s",
                                    }}
                                />

                            </div>

                        </div>

                    ))}

                </div>


                {/* Technologies */}
                <div
                    style={{
                        marginTop: "80px",
                    }}
                >

                    <h2
                        style={{
                            textAlign: "center",
                            color: BROWN,
                            marginBottom: "40px",
                        }}
                    >
                        Technologies
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "15px",
                        }}
                    >

                        {skills.map((skill) => (

                            <span
                                key={skill.id}
                                style={{
                                    background: BROWN,
                                    color: "#fff",
                                    padding: "12px 20px",
                                    borderRadius: "30px",
                                    fontSize: "0.9rem",
                                    fontWeight: "500",
                                }}
                            >
                                {skill.name}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />

        </>
    );
}

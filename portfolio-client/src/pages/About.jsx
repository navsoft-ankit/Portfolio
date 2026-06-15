import { Link } from "react-router-dom";

const BROWN = "#3d1f10";
const CREAM = "#f5f1eb";

export default function About() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#fff",
                padding: "80px 60px",
            }}
        >
            {/* Back Button */}
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

            <div
                className="about-content"
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    paddingTop: "40px",
                }}
            >
                {/* Image */}
                <div
                    className="about-image"
                    style={{
                        flex: "1.2",
                    }}
                >
                    <img
                        src="/image.png"
                        alt="Ankit Das"
                        style={{
                            width: "100%",
                            height: "700px",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />
                </div>

                {/* Vertical Line */}
                <div
                    className="about-divider"
                    style={{
                        width: "2px",
                        height: "700px",
                        background: BROWN,
                        opacity: 0.25,
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        flex: "1",
                    }}
                >
                    <p
                        style={{
                            color: BROWN,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            fontWeight: "700",
                            fontSize: "0.8rem",
                            marginBottom: "10px",
                        }}
                    >
                        About Me
                    </p>

                    <h1
                        className="about-title"
                        style={{
                            fontSize: "4rem",
                            color: BROWN,
                            fontFamily: "Georgia, serif",
                            marginBottom: "25px",
                        }}
                    >
                        Ankit Das
                    </h1>

                    <p
                        style={{
                            color: "#666",
                            lineHeight: "2",
                            marginBottom: "20px",
                            fontSize: "1.05rem",
                        }}
                    >
                        I'm a passionate Full-Stack .NET Developer specializing in
                        React.js, ASP.NET Core Web API, and Microsoft SQL Server.
                        I enjoy building modern web applications that are scalable,
                        responsive, and user-friendly.
                    </p>

                    <p
                        style={{
                            color: "#666",
                            lineHeight: "2",
                            marginBottom: "20px",
                            fontSize: "1.05rem",
                        }}
                    >
                        I have worked on projects including Feedback Management
                        Systems, Weather Applications, QR Code Generators, and RESTful
                        APIs. My focus is writing clean code, creating intuitive user
                        experiences, and developing reliable backend architectures.
                    </p>

                    <p
                        style={{
                            color: "#666",
                            lineHeight: "2",
                            fontSize: "1.05rem",
                        }}
                    >
                        My goal is to continuously learn new technologies and build
                        software that solves real-world problems while delivering
                        exceptional user experiences.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            marginTop: "30px",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            "React",
                            "ASP.NET Core",
                            "C#",
                            "SQL Server",
                            "JavaScript",
                            "REST API",
                        ].map((skill) => (
                            <span
                                key={skill}
                                style={{
                                    background: CREAM,
                                    padding: "10px 18px",
                                    borderRadius: "6px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
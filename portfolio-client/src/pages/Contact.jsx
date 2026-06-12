import Navbar from "../components/Navbar";

const BROWN = "#3d1f10";
const CREAM = "#f5f1eb";

export default function Contact() {
    return (
        <>
            <Navbar />

            <section
                style={{
                    minHeight: "100vh",
                    background: "#fff",
                    padding: "120px 60px 80px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "center",
                    }}
                >
                    {/* LEFT SIDE */}
                    <div>
                        <p
                            style={{
                                color: BROWN,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                fontWeight: "700",
                                marginBottom: "15px",
                            }}
                        >
                            Contact Me
                        </p>

                        <h1
                            style={{
                                fontSize: "5rem",
                                color: BROWN,
                                fontFamily: "Georgia, serif",
                                marginBottom: "30px",
                                lineHeight: 1,
                            }}
                        >
                            Let's Work Together
                        </h1>

                        <p
                            style={{
                                color: "#666",
                                lineHeight: "2",
                                fontSize: "1.05rem",
                                marginBottom: "40px",
                            }}
                        >
                            Have a project in mind or looking for a Full-Stack .NET
                            Developer? Feel free to reach out. I'm always open to
                            discussing new opportunities and exciting ideas.
                        </p>

                        <div style={{ marginBottom: "30px" }}>
                            <h3 style={{ color: BROWN, marginBottom: "10px" }}>
                                Email
                            </h3>
                            <p style={{ color: "#666" }}>
                                ankit@example.com
                            </p>
                        </div>

                        <div style={{ marginBottom: "30px" }}>
                            <h3 style={{ color: BROWN, marginBottom: "10px" }}>
                                Phone
                            </h3>
                            <p style={{ color: "#666" }}>
                                +91 9876543210
                            </p>
                        </div>

                        <div>
                            <h3 style={{ color: BROWN, marginBottom: "10px" }}>
                                Location
                            </h3>
                            <p style={{ color: "#666" }}>
                                Kolkata, India
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div
                        style={{
                            borderLeft: `2px solid ${BROWN}`,
                            paddingLeft: "60px",
                        }}
                    >
                        <form
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={{
                                    padding: "16px",
                                    border: "1px solid #ddd",
                                    fontSize: "1rem",
                                    outline: "none",
                                }}
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: "16px",
                                    border: "1px solid #ddd",
                                    fontSize: "1rem",
                                    outline: "none",
                                }}
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                style={{
                                    padding: "16px",
                                    border: "1px solid #ddd",
                                    fontSize: "1rem",
                                    outline: "none",
                                }}
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                style={{
                                    padding: "16px",
                                    border: "1px solid #ddd",
                                    fontSize: "1rem",
                                    outline: "none",
                                    resize: "none",
                                }}
                            />

                            <button
                                type="submit"
                                style={{
                                    background: BROWN,
                                    color: "#fff",
                                    border: "none",
                                    padding: "16px",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
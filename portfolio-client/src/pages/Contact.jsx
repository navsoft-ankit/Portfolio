import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sendMessage } from "../api/api";

const BROWN = "#3d1f10";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await sendMessage(form);

            console.log(res.data);

            setStatus("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            //   console.log("FULL ERROR:", err.response);
            //   console.log("ERROR DATA:", err.response?.data);
            //   console.log("ERRORS:", err.response?.data?.errors);

            setStatus("Failed to send. Try again.");
        }
    };

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
                    className="contact-container-mobile"
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "center",
                    }}
                >
                    {/* LEFT */}
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
                            className="contact-title"
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
                            Developer? Feel free to reach out.
                        </p>

                        <div style={{ marginBottom: "30px" }}>
                            <h3 style={{ color: BROWN }}>Email</h3>
                            <p style={{ color: "#666" }}>
                                ankitdas7956@gmail.com
                            </p>
                        </div>

                        <div style={{ marginBottom: "30px" }}>
                            <h3 style={{ color: BROWN }}>Phone</h3>
                            <p style={{ color: "#666" }}>
                                +91 9007316168
                            </p>
                        </div>

                        <div>
                            <h3 style={{ color: BROWN }}>Location</h3>
                            <p style={{ color: "#666" }}>
                                Kolkata, India
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        style={{
                            borderLeft: `2px solid ${BROWN}`,
                            paddingLeft: "60px",
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value,
                                    })
                                }
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
                                value={form.email}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        email: e.target.value,
                                    })
                                }
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
                                value={form.message}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }
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

                            {status && (
                                <p
                                    style={{
                                        color: BROWN,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
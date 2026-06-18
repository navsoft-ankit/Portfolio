import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { useAuth } from "../context/AuthContext";

const BROWN = "#3d1f10";

export default function Login() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login({
                username: form.username,
                email: form.email,
                password: form.password,
            });

            loginUser();
            navigate("/admin");
        } catch {
            setError("Invalid username, email or password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #f5f1eb 0%, #e6ddd2 100%)",
                fontFamily: "'Inter', sans-serif",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "24px",
                    padding: "45px 35px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(255,255,255,0.4)",
                }}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                    <div
                        style={{
                            width: "70px",
                            height: "70px",
                            margin: "0 auto",
                            borderRadius: "50%",
                            background: "#f8f5f1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3d1f10" />
                                    <stop offset="100%" stopColor="#7a4b2f" />
                                </linearGradient>
                            </defs>

                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="url(#grad)"
                                strokeWidth="1.8"
                                opacity="0.25"
                            />

                            <path
                                d="M8 9L5.5 12L8 15"
                                stroke="url(#grad)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />

                            <path
                                d="M16 9L18.5 12L16 15"
                                stroke="url(#grad)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />

                            <path
                                d="M10 11V9.5a2 2 0 1 1 4 0V11"
                                stroke="url(#grad)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />

                            <rect
                                x="9"
                                y="11"
                                width="6"
                                height="5"
                                rx="1.5"
                                stroke="url(#grad)"
                                strokeWidth="1.8"
                            />
                        </svg>
                    </div>

                    <h1
                        style={{
                            marginTop: "18px",
                            fontSize: "2rem",
                            color: BROWN,
                            fontWeight: "700",
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        Admin Login
                    </h1>

                    <p
                        style={{
                            color: "#777",
                            fontSize: "0.9rem",
                            marginTop: "6px",
                        }}
                    >
                        Welcome back, Ankit
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    {[
                        {
                            key: "username",
                            placeholder: "Username",
                        },
                        {
                            key: "email",
                            placeholder: "Email Address",
                            type: "email",
                        },
                        {
                            key: "password",
                            placeholder: "Password",
                            type: "password",
                        },
                    ].map(({ key, placeholder, type = "text" }) => (
                        <input
                            key={key}
                            type={type}
                            placeholder={placeholder}
                            value={form[key]}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [key]: e.target.value,
                                })
                            }
                            style={{
                                padding: "14px 18px",
                                borderRadius: "12px",
                                border: "1px solid #ddd",
                                fontSize: "0.95rem",
                                outline: "none",
                                transition: "0.3s",
                                background: "#fff",
                            }}
                            onFocus={(e) => {
                                e.target.style.border =
                                    `1px solid ${BROWN}`;
                                e.target.style.boxShadow =
                                    `0 0 0 4px rgba(61,31,16,0.1)`;
                            }}
                            onBlur={(e) => {
                                e.target.style.border =
                                    "1px solid #ddd";
                                e.target.style.boxShadow = "none";
                            }}
                        />
                    ))}

                    {error && (
                        <div
                            style={{
                                background: "#fff0f0",
                                color: "#d32f2f",
                                padding: "12px",
                                borderRadius: "10px",
                                fontSize: "0.85rem",
                                textAlign: "center",
                            }}
                        >
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            marginTop: "10px",
                            background: BROWN,
                            color: "#fff",
                            border: "none",
                            padding: "15px",
                            borderRadius: "12px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            cursor: "pointer",
                            transition: "0.3s",
                            fontSize: "0.85rem",
                            boxShadow:
                                "0 8px 20px rgba(61,31,16,0.25)",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading ? "LOGGING IN..." : "LOGIN"}
                    </button>
                </form>
            </div>
        </div>
    );
}
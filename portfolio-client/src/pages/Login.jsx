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
            await login({ username: form.username, email: form.email, password: form.password });
            loginUser();
            navigate("/admin");
        } catch {
            setError("Invalid username, email or password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh", display: "flex", alignItems: "center",
            justifyContent: "center", background: "#f0ece4", fontFamily: "sans-serif"
        }}>
            <div style={{
                background: "#fff", padding: "48px 40px", width: "100%", maxWidth: 400,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
            }}>
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke={BROWN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
                    </svg>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: BROWN, marginTop: 12, fontFamily: "Georgia, serif" }}>
                        Admin Login
                    </h1>
                    <p style={{ fontSize: "0.82rem", color: "#888", marginTop: 6 }}>Ankit Das Portfolio</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                        { key: "username", placeholder: "Username" },
                        { key: "email", placeholder: "Email", type: "email" },
                        { key: "password", placeholder: "Password", type: "password" },
                    ].map(({ key, placeholder, type = "text" }) => (
                        <input key={key} type={type} placeholder={placeholder}
                            value={form[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            style={{
                                padding: "12px 16px", border: "1px solid #ddd",
                                fontSize: "0.88rem", outline: "none", width: "100%"
                            }}
                        />
                    ))}

                    {error && <p style={{ color: "red", fontSize: "0.82rem" }}>{error}</p>}

                    <button onClick={handleSubmit} disabled={loading} style={{
                        background: BROWN, color: "#fff", border: "none",
                        padding: "14px", fontSize: "0.75rem", fontWeight: 700,
                        letterSpacing: 2, cursor: "pointer", marginTop: 8,
                        opacity: loading ? 0.7 : 1
                    }}>
                        {loading ? "LOGGING IN..." : "LOGIN"}
                    </button>
                </div>
            </div>
        </div>
    );
}
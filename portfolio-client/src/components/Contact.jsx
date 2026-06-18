import { useState } from "react";
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

    // console.log(res.data);

    setStatus("Message sent successfully!");
  }
  catch (err) {

  // console.log("FULL ERROR:", err.response);
  // console.log("ERROR DATA:", err.response?.data);
  // console.log("ERRORS:", err.response?.data?.errors);

    setStatus("Failed to send");
  }
};

  return (
    <section
      id="contact-me"
      className="contact-section"
      style={{
        background: "#fff",
        padding: "100px 56px",
      }}
    >
      <div
        className="contact-container"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left Image */}
        <div
          className="contact-image"
          style={{
            width: "100%",
            height: 400,
            overflow: "hidden",
          }}
        >
          <img
            src="/image.png"
            alt="Ankit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        {/* Right Form */}
        <div className="contact-form-wrapper">
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: BROWN,
              fontFamily: "sans-serif",
              marginBottom: 10,
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
              fontWeight: 400,
              fontFamily: "Georgia, serif",
              marginBottom: 24,
            }}
          >
            Interested to work with me?
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#555",
              lineHeight: 1.8,
              marginBottom: 32,
              fontFamily: "sans-serif",
            }}
          >
            For collaborations, freelance work, or just a chat — reach out
            below.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
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
                padding: "12px 16px",
                border: "1px solid #ddd",
                fontSize: "0.88rem",
                fontFamily: "sans-serif",
                outline: "none",
                width: "100%",
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
                padding: "12px 16px",
                border: "1px solid #ddd",
                fontSize: "0.88rem",
                fontFamily: "sans-serif",
                outline: "none",
                width: "100%",
              }}
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                fontSize: "0.88rem",
                fontFamily: "sans-serif",
                outline: "none",
                resize: "vertical",
                width: "100%",
              }}
            />

            <button
              type="submit"
              style={{
                background: BROWN,
                color: "#fff",
                border: "none",
                padding: "14px 36px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: 2,
                cursor: "pointer",
                fontFamily: "sans-serif",
                alignSelf: "flex-start",
              }}
            >
              SEND MESSAGE
            </button>

            {status && (
              <p
                style={{
                  fontSize: "0.85rem",
                  color: BROWN,
                  fontFamily: "sans-serif",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
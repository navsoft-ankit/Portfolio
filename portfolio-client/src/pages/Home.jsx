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
        getProfile().then(r => setProfile(r.data)).catch(() => { });
        getProjects().then(r => setProjects(r.data)).catch(() => { });
        getSkills().then(r => setSkills(r.data)).catch(() => { });
    }, []);

    return (
        <div style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", background: "#fff" }}>
            <Navbar />
            <Hero profile={profile} />


            {/* Publications strip */}
            <section style={{ background: CREAM, padding: "72px 56px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48, textAlign: "center" }}>
                        {[
                            { name: "The Code Review", desc: "In-depth articles on modern .NET architecture and React best practices." },
                            { name: "Dev Weekly India", desc: "A weekly newsletter covering full-stack development and engineering culture." },
                            { name: "Navsoft Tech Blog", desc: "Engineering solutions and innovations from the Navsoft product team." },
                        ].map(({ name, desc }) => (
                            <div key={name}>
                                <div style={{ fontSize: "3rem", color: BROWN, marginBottom: 14, fontFamily: "serif" }}>❝❞</div>
                                <h3 style={{ fontSize: "2.05rem", fontWeight: 400, marginBottom: 10 }}>{name}</h3>
                                <p style={{ fontSize: "1.10rem", color: "#666", lineHeight: 1.75, fontFamily: "sans-serif" }}>{desc}</p>
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
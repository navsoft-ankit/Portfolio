import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
    getProfile, updateProfile, createProfile,
    getProjects, createProject, updateProject, deleteProject,
    getSkills, createSkill, updateSkill, deleteSkill,
    getServices, createService, updateService, deleteService,
    getMessages, deleteMessage,
} from "../api/api";

const BROWN = "#3d1f10";
const CREAM = "#f0ece4";

function Section({ title, children }) {
    return (
        <div style={{
            background: "#fff",
            borderRadius: 8,
            padding: 28,
            marginBottom: 24,
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
        }}>

            <h2 style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: BROWN,
                marginBottom: 20,
                fontFamily: "Georgia,serif",
                borderBottom: `2px solid ${BROWN}`,
                paddingBottom: 10
            }}>
                {title}

            </h2>

            {children}

        </div>
    );
}

function Field({ label, value, onChange, type = "text", rows }) {
    return (
        <div style={{
            marginBottom: 12
        }}>

            <label style={{
                display: "block",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#666",
                letterSpacing: 1,
                marginBottom: 4,
                textTransform: "uppercase"
            }}>
                {label}

            </label>

            {rows ? (
                <textarea value={value} onChange={onChange} rows={rows}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        border: "1px solid #ddd",
                        fontSize: "0.88rem",
                        resize: "vertical",
                        outline: "none"
                    }} />
            ) : (
                <input type={type} value={value} onChange={onChange}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        border: "1px solid #ddd",
                        fontSize: "0.88rem",
                        outline: "none"
                    }} />
            )}
        </div>
    );
}

const btn = (bg, color = "#fff") => ({
    background: bg,
    color,
    border: "none",
    padding: "8px 16px",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: 1,
    cursor: "pointer",
    fontFamily: "sans-serif"
});

export default function Admin() {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    const [tab, setTab] = useState("profile");

    // Profile
    const [profile, setProfile] = useState({ id: null, name: "", title: "", bio: "", email: "", githubUrl: "", linkedinUrl: "" });
    const [profileMsg, setProfileMsg] = useState("");

    // Projects
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: "", description: "" });
    const [editProject, setEditProject] = useState(null);

    // Skills
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({ name: "", percentage: "" });

    // Services
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ name: "", description: "" });

    // Messages
    const [messages, setMessages] = useState([]);

    // Image
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        getProfile().then(r => setProfile(r.data)).catch(() => { });
        getProjects().then(r => setProjects(r.data)).catch(() => { });
        getSkills().then(r => setSkills(r.data)).catch(() => { });
        getServices().then(r => setServices(r.data)).catch(() => { });
        getMessages().then(r => setMessages(r.data)).catch(() => { });
    }, []);

    const saveProfile = async () => {
        try {
            if (profile.id) {
                const r = await updateProfile(profile.id, profile);
                setProfile(r.data);
            } else {
                const r = await createProfile(profile);
                setProfile(r.data);
            }
            setProfileMsg("Data Saved!");
            setTimeout(() => setProfileMsg(""), 2000);
        } catch { setProfileMsg("Failed to save"); }
    };

    const tabs = ["profile", "projects", "skills", "services", "messages"];

    return (
        <div style={{
            minHeight: "100vh",
            background: CREAM,
            fontFamily: "sans-serif"
        }}
        >
            {/* Top bar */}

            <div style={{
                background: BROWN,
                padding: "0 32px",
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>

                <span style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontFamily: "Georgia,serif"
                }}>
                    ⚙ Admin Panel
                </span>

                <div style={{
                    display: "flex",
                    gap: 12
                }}>

                    <button
                        onClick={() =>
                            navigate("/")
                        }
                        style=
                        {
                            btn("rgba(255,255,255,0.15)")
                        }>
                        ← Portfolio
                    </button>

                    <button
                        onClick={() => {
                            logoutUser();
                            navigate("/login");
                        }}
                        style=
                        {
                            btn("#fff", BROWN)
                        }>
                        Logout
                    </button>

                </div>
            </div>

            <div style=
                {{
                    display: "flex",
                    minHeight: "calc(100vh - 64px)"
                }}>

                {/* Sidebar */}

                <aside style={{
                    width: 180,
                    background: "#fff",
                    borderRight: "1px solid #e0d9d0",
                    padding: "24px 0"
                }}>

                    {tabs.map(t => (
                        <button key={t}
                            onClick={() =>
                                setTab(t)
                            }
                            style=
                            {{
                                display: "block",
                                width: "100%",
                                padding: "12px 24px",
                                background: tab === t ? CREAM : "none",
                                border: "none",
                                borderLeft: tab === t ? `3px solid 
                            ${BROWN}` : "3px solid transparent",
                                textAlign: "left",
                                fontSize: "0.82rem",
                                fontWeight: tab === t ? 700 : 400,
                                color: tab === t ? BROWN : "#555",
                                cursor: "pointer",
                                textTransform: "capitalize"
                            }}>
                            {t}

                        </button>
                    )
                    )}
                </aside>

                {/* Content */}
                <main style={{
                    flex: 1,
                    padding: 32,
                    maxWidth: 900
                }}>

                    {/* PROFILE */}

                    {tab === "profile" && (

                        <Section title="Profile">
                            <Field
                                label="Name"
                                value={profile.name || ""}
                                onChange={e => setProfile
                                    ({ ...profile, name: e.target.value }

                                    )}
                            />

                            <Field
                                label="Title"
                                value={profile.title || ""}
                                onChange={e => setProfile
                                    ({ ...profile, title: e.target.value }

                                    )}
                            />

                            <Field
                                label="Bio"
                                value={profile.bio || ""}
                                onChange={e => setProfile
                                    ({ ...profile, bio: e.target.value }

                                    )}
                                rows={4}
                            />

                            <Field
                                label="Email"
                                value={profile.email || ""}
                                type="email"
                                onChange={e => setProfile
                                    ({ ...profile, email: e.target.value }

                                    )}
                            />

                            <Field
                                label="GitHub URL"
                                value={profile.githubUrl || ""}
                                onChange={e => setProfile
                                    ({ ...profile, githubUrl: e.target.value }

                                    )}
                            />

                            <Field
                                label="LinkedIn URL"
                                value={profile.linkedinUrl || ""}
                                onChange={e => setProfile
                                    ({ ...profile, linkedinUrl: e.target.value }

                                    )}
                            />

                            <div style={{
                                marginBottom: 16
                            }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        color: "#666",
                                        letterSpacing: 1,
                                        marginBottom: 6,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Profile Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setImageFile(e.target.files[0])
                                    }
                                />

                                {imageFile && (
                                    <>
                                        <p style={{
                                            marginTop: 6,
                                            fontSize: "0.8rem"
                                        }}>
                                            Selected:
                                            {
                                                imageFile.name
                                            }
                                        </p>

                                        <img
                                            src={URL.createObjectURL(imageFile)}
                                            alt="Preview"
                                            style={{
                                                width: "120px",
                                                height: "120px",
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                                marginTop: "10px",
                                                border: "2px solid #ddd",

                                            }}
                                        />
                                    </>
                                )}

                            </div>
                            <button onClick={saveProfile}
                                style={{
                                    ...btn(BROWN),
                                    marginTop: 8
                                }}
                            >
                                SAVE PROFILE
                            </button>

                            {profileMsg &&
                                <span style={{
                                    marginLeft: 12,
                                    fontSize: "0.82rem",
                                    color: BROWN
                                }}
                                >
                                    {profileMsg}
                                </span>}

                        </Section>
                    )}

                    {/* PROJECTS */}

                    {tab === "projects" && (
                        <Section title="Projects">

                            {/* Add new */}

                            <div style={{
                                background: CREAM,
                                padding: 20,
                                marginBottom: 24
                            }}
                            >
                                <h3 style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                    color: BROWN,
                                    marginBottom: 12,
                                    letterSpacing: 1
                                }}
                                >
                                    ADD NEW PROJECT
                                </h3>

                                <Field label="Title"
                                    value={newProject.title}
                                    onChange={e => setNewProject(
                                        {
                                            ...newProject, title: e.target.value

                                        }
                                    )}
                                />

                                <Field label="Description"
                                    value={newProject.description}
                                    onChange={e => setNewProject(
                                        { ...newProject, description: e.target.value }
                                    )}
                                    rows={3}
                                />

                                <button onClick={async () => {
                                    if (!newProject.title)
                                        return;
                                    const r = await createProject(newProject);
                                    setProjects([...projects, r.data]);
                                    setNewProject({ title: "", description: "" });
                                }}
                                    style=
                                    {btn(BROWN)}
                                >
                                    ADD
                                </button>
                            </div>

                            {/* List */}
                            {projects.map(p => (
                                <div key={p.id} style={{
                                    border: "1px solid #e0d9d0",
                                    padding: 16,
                                    marginBottom: 12,
                                    background: "#fff"
                                }}>

                                    {editProject?.id === p.id ? (
                                        <>
                                            <Field
                                                label="Title" value={editProject.title}
                                                onChange={e => setEditProject(
                                                    { ...editProject, title: e.target.value }
                                                )}
                                            />

                                            <Field
                                                label="Description"
                                                value={editProject.description}
                                                onChange={e => setEditProject(
                                                    { ...editProject, description: e.target.value }
                                                )}
                                                rows={3}
                                            />

                                            <div style=
                                                {{
                                                    display: "flex",
                                                    gap: 8
                                                }}
                                            >
                                                <button onClick={async () => {
                                                    await updateProject(editProject.id, editProject);
                                                    setProjects(projects.map(x => x.id === editProject.id ? editProject : x));
                                                    setEditProject(null);
                                                }}
                                                    style=
                                                    {btn(BROWN)}
                                                >
                                                    SAVE
                                                </button>

                                                <button
                                                    onClick={() => setEditProject(null)}
                                                    style={
                                                        btn("#888")}
                                                >
                                                    CANCEL
                                                </button>

                                            </div>
                                        </>
                                    ) : (

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start"
                                        }}
                                        >
                                            <div>
                                                <p style={{
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    marginBottom: 4
                                                }}
                                                >
                                                    {p.title}
                                                </p>

                                                <p style={{
                                                    fontSize: "0.82rem",
                                                    color: "#666"
                                                }}
                                                >
                                                    {p.description}
                                                </p>
                                            </div>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: 8,
                                                    flexShrink: 0,
                                                    marginLeft: 16
                                                }}
                                            >

                                                <button
                                                    onClick={() => setEditProject(p)}
                                                    style=
                                                    {btn("#555")}
                                                >
                                                    EDIT
                                                </button>

                                                <button
                                                    onClick={async () => {
                                                        await deleteProject(p.id);
                                                        setProjects(projects.filter(x => x.id !== p.id));
                                                    }}
                                                    style=
                                                    {btn("#c0392b")}
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Section>
                    )}

                    {/* SKILLS */}
                    {tab === "skills" && (
                        <Section title="Skills">
                            <div style={{
                                background: CREAM,
                                padding: 20,
                                marginBottom: 24
                            }}>

                                <h3 style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 700, color: BROWN,
                                    marginBottom: 12,
                                    letterSpacing: 1
                                }}>
                                    ADD NEW SKILL
                                </h3>

                                <Field label="Skill Name"
                                    value={newSkill.name}
                                    onChange={e => setNewSkill(
                                        { ...newSkill, name: e.target.value }
                                    )}
                                />

                                <Field label="Percentage (0-100)"
                                    type="number"
                                    value={newSkill.percentage}
                                    onChange={e => setNewSkill(
                                        { ...newSkill, percentage: e.target.value }
                                    )}
                                />

                                <button onClick={async () => {
                                    if (!newSkill.name) return;
                                    const r = await createSkill(newSkill);
                                    setSkills([...skills, r.data]);
                                    setNewSkill({ name: "", percentage: "" });
                                }}
                                    style={btn(BROWN)}>
                                    ADD
                                </button>
                            </div>

                            <div style={
                                {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 10
                                }
                            }
                            >
                                {skills.map(s => (
                                    <div key={s.id} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "#fff",
                                        border: "1px solid #e0d9d0",
                                        padding: "8px 14px"
                                    }}>

                                        <span
                                            style={{
                                                fontSize: "0.82rem",
                                                fontWeight: 600,
                                                color: BROWN
                                            }}
                                        >
                                            {s.name}
                                        </span>

                                        <button onClick={async () => {
                                            await deleteSkill(s.id);
                                            setSkills(skills.filter(x => x.id !== s.id));
                                        }} style={{
                                            background: "none",
                                            border: "none",
                                            color: "#c0392b",
                                            cursor: "pointer",
                                            fontSize: "0.9rem",
                                            fontWeight: 700
                                        }}>
                                            ×</button>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* SERVICES */}
                    {tab === "services" && (
                        <Section title="Services">
                            <div style={{
                                background: CREAM,
                                padding: 20,
                                marginBottom: 24
                            }}>

                                <h3 style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                    color: BROWN,
                                    marginBottom: 12,
                                    letterSpacing: 1
                                }}>

                                    ADD NEW SERVICE
                                </h3>

                                <Field label="Service Name"
                                    value={newService.name}
                                    onChange={e => setNewService(
                                        { ...newService, name: e.target.value }
                                    )}
                                />

                                <Field label="Description"
                                    value={newService.description}
                                    onChange={e => setNewService(
                                        { ...newService, description: e.target.value }
                                    )}
                                    rows={3}
                                />

                                <button onClick={async () => {
                                    if (!newService.name) return;
                                    const r = await createService(newService);
                                    setServices([...services, r.data]);
                                    setNewService({ name: "", description: "" });
                                }}
                                    style={btn(BROWN)}>
                                    ADD
                                </button>
                            </div>
                            {services.map(s => (
                                <div key={s.id} style={{
                                    border: "1px solid #e0d9d0",
                                    padding: 16,
                                    marginBottom: 12,
                                    background: "#fff",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start"
                                }}>

                                    <div>
                                        <p style={{
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                            marginBottom: 4
                                        }}>
                                            {s.name}
                                        </p>

                                        <p style={{
                                            fontSize: "0.82rem",
                                            color: "#666"
                                        }}
                                        >
                                            {s.description}
                                        </p>
                                    </div>

                                    <button onClick={async () => {
                                        await deleteService(s.id);
                                        setServices(services.filter(x => x.id !== s.id));
                                    }} style={{
                                        ...btn("#c0392b"),
                                        marginLeft: 16,
                                        flexShrink: 0
                                    }}>
                                        DELETE
                                    </button>
                                </div>
                            ))}
                        </Section>
                    )}

                    {/* MESSAGES */}
                    {tab === "messages" && (
                        <Section title={`Contact Messages 
                        (${messages.length})`}>
                            {messages.length === 0 ? (
                                <p style={{
                                    color: "#888",
                                    fontSize: "0.88rem"
                                }}>
                                    No messages yet.
                                </p>
                            ) : messages.map(m => (
                                <div key={m.id} style={{
                                    border: "1px solid #e0d9d0",
                                    padding: 16,
                                    marginBottom: 12,
                                    background: "#fff"
                                }}
                                >

                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start"
                                    }}>

                                        <div>
                                            <p style={{
                                                fontWeight: 700,
                                                fontSize: "0.9rem",
                                                marginBottom: 4
                                            }}>
                                                {m.name}
                                                <span style={{
                                                    color: "#888",
                                                    fontWeight: 400
                                                }}>
                                                    — {m.email}
                                                </span>
                                            </p>

                                            <p style={{
                                                fontSize: "0.85rem",
                                                color: "#444",
                                                lineHeight: 1.6
                                            }}>{m.message}
                                            </p>

                                        </div>

                                        <button onClick={async () => {
                                            await deleteMessage(m.id);
                                            setMessages(messages.filter
                                                (x => x.id !== m.id));
                                        }}
                                            style={{
                                                ...btn("#c0392b"),
                                                marginLeft: 16,
                                                flexShrink: 0
                                            }}>
                                            DELETE
                                        </button>

                                    </div>

                                </div>
                            ))}
                        </Section>
                    )}

                </main>
            </div>
        </div>
    );
}
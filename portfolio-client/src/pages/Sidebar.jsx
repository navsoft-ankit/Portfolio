import "../styles/sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 className="logo">ANKIT</h1>

            <nav>
                <a className="active">HOME</a>
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>SKILLS</a>
                <a>CONTACT</a>
            </nav>

            <div className="socials">
                <span>GitHub</span>
                <span>LinkedIn</span>
            </div>
        </aside>
    );
}
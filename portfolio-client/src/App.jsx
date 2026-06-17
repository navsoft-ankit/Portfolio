import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/projects/:id" element={<ProjectDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/skills" element={<SkillsPage />} />

          <Route path="/admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
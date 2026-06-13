import axios from "axios";

const BASE = "http://localhost:5055/api";

export const api = axios.create({ baseURL: BASE });

// Auth
export const login = (data) => api.post("/auth/login", data);

// Profile
export const getProfile = () => api.get("/profile");
export const createProfile = (data) => api.post("/profile", data);
export const updateProfile = (id, data) => api.put(`/profile/${id}`, data);
export const deleteProfile = (id) => api.delete(`/profile/${id}`);

// Projects
export const getProjects = () => api.get("/projects");
export const createProject = (data) => api.post("/projects", data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Skills
export const getSkills = () => api.get("/skills");
export const createSkill = (data) => api.post("/skills", data);
export const updateSkill = (id, data) => api.put(`/skills/${id}`, data);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);

// Services
export const getServices = () => api.get("/services");
export const createService = (data) => api.post("/services", data);
export const updateService = (id, data) => api.put(`/services/${id}`, data);
export const deleteService = (id) => api.delete(`/services/${id}`);

// Contact
export const getMessages = () => api.get("/contact");
export const sendMessage = (data) => api.post("/contact", data);
export const deleteMessage = (id) => api.delete(`/contact/${id}`);

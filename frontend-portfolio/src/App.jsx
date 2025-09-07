import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AboutProvider } from "./contexts/AboutContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

// Import des pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, authLoading, authError } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !authLoading && location.pathname === '/admin') {
      navigate('/login', {
        state: { error: authError || 'Veuillez vous connecter' }
      });
    }
  }, [isAuthenticated, authLoading, authError, navigate, location.pathname]);

  return (
    <ProjectsProvider>
      <AboutProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </AboutProvider>
    </ProjectsProvider>
  );
}

export default App;

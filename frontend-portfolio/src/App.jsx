import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Loader from "./components/ui/Loader";
import { useSecretNavigation } from "./hooks/useSecretNavigation";

// Import des pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

// Routes protégées par l'authentification
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuth();
  if (authLoading) {
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  }
  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ error: 'Veuillez vous connecter' }} />;
  }
  return children;
};

function App() {

  useSecretNavigation();

  return (
    <AuthProvider>
      <ProjectsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </ProjectsProvider>
    </AuthProvider>
  );
}

export default App;
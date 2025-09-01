import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AboutProvider } from "./contexts/AboutContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";

// Import des pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ProjectsProvider>
      <AboutProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </AboutProvider>
    </ProjectsProvider>
  );
}

export default App;

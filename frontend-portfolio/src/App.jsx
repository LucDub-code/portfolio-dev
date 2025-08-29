import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AboutProvider } from "./components/context/AboutContext";

// Import des pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
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
  );
}

export default App;

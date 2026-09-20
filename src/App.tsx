import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetail from "@/pages/ProjectDetail";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from "@/components/CustomCursor";

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

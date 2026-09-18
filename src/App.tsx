import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useContent } from "./i18n";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { HomePage } from "./pages/HomePage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { WorkPage } from "./pages/WorkPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const { home } = useContent();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <SiteHeader disclaimer={home.disclaimer} />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/case/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 1) VIU tokens (CSS variables + themes) — defines --color-*, --space-*, --font-*…
import "@viu/design-tokens/css";
// 2) VIU component styles.
import "@viu/ui/styles";
// 3) Portfolio layout on top of the system.
import "./styles/app.css";

import { App } from "./App";
import { readStoredTheme, applyTheme } from "./theme";

applyTheme(readStoredTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

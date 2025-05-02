import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/home/Home.tsx";
import GlobalContext from "./components/context/GlobalContext.tsx";
import { StyleProvider } from "@ant-design/cssinjs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <StyleProvider layer>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </StyleProvider>
      </GlobalContext>
    </BrowserRouter>
  </StrictMode>
);

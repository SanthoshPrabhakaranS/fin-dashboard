import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/home/Home.tsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);

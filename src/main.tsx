import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

// Import components
import Root from "./routes/__root";
import Index from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Root />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

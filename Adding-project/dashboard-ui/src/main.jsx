import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <App />
      </UsersProvider>
    </BrowserRouter>
  </StrictMode>
);

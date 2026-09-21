import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth.jsx";
import Landing from "./components/Landing.jsx";
import Login from "./components/Login.jsx";
import PaginaApp from "./components/PaginaApp.jsx";
import RotaPrivada from "./components/RotaPrivada.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rota pública: landing page da Sprint 3 de Front-End Design */}
          <Route path="/" element={<Landing />} />
          <Route path="/entrar" element={<Login />} />

          {/* Rota privada: app de anotações da Sprint 3 de Web Development */}
          <Route
            path="/app"
            element={
              <RotaPrivada>
                <PaginaApp />
              </RotaPrivada>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

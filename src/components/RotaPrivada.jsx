import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

// Protege rotas que exigem login: se não estiver autenticado,
// redireciona para a página pública de entrada.
export default function RotaPrivada({ children }) {
  const { autenticado } = useAuth();
  return autenticado ? children : <Navigate to="/entrar" replace />;
}

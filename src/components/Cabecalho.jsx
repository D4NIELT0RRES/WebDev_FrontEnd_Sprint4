import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

export default function Cabecalho() {
  const { autenticado, sair } = useAuth();

  return (
    <header className="border-b border-border/60 bg-background/95 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Study<span className="text-primary">Cam</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
            Site
          </Link>
          {autenticado ? (
            <button
              onClick={sair}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Sair
            </button>
          ) : (
            <Link
              to="/entrar"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

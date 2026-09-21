import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "./Cabecalho.jsx";
import Rodape from "./Rodape.jsx";
import useAuth from "../hooks/useAuth.jsx";

// Rota pública "/entrar": porta de acesso ao painel privado do StudyCam.
export default function Login() {
  const { entrar } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    document.title = "StudyCam — Entrar";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const valido = entrar(email, senha);
    if (valido) {
      navigate("/app");
    } else {
      setErro(true);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Cabecalho />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-xl border border-border bg-card p-7 sm:p-8"
        >
          <h1 className="text-xl font-bold">Entrar no StudyCam</h1>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Use o usuário de teste abaixo para acessar o painel de anotações.
          </p>

          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />

          <label htmlFor="senha" className="mb-2 block text-sm font-medium">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />

          {erro && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              E-mail ou senha inválidos.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </button>

          <p className="mt-4 text-center text-xs text-muted-foreground/70">
            Usuário de teste: aluno@studycam.com · Senha: studycam123
          </p>
        </form>
      </main>
      <Rodape />
    </div>
  );
}

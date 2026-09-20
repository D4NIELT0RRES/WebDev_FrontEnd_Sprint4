import { createContext, useContext, useEffect, useState } from "react";

const CHAVE_AUTH = "studycam-auth";

// Usuário de teste do projeto (não há backend, então a autenticação
// é simulada apenas para demonstrar rotas públicas e privadas).
const USUARIO_TESTE = { email: "aluno@studycam.com", senha: "studycam123" };

const AuthContext = createContext(null);

// Provider: guarda o estado de autenticação em um Context (hook nativo
// useContext) para que Cabecalho, Login e RotaPrivada enxerguem o mesmo
// valor, mesmo estando em componentes diferentes.
export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(
    () => localStorage.getItem(CHAVE_AUTH) === "true"
  );

  useEffect(() => {
    if (autenticado) {
      localStorage.setItem(CHAVE_AUTH, "true");
    } else {
      localStorage.removeItem(CHAVE_AUTH);
    }
  }, [autenticado]);

  function entrar(email, senha) {
    const valido = email === USUARIO_TESTE.email && senha === USUARIO_TESTE.senha;
    if (valido) setAutenticado(true);
    return valido;
  }

  function sair() {
    setAutenticado(false);
  }

  return (
    <AuthContext.Provider value={{ autenticado, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado que expõe o contexto de autenticação.
export default function useAuth() {
  return useContext(AuthContext);
}

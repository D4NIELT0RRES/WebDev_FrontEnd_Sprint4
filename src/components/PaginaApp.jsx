import { useEffect, useState } from "react";
import Cabecalho from "./Cabecalho.jsx";
import Painel from "./Painel.jsx";
import Rodape from "./Rodape.jsx";
import useAnotacoes from "../hooks/useAnotacoes.js";

// Rota privada "/app": o organizador de anotações que já existia na
// Sprint 3 de Web Development, agora atrás do login.
export default function PaginaApp() {
  const { anotacoes, capturarAnotacao, excluirAnotacao } = useAnotacoes();
  const [busca, setBusca] = useState("");

  useEffect(() => {
    document.title = "StudyCam — Painel";
  }, []);

  function handleCapturar() {
    const titulo = prompt("Nome da anotação:");
    if (!titulo) return;

    const categoria = prompt("Matéria/categoria:", "Matemática") || "Geral";
    capturarAnotacao(titulo, categoria);
  }

  const anotacoesFiltradas = anotacoes.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cabecalho />
      <Painel
        anotacoes={anotacoes}
        anotacoesFiltradas={anotacoesFiltradas}
        busca={busca}
        onBuscaChange={setBusca}
        onCapturar={handleCapturar}
        onExcluir={excluirAnotacao}
      />
      <Rodape totalAnotacoes={anotacoes.length} />
    </div>
  );
}

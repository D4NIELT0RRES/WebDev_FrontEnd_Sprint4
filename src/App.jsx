import { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Painel from "./components/Painel.jsx";
import Rodape from "./components/Rodape.jsx";

const CHAVE_STORAGE = "studycam-anotacoes";

// Cores possíveis para os cartões de anotação, sorteadas com Math.random()
const CORES = ["#f4a261", "#2a9d8f", "#e76f51", "#e9c46a", "#8e7dbe"];

export default function App() {
  // Estado "pai": tudo que os componentes filhos precisam recebe daqui via props
  const [anotacoes, setAnotacoes] = useState(() => {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    return salvo ? JSON.parse(salvo) : [];
  });
  const [busca, setBusca] = useState("");

  // Sempre que a lista de anotações mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(anotacoes));
  }, [anotacoes]);

  function capturarAnotacao() {
    const titulo = prompt("Nome da anotação:");
    if (!titulo) return;

    // Pergunta a matéria/categoria, com "Matemática" como sugestão inicial
    const categoria = prompt("Matéria/categoria:", "Matemática") || "Geral";

    const novaAnotacao = {
      // id único gerado com Math.random()
      id: Math.random().toString(36).slice(2, 9),
      titulo,
      categoria,
      // cor sorteada aleatoriamente entre as opções (randomização)
      cor: CORES[Math.floor(Math.random() * CORES.length)],
      criadoEm: Date.now(),
    };

    setAnotacoes((atual) => [...atual, novaAnotacao]);
  }

  function excluirAnotacao(id) {
    setAnotacoes((atual) => atual.filter((item) => item.id !== id));
  }

  const anotacoesFiltradas = anotacoes.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Cabecalho />
      <Painel
        anotacoes={anotacoes}
        anotacoesFiltradas={anotacoesFiltradas}
        busca={busca}
        onBuscaChange={setBusca}
        onCapturar={capturarAnotacao}
        onExcluir={excluirAnotacao}
      />
      <Rodape totalAnotacoes={anotacoes.length} />
    </>
  );
}

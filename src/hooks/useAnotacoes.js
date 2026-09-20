import { useEffect, useState } from "react";

const CHAVE_STORAGE = "studycam-anotacoes";

// Cores possíveis para os cartões de anotação, sorteadas com Math.random()
const CORES = ["#f4a261", "#2a9d8f", "#e76f51", "#e9c46a", "#8e7dbe"];

// Hook customizado: concentra toda a lógica de dados das anotações
// (estado, persistência em localStorage, criação e exclusão), separada
// dos componentes visuais que só chamam essas funções.
export default function useAnotacoes() {
  const [anotacoes, setAnotacoes] = useState(() => {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(anotacoes));
  }, [anotacoes]);

  function capturarAnotacao(titulo, categoria) {
    if (!titulo) return;

    const novaAnotacao = {
      // id único gerado com Math.random()
      id: Math.random().toString(36).slice(2, 9),
      titulo,
      categoria: categoria || "Geral",
      // cor sorteada aleatoriamente entre as opções (randomização)
      cor: CORES[Math.floor(Math.random() * CORES.length)],
      criadoEm: Date.now(),
    };

    setAnotacoes((atual) => [...atual, novaAnotacao]);
  }

  function excluirAnotacao(id) {
    setAnotacoes((atual) => atual.filter((item) => item.id !== id));
  }

  return { anotacoes, capturarAnotacao, excluirAnotacao };
}

import { useEffect, useState } from "react";

// API pública de terceiros (Advice Slip), sem necessidade de chave,
// usada para trazer uma dica/frase diferente a cada visita ao painel.
const API_URL = "https://api.adviceslip.com/advice";

export default function useDicaDoDia() {
  const [dica, setDica] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  function buscarDica() {
    setCarregando(true);
    setErro(false);

    fetch(`${API_URL}?_=${Date.now()}`)
      .then((resposta) => resposta.json())
      .then((dados) => setDica(dados.slip.advice))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }

  useEffect(() => {
    buscarDica();
  }, []);

  return { dica, carregando, erro, buscarDica };
}

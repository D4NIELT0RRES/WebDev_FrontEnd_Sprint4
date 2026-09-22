import { useEffect, useState } from "react";

// API mockada: um JSON servido pelo próprio projeto (public/dicas.json),
// simulando uma API real de dicas de estudo em português.
const API_URL = "/dicas.json";

export default function useDicaDoDia() {
  const [dica, setDica] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  function buscarDica() {
    setCarregando(true);
    setErro(false);

    fetch(API_URL)
      .then((resposta) => resposta.json())
      .then((dicas) => {
        // sorteia uma dica diferente a cada chamada
        const sorteada = dicas[Math.floor(Math.random() * dicas.length)];
        setDica(sorteada.texto);
      })
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }

  useEffect(() => {
    buscarDica();
  }, []);

  return { dica, carregando, erro, buscarDica };
}

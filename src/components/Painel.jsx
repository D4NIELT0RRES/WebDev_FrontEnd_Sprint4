import Estatisticas from "./Estatisticas.jsx";
import BarraBusca from "./BarraBusca.jsx";
import ListaAnotacoes from "./ListaAnotacoes.jsx";

export default function Painel({
  anotacoes,
  anotacoesFiltradas,
  busca,
  onBuscaChange,
  onCapturar,
  onExcluir,
}) {
  return (
    <main id="app">
      <section id="home">
        <h2>Dashboard</h2>

        <Estatisticas anotacoes={anotacoes} />

        <BarraBusca valor={busca} onChange={onBuscaChange} />

        <button id="btnCapturar" onClick={onCapturar}>
          + Capturar Anotação
        </button>

        <ListaAnotacoes anotacoes={anotacoesFiltradas} onExcluir={onExcluir} />
      </section>
    </main>
  );
}

import Estatisticas from "./Estatisticas.jsx";
import BarraBusca from "./BarraBusca.jsx";
import ListaAnotacoes from "./ListaAnotacoes.jsx";
import DicaDoDia from "./DicaDoDia.jsx";

export default function Painel({
  anotacoes,
  anotacoesFiltradas,
  busca,
  onBuscaChange,
  onCapturar,
  onExcluir,
}) {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-8 pb-12 sm:px-6">
      <section className="rounded-xl border border-border bg-card p-5 sm:p-7">
        <h2 className="mb-5 text-xs font-bold tracking-[0.08em] text-muted-foreground uppercase">
          Dashboard
        </h2>

        <DicaDoDia />

        <Estatisticas anotacoes={anotacoes} />

        <BarraBusca valor={busca} onChange={onBuscaChange} />

        <button
          onClick={onCapturar}
          className="mb-6 w-full rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          + Capturar Anotação
        </button>

        <ListaAnotacoes anotacoes={anotacoesFiltradas} onExcluir={onExcluir} />
      </section>
    </main>
  );
}

import useDicaDoDia from "../hooks/useDicaDoDia.js";

// Card que consome uma API pública de terceiros (Advice Slip) para
// trazer uma dica diferente a cada vez que o painel é aberto.
export default function DicaDoDia() {
  const { dica, carregando, erro, buscarDica } = useDicaDoDia();

  return (
    <div className="mb-6 rounded-lg border border-primary/40 bg-accent p-4">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary">DICA DO DIA</p>
      {carregando && (
        <p className="mt-2 text-sm text-foreground/80">Buscando uma dica...</p>
      )}
      {!carregando && erro && (
        <p className="mt-2 text-sm text-foreground/80">
          Não foi possível buscar uma dica agora. Tente novamente.
        </p>
      )}
      {!carregando && !erro && <p className="mt-2 text-sm text-foreground/90">{dica}</p>}
      <button
        onClick={buscarDica}
        className="mt-3 text-xs font-semibold text-primary hover:underline"
      >
        Nova dica
      </button>
    </div>
  );
}

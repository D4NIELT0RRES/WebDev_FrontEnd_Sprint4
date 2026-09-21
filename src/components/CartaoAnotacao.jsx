export default function CartaoAnotacao({ item, onExcluir }) {
  return (
    <div className="animacao-entrada flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 text-left transition-shadow hover:shadow-lg">
      <div>
        <h3 className="mb-1.5 text-sm font-semibold text-foreground">{item.titulo}</h3>
        {/* Cor sorteada com Math.random() usada como tom da badge da categoria */}
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: `${item.cor}26`, color: item.cor }}
        >
          {item.categoria}
        </span>
      </div>
      <button
        onClick={() => onExcluir(item.id)}
        className="rounded-lg border border-destructive/40 bg-transparent px-3.5 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
      >
        Excluir
      </button>
    </div>
  );
}

import CartaoAnotacao from "./CartaoAnotacao.jsx";

export default function ListaAnotacoes({ anotacoes, onExcluir }) {
  if (anotacoes.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
        Nenhuma anotação por aqui ainda. Clique em "Capturar Anotação" para começar.
      </p>
    );
  }

  return (
    <div className="grid gap-2.5">
      {anotacoes.map((item) => (
        <CartaoAnotacao key={item.id} item={item} onExcluir={onExcluir} />
      ))}
    </div>
  );
}

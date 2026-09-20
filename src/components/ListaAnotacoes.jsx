import CartaoAnotacao from "./CartaoAnotacao.jsx";

export default function ListaAnotacoes({ anotacoes, onExcluir }) {
  if (anotacoes.length === 0) {
    return (
      <p className="listaVazia">
        Nenhuma anotação por aqui ainda. Clique em "Capturar Anotação" para começar.
      </p>
    );
  }

  return (
    <div id="listaAnotacoes">
      {anotacoes.map((item) => (
        <CartaoAnotacao key={item.id} item={item} onExcluir={onExcluir} />
      ))}
    </div>
  );
}

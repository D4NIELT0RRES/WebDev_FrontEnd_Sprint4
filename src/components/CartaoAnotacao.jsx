export default function CartaoAnotacao({ item, onExcluir }) {
  return (
    <div className="cartao">
      <div>
        <h3>{item.titulo}</h3>
        {/* Cor sorteada com Math.random() usada como tom da badge da categoria */}
        <span
          className="badge"
          style={{ backgroundColor: `${item.cor}26`, color: item.cor }}
        >
          {item.categoria}
        </span>
      </div>
      <button className="btnExcluir" onClick={() => onExcluir(item.id)}>
        Excluir
      </button>
    </div>
  );
}

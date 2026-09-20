export default function Estatisticas({ anotacoes }) {
  const totalFotos = anotacoes.length;

  const categorias = anotacoes.map((item) => item.categoria);
  const totalMaterias = new Set(categorias).size;

  // Descobre a categoria mais usada e calcula o percentual dela (arredondado)
  let categoriaTop = null;
  let percentualTop = 0;

  if (totalFotos > 0) {
    const contagem = {};
    categorias.forEach((cat) => {
      contagem[cat] = (contagem[cat] || 0) + 1;
    });

    categoriaTop = Object.keys(contagem).reduce((a, b) =>
      contagem[a] >= contagem[b] ? a : b
    );

    // Math.round para arredondar o percentual de uso da categoria
    percentualTop = Math.round((contagem[categoriaTop] / totalFotos) * 100);
  }

  return (
    <div className="estatisticas">
      <div>
        Fotos: <span id="totalFotos">{totalFotos}</span>
      </div>
      <div>
        Matérias: <span id="totalMaterias">{totalMaterias}</span>
      </div>
      {categoriaTop && (
        <div>
          Mais usada: {categoriaTop} ({percentualTop}%)
        </div>
      )}
    </div>
  );
}

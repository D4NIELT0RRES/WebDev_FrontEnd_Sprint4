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
    <div className="mb-6 flex flex-wrap gap-2.5 sm:gap-3">
      <div className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
        Fotos: <span className="font-bold text-foreground">{totalFotos}</span>
      </div>
      <div className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
        Matérias: <span className="font-bold text-foreground">{totalMaterias}</span>
      </div>
      {categoriaTop && (
        <div className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
          Mais usada:{" "}
          <span className="font-bold text-foreground">
            {categoriaTop} ({percentualTop}%)
          </span>
        </div>
      )}
    </div>
  );
}

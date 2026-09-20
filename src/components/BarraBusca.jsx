export default function BarraBusca({ valor, onChange }) {
  return (
    <input
      type="text"
      id="busca"
      placeholder="🔍 Buscar por título..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

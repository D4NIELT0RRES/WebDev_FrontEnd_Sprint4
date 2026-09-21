export default function BarraBusca({ valor, onChange }) {
  return (
    <input
      type="text"
      placeholder="🔍 Buscar por título..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
    />
  );
}

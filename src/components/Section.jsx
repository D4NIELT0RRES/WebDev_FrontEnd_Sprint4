// Componente reutilizado por todas as seções da landing page,
// evitando repetir a mesma estrutura de título/eyebrow em cada uma.
export default function Section({ id, eyebrow, title, lede, children }) {
  return (
    <section id={id} className="border-t border-border/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold [text-wrap:balance] tracking-tight md:text-5xl">
          {title}
        </h2>
        {lede ? <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">{lede}</p> : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

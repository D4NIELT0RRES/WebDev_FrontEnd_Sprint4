export default function Rodape({ totalAnotacoes }) {
  return (
    <footer className="border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground">
      <p>
        StudyCam &copy; {new Date().getFullYear()} — Equipe SafeTech
        {typeof totalAnotacoes === "number"
          ? ` · ${totalAnotacoes} anotação(ões) salva(s) neste dispositivo`
          : ""}
      </p>
    </footer>
  );
}

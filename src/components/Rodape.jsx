export default function Rodape({ totalAnotacoes }) {
  return (
    <footer>
      <p>StudyCam &copy; {new Date().getFullYear()} — {totalAnotacoes} anotação(ões) salva(s) neste dispositivo</p>
    </footer>
  );
}

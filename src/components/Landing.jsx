import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "./Section.jsx";

// Landing page criada na Sprint 3 de Front-End Design, agora integrada
// ao React do projeto de Web Development como a rota pública "/".

const NAV = [
  { href: "#solucao", label: "A Solução" },
  { href: "#publico", label: "Público-Alvo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Nossa Equipe" },
  { href: "#contato", label: "Contato" },
];

const FEATURES = [
  {
    tag: "FOCO",
    title: "Detecção de foco & distração",
    text: "Análise por visão computacional identifica quando a atenção cai e avisa de forma discreta, sem interromper o raciocínio.",
  },
  {
    tag: "OCR",
    title: "Registro automático de conteúdo",
    text: "Aponte para a lousa ou o slide: o Study Cam corrige perspectiva, extrai o texto e organiza por matéria e data.",
  },
  {
    tag: "IA",
    title: "Resumos automáticos",
    text: "O conteúdo capturado vira resumo estruturado, pronto para revisão, gerado no momento em que a aula termina.",
  },
  {
    tag: "DADOS",
    title: "Dashboard de desempenho",
    text: "Relatórios semanais mostram padrões de foco, cansaço visual e progresso real, não só horas estudadas.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Aponte & inicie",
    text: "Abra o modo Study no app e posicione a câmera para a lousa, o slide ou seu ambiente de estudo.",
  },
  {
    n: "02",
    title: "A câmera observa",
    text: "Sinais de atenção, postura e conteúdo visível são processados localmente e nada fica gravado em vídeo contínuo.",
  },
  {
    n: "03",
    title: "Você recebe o resultado",
    text: "Resumo do conteúdo, alerta de distração e métricas de foco chegam organizados no dashboard.",
  },
];

const TEAM = [
  { name: "Pedro Passos Corsini", rm: "RM 573493 - Responsável pela aba da solução." },
  { name: "Daniel Gomes Torres", rm: "RM 573436 - Responsável pela organização do público-alvo." },
  { name: "Arthur Canzian Freitas Teodoro", rm: "RM 569828 - Responsável pela galeria." },
  { name: "Pedro Thyago Araújo Santos", rm: "RM 570939 - Responsável pela apresentação da equipe." },
  { name: "Rodrigo Cocka Poccinelli", rm: "RM 573364 - Responsável pela área de contato." },
];

export default function Landing() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Study Cam - A câmera inteligente para o estudante full-time";
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
              ◎
            </span>
            <span className="text-lg font-bold tracking-tight">
              Study<span className="text-primary">Cam</span>
            </span>
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            to="/entrar"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Acessar o App
          </Link>
        </div>
        <nav
          aria-label="Navegação principal (mobile)"
          className="grid grid-cols-5 border-t border-border/60 lg:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="grid place-items-center px-1 py-2.5 text-center text-[11px] leading-tight font-medium text-muted-foreground transition-colors hover:text-primary sm:text-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.88 0.15 96), oklch(0.78 0.16 78))",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h1 className="mt-6 text-5xl leading-[0.95] font-black tracking-tight md:text-7xl">
                Capture.
                <br />
                Organize.
                <br />
                <span className="text-primary">Estude mais.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Study Cam é a câmera com visão computacional que observa suas sessões de estudo,
                organiza o que a lousa e os slides mostram e devolve dados reais sobre a sua
                atenção sem gravar tudo, sem julgar, só ajudando.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#solucao"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Ver como funciona
                </a>
                <Link
                  to="/entrar"
                  className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Acessar o App
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "128", l: "FOTOS", s: "+12 esta semana" },
                  { v: "6", l: "MATÉRIAS", s: "Todas ativas" },
                  { v: "94%", l: "PRECISÃO OCR", s: "Alta qualidade" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-2xl font-extrabold text-primary md:text-3xl">{s.v}</p>
                    <p className="mt-2 font-mono text-[10px] tracking-widest text-muted-foreground">
                      {s.l}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground/70">{s.s}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Derivadas e Integrais</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Regra da cadeia, integrais por partes e substituição trigonométrica. Revisão
                  para a prova.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 font-mono text-[10px] tracking-wider">
                  {["MATEMÁTICA", "CÁLCULO", "FUNÇÕES"].map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-1 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-primary/40 bg-accent p-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary">DICA DA IA</p>
                <p className="mt-2 text-sm text-foreground/90">
                  Você tem <strong className="text-primary">3 anotações de Matemática</strong> sem
                  revisão esta semana. Hora de revisar!
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-16 max-w-6xl font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70">
            FRAME 001 / DESAFIO ENG. SOFTWARE 2026 | PARCERIA JOVI × FIAP
          </p>
        </section>

        {/* SOLUÇÃO */}
        <Section
          id="solucao"
          eyebrow="01 - A SOLUÇÃO"
          title={
            <>
              O problema não é falta de câmera.
              <br className="hidden md:block" /> É câmera que não entende o momento.
            </>
          }
          lede="Estudantes full-time vivem entre aula, trabalho em grupo e vida social e a câmera do celular, hoje, só registra imagem. Ela não sabe se você está prestando atenção, não organiza o que foi fotografado e não te devolve nada além do arquivo solto na galeria."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <article
                key={f.tag}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <p className="font-mono text-[10px] tracking-[0.25em] text-primary">{f.tag}</p>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface-raised p-8">
            <h3 className="text-xl font-bold">Como funciona, na prática</h3>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="border-t border-primary/40 pt-5">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                  <h4 className="mt-2 font-bold">{s.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* PÚBLICO */}
        <Section id="publico" eyebrow="02 - PÚBLICO-ALVO" title="Feito para quem estuda em movimento">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <article className="rounded-2xl border border-primary/50 bg-card p-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-primary">PERFIL PRINCIPAL</p>
              <h3 className="mt-4 text-2xl font-extrabold">Estudante universitário full-time</h3>
              <p className="mt-4 text-muted-foreground">
                Concilia estudo, trabalho, estágio e vida social ao mesmo tempo. Está sempre em
                movimento, buscando estabilidade e progresso, e usa o celular como ferramenta de
                produtividade, não só de registro.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Assiste aulas e precisa absorver conteúdo rápido",
                  "Divide tempo entre estudo, trabalho e interações sociais",
                  "Quer resultado mensurável, não só mais horas de estudo",
                ].map((li) => (
                  <li key={li} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{li}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="grid gap-4">
              {[
                {
                  t: "Vestibulandos",
                  d: "Rotina intensa de revisão, alto volume de conteúdo para organizar em pouco tempo.",
                },
                {
                  t: "Cursos técnicos & livres",
                  d: "Aulas práticas e teóricas alternadas, com necessidade de registro rápido e confiável.",
                },
                {
                  t: "Profissionais em requalificação",
                  d: "Estudam fora do horário de trabalho e precisam otimizar cada sessão de foco.",
                },
              ].map((p) => (
                <article key={p.t} className="rounded-xl border border-border bg-card p-6">
                  <h4 className="font-bold">{p.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* GALERIA */}
        <Section
          id="galeria"
          eyebrow="03 - GALERIA"
          title="A interface, em quadros"
          lede="Mockups conceituais das principais telas do app Study Cam."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <figure className="rounded-xl border border-border bg-card p-5">
              <div className="grid h-44 place-items-center rounded-lg bg-surface-raised">
                <div className="grid size-24 place-items-center rounded-full border-4 border-primary text-xl font-extrabold text-primary">
                  94%
                </div>
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Dashboard de foco para uma visão geral da sessão
              </figcaption>
            </figure>

            <figure className="rounded-xl border border-border bg-card p-5">
              <div className="relative h-44 overflow-hidden rounded-lg border border-primary/30 bg-surface-raised">
                <span className="absolute inset-x-0 top-0 h-0.5 animate-pulse bg-primary/80" />
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Scanner OCR para a captura de lousa e slides
              </figcaption>
            </figure>

            <figure className="rounded-xl border border-border bg-card p-5">
              <div className="grid h-44 place-items-center rounded-lg bg-surface-raised p-4">
                <span className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                  Foco caindo - 12 min
                </span>
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Alerta suave de distração em tempo real
              </figcaption>
            </figure>

            <figure className="rounded-xl border border-border bg-card p-5">
              <div className="flex h-44 items-end gap-2 rounded-lg bg-surface-raised p-4">
                {[40, 65, 52, 80, 70].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${h}%` }} />
                ))}
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Relatório semanal de desempenho
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* EQUIPE */}
        <Section
          id="equipe"
          eyebrow="04 - NOSSA EQUIPE"
          title="SafeTech"
          lede="Grupo responsável pelo desenvolvimento do Study Cam no Challenge JOVI × FIAP 2026."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article
                key={m.rm}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <h3 className="font-bold">{m.name}</h3>
                <p className="mt-1 font-mono text-xs tracking-widest text-primary">{m.rm}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* CONTATO */}
        <Section
          id="contato"
          eyebrow="05 - CONTATO"
          title="Vamos conversar sobre o projeto"
          lede="Dúvidas sobre a solução, o desafio ou a equipe? Fale com a gente."
        >
          <div className="grid gap-10 md:grid-cols-2">
            <dl className="space-y-6">
              {[
                { t: "E-mail", d: "contato.safetech.studycam@fiap.com.br" },
                { t: "Projeto", d: "Challenge Engenharia de Software 2026 | JOVI × FIAP" },
                { t: "Equipe", d: "SafeTech" },
              ].map((c) => (
                <div key={c.t} className="border-b border-border pb-4">
                  <dt className="font-mono text-[10px] tracking-[0.25em] text-primary">
                    {c.t.toUpperCase()}
                  </dt>
                  <dd className="mt-2 text-foreground/90">{c.d}</dd>
                </div>
              ))}
            </dl>

            <form
              className="rounded-2xl border border-border bg-card p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { id: "name", label: "Nome", type: "text" },
                { id: "email", label: "E-mail", type: "email" },
              ].map((f) => (
                <div key={f.id} className="mb-4">
                  <label htmlFor={f.id} className="mb-2 block text-sm font-medium">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              ))}
              <div className="mb-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensagem
              </button>
              <p className="mt-3 text-center text-sm text-primary" role="status" aria-live="polite">
                {sent ? "Mensagem registrada. Obrigado pelo contato!" : ""}
              </p>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="text-lg font-bold tracking-tight">
            Study<span className="text-primary">Cam</span>
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            Desenvolvido pela equipe SafeTech | Challenge Engenharia de Software 2026, parceria
            JOVI × FIAP.
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground/70">
            "Estudar não é acumular horas, é transformar atenção em resultado."
          </p>
        </div>
      </footer>
    </div>
  );
}

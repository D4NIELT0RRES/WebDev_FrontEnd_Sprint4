# Sprint 4 — StudyCam (Front-End Design + Web Development)

Entrega conjunta das disciplinas de **Front-End Design** e **Web Development**, evoluindo o
mesmo projeto StudyCam entregue na Sprint 3 pelas duas disciplinas:

- A landing page criada na Sprint 3 de **Front-End Design** (React + Tailwind) agora é a rota
  pública `/` do projeto.
- O app de anotações criado na Sprint 3 de **Web Development** (React + `localStorage`) agora é
  a rota privada `/app`, acessível após login em `/entrar`.

## Tecnologias utilizadas

- React 18
- React Router DOM (rotas públicas e privadas)
- Vite (servidor de desenvolvimento e empacotador)
- Tailwind CSS 4
- Context API + hooks customizados (`useAnotacoes`, `useAuth`, `useDicaDoDia`)
- localStorage (armazenamento das anotações e da sessão de login)
- Consumo da API pública [Advice Slip API](https://api.adviceslip.com) para a "Dica do dia"
- JavaScript (módulos ES) / HTML5 / CSS3

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Depois abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Servidores / Back-end

Não há back-end neste projeto. Os dados das anotações e da sessão de login são salvos no
`localStorage` do navegador, e a "Dica do dia" é obtida diretamente de uma API pública de
terceiros pelo navegador.

## Usuários e senhas para teste

A rota `/app` é privada. Para acessá-la, faça login em `/entrar` com o usuário de teste:

- **E-mail:** `aluno@studycam.com`
- **Senha:** `studycam123`

## Uso de Inteligência Artificial no projeto

A IA (Claude Code, da Anthropic) foi utilizada como apoio durante a integração das duas entregas
da Sprint 3 em um único projeto: na configuração do Tailwind CSS junto ao Vite, na criação das
rotas públicas e privadas com React Router, na extração da lógica de anotações e de autenticação
para hooks customizados (separando a lógica da parte visual) e na adaptação da landing page
(originalmente escrita com TanStack Start) para um componente React simples compatível com o
restante do projeto.

## Estrutura de rotas

```
/          → Landing page (pública) — Sprint 3 de Front-End Design
/entrar    → Login (pública)
/app       → Painel de anotações (privada, exige login) — Sprint 3 de Web Development
```

## Estrutura de componentes

```
App (rotas + AuthProvider)
├─ Landing (rota pública "/")
│  └─ Section (reutilizado em cada bloco da landing)
├─ Login (rota pública "/entrar")
│  ├─ Cabecalho
│  └─ Rodape
└─ PaginaApp (rota privada "/app", protegida por RotaPrivada)
   ├─ Cabecalho
   ├─ Painel
   │  ├─ DicaDoDia (consome API pública)
   │  ├─ Estatisticas
   │  ├─ BarraBusca
   │  └─ ListaAnotacoes
   │     └─ CartaoAnotacao (um para cada anotação)
   └─ Rodape
```

## Link do repositório

https://github.com/D4NIELT0RRES/Sprint3-WebDev

## Link do Deploy na Vercel

https://sprint3-webdev-six.vercel.app

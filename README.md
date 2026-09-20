# Sprint3-WebDev — StudyCam

Migração do protótipo criado na Sprint 2 (HTML/CSS/JS puro) para **React**, utilizando componentes funcionais organizados em estrutura pai → filho, com persistência de dados via `localStorage` e uso de operações matemáticas (`Math`) para geração de IDs, sorteio de cores e cálculo/arredondamento de estatísticas.

## Tecnologias utilizadas

- React 18
- Vite (servidor de desenvolvimento e empacotador)
- JavaScript (módulos ES)
- HTML5 / CSS3
- localStorage (armazenamento no navegador)

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

## Usuários e senhas para teste

Não há autenticação/login neste projeto. Não é necessário nenhum usuário ou senha para testar.

## Uso de Inteligência Artificial no projeto

A IA (Claude Code, da Anthropic) foi utilizada como apoio pontual durante a migração do protótipo da Sprint 2 para React, principalmente para tirar dúvidas sobre a sintaxe de hooks (`useState`/`useEffect`), sobre como persistir dados no `localStorage` e sobre o uso de funções `Math` (`random`, `round`, `floor`) para gerar IDs, sortear cores e calcular percentuais.

## Estrutura de componentes

```
App (pai)
├─ Cabecalho
├─ Painel
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

# Changelog

Todas as mudanças notáveis deste projeto serão documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
e segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [1.0.0] - 2025-05-01

### Adicionado

- Primeira versão pública do pacote `@gabiliz/style-guide`.
- Configuração base com:
  - React 19, TypeScript 5, Vite 6, Tailwind CSS 4, Storybook 8.
  - Integração com `tailwind-variants` e `@radix-ui/react-slot`.
- Componente base `Button` com suporte a variantes.
- Exportação de componentes via `src/index.ts`.
- Geração de tipos `.d.ts` e build em formato ESM e CJS.

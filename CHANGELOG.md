# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Não Lançado]s

### Em Desenvolvimento
- Melhorias de acessibilidade
- Otimizações de performance
- Testes automatizados

## [1.0.0] - 2025-11-08

### 🎉 Lançamento Inicial

#### ✨ Adicionado
- Site institucional completo com Next.js 16 (App Router)
- Design minimalista e profissional com Tailwind CSS 4
- Sistema de ícones premium com Iconoir React
- Páginas principais:
  - Home com hero, áreas de atuação e contato
  - `/areas` - Áreas de atuação detalhadas
  - `/equipe` - Perfis profissionais
  - `/contato` - Formulário de contato e WhatsApp
  - `/icons-gallery` - Galeria de ícones disponíveis
  - `/unity-demo` - Demonstração Unity WebGL
- Componentes interativos:
  - Header com navegação responsiva
  - Footer completo com informações de contato
  - Timeline de processo jurídico
  - Contador de estatísticas animado
  - FAQ interativo
  - ChatBot integrado
- Integração WhatsApp para contato rápido
- Sistema de favicons completo para todas as plataformas
- Suporte a Unity WebGL via React Unity WebGL
- Configuração completa de SEO e metadados
- Sitemap e robots.txt
- Headers de segurança (CSP, X-Frame-Options, etc.)

#### ⚙️ Configuração
- Deploy automático via Azure Static Web Apps
- GitHub Actions workflow para CI/CD
- ESLint para qualidade de código
- Node.js 20 LTS como runtime
- Configuração VS Code otimizada

#### 📚 Documentação
- README.md completo com guia de uso
- DEPLOY.md com instruções de deploy
- CONTRIBUTING.md com guia de contribuição
- Templates para Issues e Pull Requests
- Guias de ícones e Unity

#### 🎨 Design
- Paleta de cores profissional:
  - Verde escuro: `#0f2f24`
  - Dourado: `#c9a349`
  - Off-white: `#f8f7f3`
- Design responsivo para todos os dispositivos
- Animações suaves com Framer Motion
- Tipografia otimizada para legibilidade

#### 🔒 Segurança
- Headers de segurança configurados
- HTTPS obrigatório
- Proteção contra clickjacking
- Content Security Policy

#### ♿ Acessibilidade
- Navegação por teclado
- Semântica HTML adequada
- Contraste de cores WCAG 2.1 AA
- Textos alternativos em imagens

### 🧹 Organização
- Remoção de configurações duplicadas de deploy
- Estrutura de diretórios otimizada
- Consolidação de workflows
- Limpeza de arquivos desnecessários

### 🐛 Correções
- Configuração correta do output do Next.js para Azure
- Ajustes em scripts do package.json
- Correção de paths em workflows

---

## Tipos de Mudanças

- `✨ Adicionado` - Para novas funcionalidades
- `🔄 Modificado` - Para mudanças em funcionalidades existentes
- `⚠️ Descontinuado` - Para funcionalidades que serão removidas
- `🗑️ Removido` - Para funcionalidades removidas
- `🐛 Corrigido` - Para correções de bugs
- `🔒 Segurança` - Para correções de vulnerabilidades
- `📚 Documentação` - Para mudanças na documentação
- `⚡ Performance` - Para melhorias de performance
- `🧹 Manutenção` - Para tarefas de manutenção e limpeza

---

[Não Lançado]: https://github.com/avilaops/Advocacia/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/avilaops/Advocacia/releases/tag/v1.0.0

# 🏛️ Gonzales & Pitondo Advocacia - Site Institucional# Site Gonzales & Pitondo



<div align="center">Site institucional construído em Next.js (App Router) + Tailwind CSS + Iconoir para apresentação objetiva das áreas de atuação do escritório, com atendimento abrangente.



![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)## 🎨 Tecnologias e Design

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)

![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)- **Framework**: Next.js 16 (App Router)

![Azure](https://img.shields.io/badge/Azure-Static_Web_Apps-0078D4?style=for-the-badge&logo=microsoft-azure)- **Styling**: Tailwind CSS 4

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)- **Ícones**: Iconoir React (ícones lineares premium, estilo Apple)

- **Unity**: React Unity WebGL (suporte para conteúdo Unity)

**Site institucional moderno, performático e profissional para escritório de advocacia**- **Design**: Minimalista, clean, profissional



[🌐 Ver Site](https://advocacia.avila.inc) • [📖 Documentação](#-documentação) • [🚀 Deploy](#-deploy) • [🤝 Contribuir](CONTRIBUTING.md)## Páginas



</div>- `/` Home com hero, situações de atuação, atendimento, sobre e contato.

- `/areas` Agrupamento de Família e Sucessões, Cível e Cobranças, Bancário e Juros Abusivos, Penal / Execução Penal, Imobiliário e Locação, Acidente de Trânsito.

---- `/equipe` Perfis profissionais sem linguagem de promessa.

- `/contato` Fluxos de urgência (WhatsApp) e agendamento (formulário que gera mensagem para WhatsApp).

## 📋 Índice- `/icons-gallery` **[NOVO]** Galeria completa de ícones Iconoir disponíveis

- `/unity-demo` **[NOVO]** Demonstração de integração Unity WebGL

- [Sobre o Projeto](#-sobre-o-projeto)

- [Características](#-características)## 🎯 Ícones Iconoir

- [Tecnologias](#-tecnologias)

- [Páginas](#-páginas)Todo o projeto agora utiliza **Iconoir**, uma biblioteca de ícones lineares premium com estilo minimalista semelhante ao design da Apple.

- [Começando](#-começando)

- [Desenvolvimento](#-desenvolvimento)### Ícones Implementados

- [Deploy](#-deploy)- **Jurídico**: Scale, Group, DollarCircle, Bank, LockSquare, HomeSimple, Car

- [Documentação](#-documentação)- **Comunicação**: ChatLines, Phone, Mail

- [Contribuição](#-contribuição)- **Navegação**: ArrowRight, Menu, MapPin

- [Segurança](#-segurança)- **Organização**: Calendar, Clock

- [Licença](#-licença)- **Status**: CheckCircle, InfoCircle

- **Perfil**: User, Badge

---

Veja todos os ícones disponíveis em: `/icons-gallery`

## 🎯 Sobre o Projeto

## 🎮 Unity WebGL

Site institucional desenvolvido para o escritório **Gonzales & Pitondo Advocacia**, focado em apresentação profissional, objetiva e ética das áreas de atuação do escritório, com facilidade de contato e agendamento para clientes.

O projeto está pronto para integrar conteúdo Unity WebGL através do componente `UnityWebGL.js`.

### 💼 Objetivos Comerciais

### Como usar:

- ✅ Apresentação profissional do escritório1. Exporte seu projeto Unity para WebGL

- ✅ Facilitar contato de potenciais clientes2. Coloque os arquivos em `public/unity/Build/`

- ✅ Demonstrar expertise em múltiplas áreas do direito3. Use o componente conforme exemplo em `/unity-demo`

- ✅ Gerar confiança através de design moderno

- ✅ Conversão de visitantes em leads qualificadosConsulte `UNITY_ICONOIR_UPDATE.md` para mais detalhes.

- ✅ Conformidade com regulamentação OAB

## Ética / OAB

### 🎨 Design

Texto informativo, sem garantias de resultado, nem linguagem comparativa ou de superioridade. CTA direto apenas para contato e orientação inicial.

Design **minimalista** e **profissional** inspirado em grandes marcas, com foco em:

- Clareza de informação## Paleta

- Navegação intuitiva

- Experiência premium- Verde escuro: `#0f2f24`

- Responsividade total- Dourado: `#c9a349`

- Performance otimizada- Off-white: `#f8f7f3`



**Paleta de Cores:**## Desenvolvimento

```css

--verde-escuro: #0f2f24  /* Principal */```powershell

--dourado:      #c9a349  /* Destaque */npm install

--off-white:    #f8f7f3  /* Fundo */npm run dev

``````



---## Build



## ✨ Características```powershell

npm run build

### 🎨 Interface & UXnpm start

- ✅ Design minimalista e clean```

- ✅ Totalmente responsivo (mobile-first)

- ✅ Animações suaves e profissionais## 🚀 Deploy

- ✅ Navegação intuitiva

- ✅ Tempos de carregamento otimizadosO projeto está configurado para **Azure Static Web Apps** com deploy automático via GitHub Actions.

- ✅ SEO otimizado

Para detalhes completos sobre o deploy, consulte [DEPLOY.md](./DEPLOY.md).

### 🚀 Performance

- ✅ Next.js 16 com App Router### Configuração Rápida

- ✅ Build otimizado para produção

- ✅ Imagens otimizadas1. Deploy automático em cada push para `main`

- ✅ Código minificado2. Build: Next.js com output `.next`

- ✅ Lazy loading inteligente3. Workflow: `.github/workflows/azure-static-web-apps-mango-river-07e136c1e.yml`

- ✅ Core Web Vitals otimizados

### DNS Customizado

### 🔒 Segurança

- ✅ HTTPS obrigatórioPara configurar o domínio `adv.avila.inc`:

- ✅ Content Security Policy (CSP)1. No Azure Static Web Apps, vá em **Custom domains**

- ✅ Headers de segurança configurados2. Adicione `adv.avila.inc`

- ✅ Proteção contra clickjacking3. Configure o CNAME apontando para o domínio fornecido pelo Azure

- ✅ Sanitização de inputs4. Aguarde validação e certificado SSL automático

- ✅ Azure WAF protection

## Ajustes futuros

### ♿ Acessibilidade

- ✅ WCAG 2.1 Level AA- Substituir placeholders de fotos em `/equipe`.

- ✅ Navegação por teclado- Adicionar página de política de privacidade se necessário.

- ✅ Screen reader friendly- Implementar logs de acesso se exigido por conformidade.

- ✅ Contraste adequado

- ✅ Semântica HTML5## Contato rápido

- ✅ ARIA labels apropriados

Links de WhatsApp utilizam formato `https://wa.me/5517981058013`.

### 📱 Funcionalidades
- ✅ Integração WhatsApp
- ✅ Formulário de contato
- ✅ Timeline de processos
- ✅ FAQ interativo
- ✅ ChatBot integrado
- ✅ Galeria de ícones
- ✅ Suporte Unity WebGL

---

## 🛠️ Tecnologias

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework com App Router
- **[React 19.2](https://react.dev/)** - Biblioteca UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### UI & Animações
- **[Framer Motion](https://www.framer.com/motion/)** - Animações suaves
- **[Iconoir React](https://iconoir.com/)** - Ícones premium lineares
- **[React Type Animation](https://www.npmjs.com/package/react-type-animation)** - Efeito de digitação

### Ferramentas
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento CSS
- **[Sharp](https://sharp.pixelplumbing.com/)** - Otimização de imagens

### Deployment & CI/CD
- **[Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)** - Hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

---

## 📄 Páginas

### 🏠 Home `/`
- Hero section impactante
- Situações de atuação
- Chamadas para ação
- Informações de contato
- Sobre o escritório

### ⚖️ Áreas de Atuação `/areas`
- **Família e Sucessões** - Divórcios, inventários, pensão alimentícia
- **Cível e Cobranças** - Ações indenizatórias, contratos, cobranças
- **Bancário e Juros Abusivos** - Revisão de contratos, negociação de dívidas
- **Penal / Execução Penal** - Defesa criminal, recursos, habeas corpus
- **Imobiliário e Locação** - Contratos, despejo, regularização
- **Acidente de Trânsito** - Indenizações, perícias, negociações

### 👥 Equipe `/equipe`
- Perfis profissionais completos
- Qualificações e expertise
- Linguagem profissional (conforme OAB)

### 📞 Contato `/contato`
- Formulário de contato estruturado
- Integração WhatsApp para urgências
- Informações de localização
- Horário de atendimento

### 🎨 Extras
- `/icons-gallery` - Galeria completa de ícones Iconoir
- `/unity-demo` - Demonstração de integração Unity WebGL

---

## 🚀 Começando

### Pré-requisitos

- Node.js 20.0.0 ou superior
- npm 10.0.0 ou superior
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/avilaops/Advocacia.git
cd Advocacia
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra o navegador**
```
http://localhost:3000
```

---

## 💻 Desenvolvimento

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm start            # Inicia servidor de produção

# Qualidade
npm run lint         # Executa ESLint

# Utilitários
npm run favicons     # Gera favicons para todas as plataformas
```

### Estrutura de Diretórios

```
Advocacia/
├── .github/                 # GitHub configuration
│   ├── workflows/          # CI/CD workflows
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── public/                 # Arquivos estáticos
│   ├── favicons/          # Favicons gerados
│   ├── robots.txt         # SEO
│   └── sitemap.xml        # SEO
├── scripts/               # Scripts utilitários
│   └── generate-favicons.mjs
├── src/
│   ├── app/              # Pages (App Router)
│   │   ├── layout.js     # Layout principal
│   │   ├── page.js       # Home page
│   │   ├── areas/        # Áreas de atuação
│   │   ├── equipe/       # Equipe
│   │   └── contato/      # Contato
│   └── components/       # Componentes reutilizáveis
│       ├── Header.js
│       ├── Footer.js
│       ├── ChatBot.js
│       └── ...
├── CHANGELOG.md          # Histórico de mudanças
├── CONTRIBUTING.md       # Guia de contribuição
├── DEPLOY.md            # Guia de deploy
├── LICENSE              # Licença MIT
├── README.md            # Este arquivo
├── SECURITY.md          # Política de segurança
└── package.json         # Dependências e scripts
```

### Boas Práticas

- ✅ Use componentes funcionais com hooks
- ✅ Mantenha componentes pequenos e reutilizáveis
- ✅ Siga conventional commits
- ✅ Teste em diferentes navegadores
- ✅ Otimize imagens antes de adicionar
- ✅ Mantenha acessibilidade em mente
- ✅ Documente código complexo

---

## 🚀 Deploy

O projeto está configurado para **deploy automático** via Azure Static Web Apps.

### Deploy Automático

Cada push para `main` dispara automaticamente:
1. Build do projeto
2. Testes de qualidade
3. Deploy para produção
4. Invalidação de cache

### Configuração

Para detalhes completos, consulte **[DEPLOY.md](DEPLOY.md)**

### Workflow

```yaml
# .github/workflows/azure-static-web-apps-mango-river-07e136c1e.yml
- Build: Next.js
- Output: .next
- Runtime: Node.js 20
- Deploy: Azure Static Web Apps
```

### DNS Customizado

Domínio configurado: `advocacia.avila.inc`

---

## 📚 Documentação

### Arquivos de Documentação

- **[CHANGELOG.md](CHANGELOG.md)** - Histórico de mudanças
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guia de contribuição
- **[DEPLOY.md](DEPLOY.md)** - Instruções de deploy
- **[SECURITY.md](SECURITY.md)** - Política de segurança
- **[ICONOIR_GUIDE.md](ICONOIR_GUIDE.md)** - Guia de ícones
- **[UNITY_GUIDE.md](UNITY_GUIDE.md)** - Integração Unity

### Recursos Externos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Veja **[CONTRIBUTING.md](CONTRIBUTING.md)** para detalhes.

### Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Código de Conduta

Este projeto segue padrões profissionais de conduta. Seja respeitoso e profissional.

---

## 🔒 Segurança

Para reportar vulnerabilidades de segurança, consulte **[SECURITY.md](SECURITY.md)**.

**Não** crie issues públicas para problemas de segurança.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo **[LICENSE](LICENSE)** para detalhes.

---

## 📞 Contato

**Gonzales & Pitondo Advocacia**

- 🌐 Website: [advocacia.avila.inc](https://advocacia.avila.inc)
- 📱 WhatsApp: [+55 17 98105-8013](https://wa.me/5517981058013)
- 📧 Email: contato@avila.inc
- 📍 Endereço: [Ver no site](https://advocacia.avila.inc/contato)

---

## 🏆 Créditos

Desenvolvido com ❤️ para Gonzales & Pitondo Advocacia

### Tecnologias Principais
- [Next.js](https://nextjs.org/) by Vercel
- [React](https://react.dev/) by Meta
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs
- [Iconoir](https://iconoir.com/) by Iconoir Team

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela! ⭐**

[⬆ Voltar ao topo](#-gonzales--pitondo-advocacia---site-institucional)

</div>

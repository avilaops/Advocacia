# Site Gonzales & Pitondo

Site institucional construído em Next.js (App Router) + Tailwind CSS + Iconoir para apresentação objetiva das áreas de atuação do escritório, com atendimento abrangente.

## 🎨 Tecnologias e Design

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Ícones**: Iconoir React (ícones lineares premium, estilo Apple)
- **Unity**: React Unity WebGL (suporte para conteúdo Unity)
- **Design**: Minimalista, clean, profissional

## Páginas

- `/` Home com hero, situações de atuação, atendimento, sobre e contato.
- `/areas` Agrupamento de Família e Sucessões, Cível e Cobranças, Bancário e Juros Abusivos, Penal / Execução Penal, Imobiliário e Locação, Acidente de Trânsito.
- `/equipe` Perfis profissionais sem linguagem de promessa.
- `/contato` Fluxos de urgência (WhatsApp) e agendamento (formulário que gera mensagem para WhatsApp).
- `/icons-gallery` **[NOVO]** Galeria completa de ícones Iconoir disponíveis
- `/unity-demo` **[NOVO]** Demonstração de integração Unity WebGL

## 🎯 Ícones Iconoir

Todo o projeto agora utiliza **Iconoir**, uma biblioteca de ícones lineares premium com estilo minimalista semelhante ao design da Apple.

### Ícones Implementados
- **Jurídico**: Scale, Group, DollarCircle, Bank, LockSquare, HomeSimple, Car
- **Comunicação**: ChatLines, Phone, Mail
- **Navegação**: ArrowRight, Menu, MapPin
- **Organização**: Calendar, Clock
- **Status**: CheckCircle, InfoCircle
- **Perfil**: User, Badge

Veja todos os ícones disponíveis em: `/icons-gallery`

## 🎮 Unity WebGL

O projeto está pronto para integrar conteúdo Unity WebGL através do componente `UnityWebGL.js`.

### Como usar:
1. Exporte seu projeto Unity para WebGL
2. Coloque os arquivos em `public/unity/Build/`
3. Use o componente conforme exemplo em `/unity-demo`

Consulte `UNITY_ICONOIR_UPDATE.md` para mais detalhes.

## Ética / OAB

Texto informativo, sem garantias de resultado, nem linguagem comparativa ou de superioridade. CTA direto apenas para contato e orientação inicial.

## Paleta

- Verde escuro: `#0f2f24`
- Dourado: `#c9a349`
- Off-white: `#f8f7f3`

## Desenvolvimento

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
npm start
```

## 🚀 Deploy

O projeto está configurado para **Azure Static Web Apps** com deploy automático via GitHub Actions.

Para detalhes completos sobre o deploy, consulte [DEPLOY.md](./DEPLOY.md).

### Configuração Rápida

1. Deploy automático em cada push para `main`
2. Build: Next.js com output `.next`
3. Workflow: `.github/workflows/azure-static-web-apps-mango-river-07e136c1e.yml`

### DNS Customizado

Para configurar o domínio `adv.avila.inc`:
1. No Azure Static Web Apps, vá em **Custom domains**
2. Adicione `adv.avila.inc`
3. Configure o CNAME apontando para o domínio fornecido pelo Azure
4. Aguarde validação e certificado SSL automático

## Ajustes futuros

- Substituir placeholders de fotos em `/equipe`.
- Adicionar página de política de privacidade se necessário.
- Implementar logs de acesso se exigido por conformidade.

## Contato rápido

Links de WhatsApp utilizam formato `https://wa.me/5517981058013`.

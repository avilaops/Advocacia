# Site Gonzales & Pitondo

Site institucional construído em Next.js (App Router) + Tailwind CSS para apresentação objetiva das áreas de atuação do escritório, com atendimento abrangente.

## Páginas

- `/` Home com hero, situações de atuação, atendimento, sobre e contato.
- `/areas` Agrupamento de Família e Sucessões, Cível e Cobranças, Bancário e Juros Abusivos, Penal / Execução Penal, Imobiliário e Locação, Acidente de Trânsito.
- `/equipe` Perfis profissionais sem linguagem de promessa.
- `/contato` Fluxos de urgência (WhatsApp) e agendamento (formulário que gera mensagem para WhatsApp).

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

## Deploy (Vercel recomendado)

## Deploy em Azure Web App

O projeto está configurado para deploy no Azure Web App (arcsat-crm) usando Node.js 20 LTS.

### Criação do Azure Web App via CLI

Execute o seguinte comando para criar o Web App:

```bash
az webapp create --name arcsat-crm --resource-group Avila --plan avila-shared-plan --runtime "NODE:20-lts" --deployment-source-url https://github.com/avilaops/site
```

### Deploy Automático via GitHub Actions

1. No portal Azure, vá para o Web App `arcsat-crm`
2. Em **Deployment Center**, selecione GitHub como fonte
3. Configure o repositório e branch (main)
4. O Azure criará automaticamente um **Publish Profile**
5. Baixe o Publish Profile e adicione como secret no GitHub:
   - Nome do secret: `AZUREAPPSERVICE_PUBLISHPROFILE_ARCSAT_CRM`
   - Valor: Conteúdo do arquivo de publish profile
6. O workflow `.github/workflows/azure-webapps-node.yml` fará o deploy automaticamente em cada push para `main`

### Configuração Manual

Caso prefira deploy manual:

```bash
# Fazer build localmente
npm run build

# Deploy via Azure CLI
az webapp up --name arcsat-crm --resource-group Avila
```

### Variáveis de Ambiente no Azure

Configure as seguintes Application Settings no portal Azure:

- `NODE_ENV`: `production`
- `WEBSITE_NODE_DEFAULT_VERSION`: `~20`
- `PORT`: `8080` (ou deixar default)

### Arquivos de Configuração

- `web.config`: Configuração IIS para Azure App Service
- `server.js`: Servidor Node.js customizado para produção
- `azure-config.json`: Configurações específicas do Azure
- `.deployment`: Script de deployment customizado

## Deploy em Azure Static Web Apps

Estratégia: usar Azure Static Web Apps com build do Next.js (App Router). Workflow GitHub Actions adicionado em `.github/workflows/azure-static-web-apps.yml` na raiz do repositório.

### Passos

1. Criar recurso Azure Static Web App (plano Standard ou Free) apontando para o repositório GitHub `avilaops/REPO`.
2. Branch: `main`.
3. App Location: `site`.
4. Output Location: `.next`.
5. Gerar token (Automatico ao criar recurso) e adicionar no repositório como secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.
6. Fazer push na branch `main` para disparar deploy.

### DNS domínio `adv.avila.inc`

Após provisionar, em Azure Static Web Apps > Custom domains:

1. Adicionar `adv.avila.inc`.
2. Azure fornecerá registro CNAME para apontar (ex: `adv` -> `<gerado>.azurestaticapps.net`).
3. Validar propagação e aguardar certificado SSL automático.

### Observações

- Arquivo `staticwebapp.config.json` inclui headers de segurança básicos.
- Caso precise rotas dinâmicas futuras, remover `navigationFallback` ou ajustar conforme necessidade.
- Para gerar imagem OG real substituir `public/og-image.png`.


1. Inicialize repositório git se não existir: já criado pelo create-next-app.
2. Commit das alterações.
3. Crie projeto no Vercel e conecte o repositório.
4. Variáveis de ambiente: não são necessárias neste estágio.
5. Após deploy substituir `metadataBase` em `src/app/layout.js` pelo domínio definitivo.

## Ajustes futuros

- Substituir placeholders de fotos em `/equipe`.
- Adicionar página de política de privacidade se necessário.
- Implementar logs de acesso se exigido por conformidade.

## Contato rápido

Links de WhatsApp utilizam formato `https://wa.me/5517981058013`.

# Deploy Configuration

Este repositório está configurado para deploy automático no **Azure Static Web Apps**.

## 🚀 Deploy Automático

O deploy é realizado automaticamente via GitHub Actions quando você:
- Faz push na branch `main`
- Cria ou atualiza um Pull Request

## ⚙️ Configuração

### Azure Static Web Apps

O workflow está em `.github/workflows/azure-static-web-apps-mango-river-07e136c1e.yml`

**Configurações:**
- **Framework**: Next.js
- **Output Directory**: `.next`
- **Build Command**: `npm run build`
- **Node Version**: 20 LTS

### Secrets Necessários

O seguinte secret deve estar configurado no GitHub:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_MANGO_RIVER_07E136C1E`

## 📁 Arquivos de Configuração

- `.github/workflows/azure-static-web-apps-mango-river-07e136c1e.yml` - Workflow de CI/CD
- `staticwebapp.config.json` - Configurações do Azure Static Web Apps
- `next.config.mjs` - Configurações do Next.js
- `package.json` - Scripts e dependências

## 🧹 Limpeza Realizada

Foram removidas as seguintes configurações duplicadas:

### Removidos (Azure Web App - desnecessário):
- ❌ `.deployment`
- ❌ `deploy.sh`
- ❌ `azure-config.json`
- ❌ `AZURE_DEPLOYMENT.md`
- ❌ `server.js`
- ❌ `process.json`
- ❌ `web.config`

### Removidos (Vercel - desnecessário):
- ❌ `vercel.json`

## 📝 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção (mesmo comando usado no deploy)
npm run build

# Iniciar servidor de produção localmente
npm start

# Lint do código
npm run lint

# Gerar favicons
npm run favicons
```

## 🔗 Links Úteis

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions Documentation](https://docs.github.com/actions)

# Azure Web App Deployment Guide

This guide explains how to deploy the arcsat-crm application to Azure Web App.

## Prerequisites

- Azure CLI installed (`az --version` to check)
- Azure subscription with appropriate permissions
- GitHub repository access

## Quick Deploy Command

To create the Azure Web App and configure it for GitHub deployment:

```bash
az webapp create \
  --name arcsat-crm \
  --resource-group Avila \
  --plan avila-shared-plan \
  --runtime "NODE:20-lts" \
  --deployment-source-url https://github.com/avilaops/site
```

## Detailed Setup Steps

### 1. Create Resource Group (if not exists)

```bash
az group create --name Avila --location eastus
```

### 2. Create App Service Plan (if not exists)

```bash
az appservice plan create \
  --name avila-shared-plan \
  --resource-group Avila \
  --sku B1 \
  --is-linux
```

### 3. Create Web App

```bash
az webapp create \
  --name arcsat-crm \
  --resource-group Avila \
  --plan avila-shared-plan \
  --runtime "NODE:20-lts"
```

### 4. Configure Application Settings

```bash
az webapp config appsettings set \
  --name arcsat-crm \
  --resource-group Avila \
  --settings \
    NODE_ENV=production \
    WEBSITE_NODE_DEFAULT_VERSION=~20 \
    SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

### 5. Configure GitHub Deployment

Option A: Via Azure Portal
1. Go to Azure Portal → Web App → Deployment Center
2. Select GitHub as source
3. Authorize and select repository: `avilaops/site`
4. Select branch: `main`
5. Download the Publish Profile

Option B: Via Azure CLI
```bash
az webapp deployment source config \
  --name arcsat-crm \
  --resource-group Avila \
  --repo-url https://github.com/avilaops/site \
  --branch main \
  --manual-integration
```

### 6. Add GitHub Secret for CI/CD

1. In Azure Portal, go to Web App → Deployment Center
2. Download the Publish Profile
3. In GitHub repository → Settings → Secrets and variables → Actions
4. Create new secret:
   - Name: `AZUREAPPSERVICE_PUBLISHPROFILE_ARCSAT_CRM`
   - Value: Paste the entire publish profile content

### 7. Verify Deployment

After pushing to `main` branch:

```bash
# Check deployment status
az webapp deployment list-publishing-profiles \
  --name arcsat-crm \
  --resource-group Avila

# View logs
az webapp log tail \
  --name arcsat-crm \
  --resource-group Avila
```

## Configuration Files

### web.config
IIS configuration for Azure App Service. Configures iisnode to run Node.js applications.

### server.js
Custom Node.js server using Next.js in production mode. Handles HTTP requests and serves the application.

### azure-config.json
Contains Azure-specific configuration including app name, resource group, and environment variables.

### .deployment
Specifies custom deployment command for Azure.

### deploy.sh
Custom deployment script that runs during Azure deployment.

### .nvmrc
Specifies Node.js version 20 for consistency across environments.

### process.json
PM2 configuration file for process management (optional).

## Monitoring and Troubleshooting

### View Application Logs

```bash
# Stream logs in real-time
az webapp log tail --name arcsat-crm --resource-group Avila

# Download logs
az webapp log download --name arcsat-crm --resource-group Avila --log-file logs.zip
```

### Check Application Status

```bash
az webapp show --name arcsat-crm --resource-group Avila --query state
```

### Restart Application

```bash
az webapp restart --name arcsat-crm --resource-group Avila
```

### View Environment Variables

```bash
az webapp config appsettings list --name arcsat-crm --resource-group Avila
```

## Custom Domain Configuration

To add custom domain (e.g., adv.avila.inc):

```bash
# Add custom domain
az webapp config hostname add \
  --webapp-name arcsat-crm \
  --resource-group Avila \
  --hostname adv.avila.inc

# Bind SSL certificate (if needed)
az webapp config ssl bind \
  --certificate-thumbprint <thumbprint> \
  --ssl-type SNI \
  --name arcsat-crm \
  --resource-group Avila
```

## Scaling

### Scale Up (Change pricing tier)

```bash
az appservice plan update \
  --name avila-shared-plan \
  --resource-group Avila \
  --sku P1V2
```

### Scale Out (Add instances)

```bash
az appservice plan update \
  --name avila-shared-plan \
  --resource-group Avila \
  --number-of-workers 2
```

## Useful Commands

```bash
# Get web app URL
az webapp show --name arcsat-crm --resource-group Avila --query defaultHostName -o tsv

# Open web app in browser
az webapp browse --name arcsat-crm --resource-group Avila

# List all web apps in resource group
az webapp list --resource-group Avila --output table

# Delete web app (if needed)
az webapp delete --name arcsat-crm --resource-group Avila
```

## CI/CD Workflow

The GitHub Actions workflow (`.github/workflows/azure-webapps-node.yml`) automatically:

1. Triggers on push to `main` branch
2. Sets up Node.js 20.x
3. Installs dependencies with `npm ci`
4. Builds the application with `npm run build`
5. Uploads build artifacts
6. Deploys to Azure Web App using publish profile

## Support and Resources

- [Azure Web Apps Documentation](https://docs.microsoft.com/azure/app-service/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Azure CLI Reference](https://docs.microsoft.com/cli/azure/)

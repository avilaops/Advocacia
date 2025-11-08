# Security Policy

## 🔒 Reportar Vulnerabilidades de Segurança

A segurança do nosso site e dos dados dos nossos clientes é uma prioridade máxima. Se você descobrir uma vulnerabilidade de segurança, pedimos que nos ajude de forma responsável.

### 📧 Como Reportar

**NÃO** crie uma issue pública para vulnerabilidades de segurança.

Em vez disso, envie um e-mail para:
- **Email**: security@avila.inc (ou o email apropriado do escritório)
- **Assunto**: [SECURITY] Descrição breve da vulnerabilidade

### 📋 Informações a Incluir

Por favor, inclua o máximo de informações possível:

1. **Tipo de vulnerabilidade** (ex: XSS, CSRF, SQL Injection, etc.)
2. **Localização** (URLs, arquivos, componentes afetados)
3. **Passos para reproduzir** a vulnerabilidade
4. **Impacto potencial** da vulnerabilidade
5. **Sugestões de correção** (se tiver)
6. **Seu nome/handle** para crédito (opcional)

### ⏱️ Tempo de Resposta

- **Confirmação inicial**: Dentro de 48 horas
- **Avaliação detalhada**: Dentro de 7 dias
- **Correção planejada**: Dependendo da severidade
  - Crítica: 24-48 horas
  - Alta: 7 dias
  - Média: 30 dias
  - Baixa: 90 dias

### 🛡️ Processo de Tratamento

1. **Recebimento**: Confirmamos o recebimento do seu reporte
2. **Validação**: Verificamos e reproduzimos a vulnerabilidade
3. **Classificação**: Avaliamos a severidade (Crítica/Alta/Média/Baixa)
4. **Desenvolvimento**: Criamos e testamos a correção
5. **Deploy**: Implementamos a correção em produção
6. **Divulgação**: Publicamos detalhes após a correção (com seu crédito, se desejar)

### 🏆 Reconhecimento

Agradecemos pesquisadores de segurança responsáveis:

- Crédito público no CHANGELOG (se desejar)
- Menção na seção de agradecimentos
- Referência em futuras divulgações de segurança

### ✅ Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | ✅ Sim             |
| < 1.0  | ❌ Não             |

Apenas a versão mais recente de produção recebe atualizações de segurança.

## 🔐 Medidas de Segurança Implementadas

### Frontend
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options (proteção contra clickjacking)
- ✅ X-Content-Type-Options (proteção contra MIME sniffing)
- ✅ Referrer-Policy (controle de informações de referência)
- ✅ HTTPS obrigatório em produção
- ✅ Sanitização de inputs de usuário
- ✅ Validação de formulários

### Infraestrutura
- ✅ Azure Static Web Apps com WAF
- ✅ HTTPS/TLS 1.3
- ✅ Certificados SSL automáticos
- ✅ DDoS protection via Azure
- ✅ Rate limiting
- ✅ Logs de auditoria

### Dependências
- ✅ Atualizações regulares de dependências
- ✅ Monitoramento de vulnerabilidades
- ✅ Uso de versões estáveis
- ✅ Audit automático via npm

## 🚨 Fora do Escopo

Os seguintes itens estão **fora do escopo** do programa de segurança:

- ❌ Ataques de força bruta sem demonstração de impacto
- ❌ Denial of Service (DoS/DDoS)
- ❌ Spam ou engenharia social
- ❌ Problemas de versões não suportadas
- ❌ Vulnerabilidades teóricas sem exploração prática
- ❌ Problemas em navegadores desatualizados
- ❌ Relatórios automatizados de scanners sem validação manual

## 📚 Recursos Adicionais

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [Azure Security Best Practices](https://docs.microsoft.com/azure/security/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

## 🤝 Divulgação Responsável

Acreditamos em divulgação responsável e coordenada de vulnerabilidades de segurança. Pedimos que:

1. Nos dê tempo razoável para corrigir antes da divulgação pública
2. Faça um esforço de boa fé para evitar violações de privacidade
3. Não explore a vulnerabilidade além do necessário para demonstração
4. Não acesse, modifique ou delete dados de outros usuários

## 📞 Contato

Para questões não relacionadas a segurança, use os canais normais de comunicação:
- Issues: https://github.com/avilaops/Advocacia/issues
- Website: https://advocacia.avila.inc

---

**Obrigado por ajudar a manter nosso site seguro! 🛡️**

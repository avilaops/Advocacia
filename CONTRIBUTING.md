# Guia de Contribuição

Obrigado por considerar contribuir para o site Gonzales & Pitondo! Este documento fornece diretrizes para contribuições ao projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Melhorias](#sugerir-melhorias)

## 🤝 Código de Conduta

Este projeto segue padrões profissionais de conduta. Esperamos que todos os contribuidores:

- Sejam respeitosos e profissionais
- Aceitem críticas construtivas
- Foquem no que é melhor para o projeto
- Mantenham a confidencialidade de informações sensíveis

## 🚀 Como Contribuir

### 1. Fork o Projeto
```bash
git clone https://github.com/avilaops/Advocacia.git
cd Advocacia
```

### 2. Crie uma Branch
```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 3. Instale Dependências
```bash
npm install
```

### 4. Faça suas Alterações
- Siga os padrões de código estabelecidos
- Teste suas alterações localmente
- Mantenha commits claros e descritivos

### 5. Execute os Testes
```bash
npm run lint
npm run build
```

### 6. Commit suas Mudanças
Usamos conventional commits para mensagens padronizadas:

```bash
git commit -m "feat: adicionar nova funcionalidade"
git commit -m "fix: corrigir bug na navegação"
git commit -m "docs: atualizar documentação"
git commit -m "style: ajustar espaçamento"
git commit -m "refactor: reorganizar código"
git commit -m "perf: melhorar performance"
git commit -m "test: adicionar testes"
```

### 7. Push e Abra um Pull Request
```bash
git push origin feature/nome-da-feature
```

## 💻 Padrões de Código

### JavaScript/React
- Use componentes funcionais com hooks
- Mantenha componentes pequenos e reutilizáveis
- Use PropTypes ou TypeScript para validação
- Siga o padrão de nomenclatura camelCase

### CSS/Tailwind
- Use Tailwind CSS sempre que possível
- Mantenha classes organizadas e legíveis
- Evite CSS inline quando possível
- Use variáveis CSS para cores e espaçamentos

### Estrutura de Arquivos
```
src/
├── app/              # Páginas Next.js (App Router)
├── components/       # Componentes reutilizáveis
│   ├── Component.js  # Um componente por arquivo
│   └── ...
└── ...
```

### Boas Práticas
- ✅ Código limpo e legível
- ✅ Comentários em partes complexas
- ✅ Nomes descritivos para variáveis e funções
- ✅ Responsividade em todos os componentes
- ✅ Acessibilidade (WCAG 2.1)
- ✅ Performance otimizada

## 🔄 Processo de Pull Request

1. **Antes de Abrir o PR**
   - Certifique-se de que o código está limpo
   - Execute `npm run lint` sem erros
   - Execute `npm run build` com sucesso
   - Teste em diferentes navegadores e dispositivos

2. **Ao Abrir o PR**
   - Use o template de PR fornecido
   - Descreva claramente as mudanças
   - Referencie issues relacionadas
   - Adicione screenshots se houver mudanças visuais

3. **Durante a Revisão**
   - Responda a comentários prontamente
   - Faça alterações solicitadas
   - Mantenha a branch atualizada com main

4. **Após a Aprovação**
   - Aguarde o merge do mantenedor
   - Delete sua branch após o merge

## 🐛 Reportar Bugs

Use o template de **Bug Report** ao criar uma issue. Inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Informações de ambiente (navegador, dispositivo, OS)

## 💡 Sugerir Melhorias

Use o template de **Feature Request** ao sugerir melhorias. Inclua:

- Descrição da funcionalidade
- Problema que resolve
- Solução proposta
- Impacto esperado

## 📝 Diretrizes Específicas do Projeto

### Ética e OAB
- ⚠️ Não use linguagem de garantia de resultados
- ⚠️ Evite superlativos e comparações
- ⚠️ Mantenha tom profissional e informativo
- ⚠️ Foque em orientação e suporte ao cliente

### Conteúdo
- Todo conteúdo deve ser aprovado pela equipe jurídica
- Mantenha linguagem clara e acessível
- Evite jargões desnecessários
- Priorize informação sobre marketing

### Design
- Mantenha consistência com a identidade visual
- Use apenas ícones Iconoir
- Respeite a paleta de cores estabelecida
- Priorize usabilidade e acessibilidade

## 🙋 Dúvidas?

Se tiver dúvidas sobre como contribuir:

1. Verifique a documentação existente
2. Procure por issues similares
3. Abra uma issue de discussão

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

**Obrigado por contribuir! 🎉**

# Atualizações do Projeto - Iconoir e Unity WebGL

## 📦 Pacotes Instalados

### Iconoir React
- **Pacote**: `iconoir-react`
- **Descrição**: Biblioteca de ícones lineares premium, estilo Apple
- **Uso**: Ícones minimalistas em todo o projeto

### React Unity WebGL
- **Pacote**: `react-unity-webgl`
- **Descrição**: Integração de projetos Unity WebGL em React/Next.js
- **Uso**: Permite incorporar conteúdo Unity no site

## 🎨 Ícones Iconoir Implementados

### Header.js
- `Phone` - Telefone de contato
- `ChatLines` - WhatsApp
- `Menu` - Menu mobile (importado, pronto para uso)

### Home (page.js)
- `Scale` - Inventário e Partilha
- `Group` - Família e Guarda
- `DollarCircle` - Cobranças
- `Bank` - Bancário
- `LockSquare` - Execução Penal
- `HomeSimple` - Imobiliário
- `Car` - Acidente de Trânsito
- `ChatLines` - WhatsApp
- `ArrowRight` - Seta direita
- `MapPin` - Endereço
- `Clock` - Horário

### Contato (page.js)
- `ChatLines` - WhatsApp
- `Calendar` - Agendamento
- `Phone` - Telefone
- `Mail` - E-mail

### Equipe (page.js)
- `User` - Avatar do profissional
- `Badge` - OAB

### Áreas (page.js)
- Todos os ícones das áreas de atuação
- `CheckCircle` - Marcadores de lista

## 🎮 Unity WebGL

### Componente Criado
**Arquivo**: `src/components/UnityWebGL.js`

Componente reutilizável que aceita os seguintes props:
- `loaderUrl` - Caminho para o arquivo .loader.js
- `dataUrl` - Caminho para o arquivo .data
- `frameworkUrl` - Caminho para o arquivo .framework.js
- `codeUrl` - Caminho para o arquivo .wasm
- `className` - Classes CSS personalizadas
- `width` - Largura (padrão: "100%")
- `height` - Altura (padrão: "600px")

### Página de Demonstração
**Arquivo**: `src/app/unity-demo/page.js`

Página de exemplo mostrando:
- Como integrar Unity WebGL
- Estrutura de pastas necessária
- Instruções de configuração
- Barra de progresso de carregamento

### Como Usar Unity WebGL

1. **Exporte seu projeto Unity**:
   - No Unity: `File` → `Build Settings` → `WebGL` → `Build`

2. **Estrutura de pastas**:
```
public/
  unity/
    Build/
      YourGame.loader.js
      YourGame.data
      YourGame.framework.js
      YourGame.wasm
```

3. **Implementação**:
```jsx
import UnityWebGL from '@/components/UnityWebGL';

<UnityWebGL
  loaderUrl="/unity/Build/YourGame.loader.js"
  dataUrl="/unity/Build/YourGame.data"
  frameworkUrl="/unity/Build/YourGame.framework.js"
  codeUrl="/unity/Build/YourGame.wasm"
  height="700px"
/>
```

4. **Acesse a demo**: `/unity-demo`

## 🎯 Características dos Ícones Iconoir

- **Estilo**: Lineares, minimalistas, semelhante ao design da Apple
- **Peso**: Configurável via `strokeWidth` (padrão: 1.5)
- **Tamanho**: Configurável via `width` e `height`
- **Cor**: Herda a cor do texto CSS

### Exemplo de Uso
```jsx
import { ChatLines } from "iconoir-react";

<ChatLines 
  width={20} 
  height={20} 
  strokeWidth={1.5} 
  className="text-green-600"
/>
```

## 📝 Próximos Passos

1. **Unity WebGL**:
   - Adicionar arquivos de build Unity na pasta `public/unity/`
   - Descomentar o componente em `/unity-demo/page.js`
   - Ajustar os caminhos dos arquivos

2. **Ícones**:
   - Todos os ícones já estão implementados
   - Estilo minimalista e consistente em todo o site
   - Fácil de personalizar cores e tamanhos

## 🔗 Recursos

- [Iconoir - Documentação](https://iconoir.com/)
- [React Unity WebGL - Documentação](https://react-unity-webgl.dev/)
- [Galeria de Ícones Iconoir](https://iconoir.com/support)

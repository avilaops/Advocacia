# 🎮 Guia Unity WebGL - React Integration

## Instalação

O pacote `react-unity-webgl` já está instalado no projeto.

```bash
npm install react-unity-webgl
```

## Componente UnityWebGL

Localização: `src/components/UnityWebGL.js`

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `loaderUrl` | string | - | Caminho para arquivo .loader.js |
| `dataUrl` | string | - | Caminho para arquivo .data |
| `frameworkUrl` | string | - | Caminho para arquivo .framework.js |
| `codeUrl` | string | - | Caminho para arquivo .wasm |
| `className` | string | "" | Classes CSS adicionais |
| `width` | string | "100%" | Largura do canvas |
| `height` | string | "600px" | Altura do canvas |

## Passo a Passo - Exportar do Unity

### 1. No Unity Editor

1. **File** → **Build Settings**
2. Selecione **WebGL** na lista de plataformas
3. Clique em **Switch Platform** (se necessário)
4. Clique em **Build**
5. Escolha uma pasta de destino (ex: `UnityBuild`)

### 2. Arquivos Gerados

Após o build, você terá uma estrutura assim:

```
UnityBuild/
├── Build/
│   ├── YourGame.loader.js
│   ├── YourGame.data
│   ├── YourGame.framework.js
│   └── YourGame.wasm
├── TemplateData/
│   └── ... (arquivos de template)
└── index.html
```

### 3. Copiar para o Projeto Next.js

Copie apenas a pasta `Build` para `public/unity/`:

```
public/
└── unity/
    └── Build/
        ├── YourGame.loader.js
        ├── YourGame.data
        ├── YourGame.framework.js
        └── YourGame.wasm
```

## Implementação

### Exemplo Básico

```jsx
import UnityWebGL from '@/components/UnityWebGL';

export default function GamePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Meu Jogo Unity</h1>
      
      <UnityWebGL
        loaderUrl="/unity/Build/YourGame.loader.js"
        dataUrl="/unity/Build/YourGame.data"
        frameworkUrl="/unity/Build/YourGame.framework.js"
        codeUrl="/unity/Build/YourGame.wasm"
        width="100%"
        height="700px"
      />
    </div>
  );
}
```

### Exemplo com Layout Personalizado

```jsx
import UnityWebGL from '@/components/UnityWebGL';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-darker text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Meu Jogo</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <UnityWebGL
            loaderUrl="/unity/Build/YourGame.loader.js"
            dataUrl="/unity/Build/YourGame.data"
            frameworkUrl="/unity/Build/YourGame.framework.js"
            codeUrl="/unity/Build/YourGame.wasm"
            height="800px"
            className="rounded-lg overflow-hidden"
          />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Como Jogar</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Use as setas do teclado para mover</li>
            <li>• Pressione espaço para pular</li>
            <li>• Clique com o mouse para interagir</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
```

### Exemplo Responsivo

```jsx
import UnityWebGL from '@/components/UnityWebGL';

export default function GamePage() {
  return (
    <div className="px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <UnityWebGL
          loaderUrl="/unity/Build/YourGame.loader.js"
          dataUrl="/unity/Build/YourGame.data"
          frameworkUrl="/unity/Build/YourGame.framework.js"
          codeUrl="/unity/Build/YourGame.wasm"
          width="100%"
          height="min(800px, 80vh)"
          className="shadow-2xl rounded-xl"
        />
      </div>
    </div>
  );
}
```

## Configurações do Unity para WebGL

### Build Settings Recomendados

1. **Player Settings** → **Publishing Settings**:
   - ✅ Compression Format: **Gzip** ou **Brotli**
   - ✅ Code Optimization: **Shorter Build Time** (dev) ou **Faster Runtime** (prod)

2. **Player Settings** → **Resolution and Presentation**:
   - ✅ Default Canvas Width: 1920
   - ✅ Default Canvas Height: 1080
   - ✅ Run In Background: Marcado

3. **Player Settings** → **Other Settings**:
   - ✅ Color Space: **Linear** (melhor qualidade visual)

### Otimização de Performance

```csharp
// No Unity, adicione ao seu código:

// Limitar FPS para performance web
Application.targetFrameRate = 60;

// Qualidade gráfica para web
QualitySettings.SetQualityLevel(2, true);
```

## Recursos Úteis

### Comunicação Unity ↔ React

O componente `useUnityContext` permite comunicação bidirecional:

```jsx
import { useUnityContext } from 'react-unity-webgl';

function GameComponent() {
  const { 
    unityProvider, 
    sendMessage, 
    addEventListener, 
    removeEventListener 
  } = useUnityContext({
    loaderUrl: "/unity/Build/YourGame.loader.js",
    dataUrl: "/unity/Build/YourGame.data",
    frameworkUrl: "/unity/Build/YourGame.framework.js",
    codeUrl: "/unity/Build/YourGame.wasm",
  });

  // Enviar mensagem para Unity
  function handleClick() {
    sendMessage("GameController", "StartGame");
  }

  // Receber mensagem do Unity
  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener]);

  function handleGameOver(score) {
    console.log("Game Over! Score:", score);
  }

  return (
    <div>
      <button onClick={handleClick}>Start Game</button>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
```

## Troubleshooting

### Erro: "Unable to load file"
- ✅ Verifique se os caminhos estão corretos
- ✅ Certifique-se de que os arquivos estão em `public/unity/Build/`
- ✅ Use caminhos absolutos começando com `/`

### Jogo não carrega
- ✅ Verifique o console do navegador para erros
- ✅ Teste em modo de produção (`npm run build && npm start`)
- ✅ Verifique se a compressão está configurada corretamente

### Performance ruim
- ✅ Reduza a qualidade gráfica no Unity
- ✅ Otimize assets (texturas, modelos)
- ✅ Use compressão Brotli ou Gzip
- ✅ Limite FPS para 30-60

## Página de Demonstração

Acesse `/unity-demo` para ver um exemplo completo com instruções.

## Recursos

- 📚 [React Unity WebGL Docs](https://react-unity-webgl.dev/)
- 🎮 [Unity WebGL Best Practices](https://docs.unity3d.com/Manual/webgl-building.html)
- 💡 [Unity Manual - WebGL](https://docs.unity3d.com/Manual/webgl.html)

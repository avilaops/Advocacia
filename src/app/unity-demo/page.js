'use client';

import UnityWebGL from '@/components/UnityWebGL';
import { InfoCircle } from 'iconoir-react';

export default function UnityDemo() {
  return (
    <div className="space-y-12">
      <section className="bg-green-darker text-offwhite py-16 px-6 md:px-12 rounded-lg">
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Unity WebGL Demo</h1>
          <p className="text-lg text-green-100">
            Exemplo de integração Unity WebGL no projeto
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <InfoCircle width={24} height={24} strokeWidth={1.5} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Como usar:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Exporte seu projeto Unity para WebGL</li>
                <li>Coloque os arquivos Build na pasta <code className="bg-blue-100 px-1 rounded">public/unity/</code></li>
                <li>Atualize os caminhos abaixo com os nomes dos seus arquivos</li>
              </ol>
            </div>
          </div>

          {/* 
            Para usar, substitua os caminhos abaixo pelos arquivos do seu build Unity:
            - loaderUrl: caminho para o arquivo .loader.js
            - dataUrl: caminho para o arquivo .data
            - frameworkUrl: caminho para o arquivo .framework.js
            - codeUrl: caminho para o arquivo .wasm
          */}

          {/* Exemplo comentado - descomente e ajuste os caminhos quando tiver o build Unity
          <UnityWebGL
            loaderUrl="/unity/Build/YourGame.loader.js"
            dataUrl="/unity/Build/YourGame.data"
            frameworkUrl="/unity/Build/YourGame.framework.js"
            codeUrl="/unity/Build/YourGame.wasm"
            className="my-8"
            height="700px"
          />
          */}

          <div className="border border-green-200 rounded-lg p-8 bg-white text-center">
            <p className="text-green-700">
              Adicione seus arquivos de build Unity em <code className="bg-green-50 px-2 py-1 rounded">public/unity/</code> e descomente o componente acima
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-darker mb-4">
            Configuração do Build Unity
          </h2>
          <div className="space-y-3 text-sm text-green-700">
            <p>
              <strong>1. No Unity Editor:</strong> File → Build Settings → WebGL → Build
            </p>
            <p>
              <strong>2. Estrutura de pastas:</strong>
            </p>
            <pre className="bg-white p-3 rounded border border-green-200 text-xs overflow-x-auto">
              {`public/
  unity/
    Build/
      YourGame.loader.js
      YourGame.data
      YourGame.framework.js
      YourGame.wasm`}
            </pre>
            <p>
              <strong>3. Configurações recomendadas:</strong> Compression Format: Gzip ou Brotli para melhor performance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

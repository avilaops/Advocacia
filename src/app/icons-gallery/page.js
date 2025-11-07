import IconGalleryGrid from "@/components/IconGalleryGrid";
import { InfoCircle, Star } from "iconoir-react";

export const metadata = {
  title: "Galeria de Ícones | Gonzales & Pitondo",
  description: "Todos os ícones Iconoir disponíveis no projeto",
};

const iconList = [
  { name: "Hammer", category: "Jurídico" },
  { name: "Group", category: "Jurídico" },
  { name: "DollarCircle", category: "Jurídico" },
  { name: "Bank", category: "Jurídico" },
  { name: "LockSquare", category: "Jurídico" },
  { name: "HomeSimple", category: "Jurídico" },
  { name: "Car", category: "Jurídico" },
  { name: "ChatLines", category: "Comunicação" },
  { name: "Phone", category: "Comunicação" },
  { name: "Mail", category: "Comunicação" },
  { name: "Calendar", category: "Organização" },
  { name: "Clock", category: "Organização" },
  { name: "MapPin", category: "Localização" },
  { name: "User", category: "Perfil" },
  { name: "BadgeCheck", category: "Perfil" },
  { name: "CheckCircle", category: "Status" },
  { name: "InfoCircle", category: "Status" },
  { name: "WarningTriangle", category: "Status" },
  { name: "Check", category: "Status" },
  { name: "ArrowRight", category: "Navegação" },
  { name: "Menu", category: "Navegação" },
  { name: "Search", category: "Navegação" },
  { name: "Settings", category: "Ações" },
  { name: "Bell", category: "Ações" },
  { name: "Heart", category: "Ações" },
  { name: "Star", category: "Ações" },
  { name: "ShareIos", category: "Ações" },
  { name: "Download", category: "Ações" },
  { name: "Upload", category: "Ações" },
  { name: "Edit", category: "Ações" },
  { name: "Trash", category: "Ações" },
  { name: "Plus", category: "Ações" },
  { name: "Minus", category: "Ações" },
  { name: "Eye", category: "Ações" },
  { name: "Lock", category: "Segurança" },
  { name: "LockSlash", category: "Segurança" },
  { name: "RefreshDouble", category: "Sistema" },
];

const categories = [...new Set(iconList.map(icon => icon.category))];

export default function IconsGallery() {
  return (
    <div className="space-y-12">
      <section className="bg-green-darker text-offwhite py-16 px-6 md:px-12 rounded-lg">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <Star width={32} height={32} strokeWidth={1.5} />
            <h1 className="text-3xl md:text-4xl font-semibold">Galeria de Ícones Iconoir</h1>
          </div>
          <p className="text-lg text-green-100">
            Ícones lineares premium, estilo Apple, ideais para design minimalista
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <InfoCircle width={24} height={24} strokeWidth={1.5} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h2 className="font-semibold text-green-darker">Como usar</h2>
                <div className="text-sm text-green-700 space-y-1">
                  <p>1. Importe o ícone: <code className="bg-green-100 px-2 py-0.5 rounded">import {`{ IconName }`} from &quot;iconoir-react&quot;;</code></p>
                  <p>2. Use no JSX: <code className="bg-green-100 px-2 py-0.5 rounded">{`<IconName width={20} height={20} strokeWidth={1.5} />`}</code></p>
                  <p>3. Personalize: adicione <code className="bg-green-100 px-2 py-0.5 rounded">className</code> para cores e estilos</p>
                </div>
              </div>
            </div>
          </div>

          {categories.map(category => {
            const categoryIcons = iconList.filter(icon => icon.category === category);
            return (
              <div key={category} className="space-y-6">
                <h2 className="text-2xl font-semibold text-green-darker border-b border-green-200 pb-2">
                  {category}
                </h2>
                <IconGalleryGrid icons={categoryIcons} />
              </div>
            );
          })}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Exemplo de Código</h3>
            <pre className="bg-white p-4 rounded border border-blue-200 overflow-x-auto text-sm">
              {`import { ChatLines, Phone, ArrowRight } from &quot;iconoir-react&quot;;

// Tamanho pequeno
<ChatLines width={16} height={16} strokeWidth={1.5} />

// Tamanho médio (padrão)
<Phone width={20} height={20} strokeWidth={1.5} />

// Tamanho grande
<ArrowRight width={32} height={32} strokeWidth={1.5} />

// Com cor personalizada
<ChatLines 
  width={20} 
  height={20} 
  strokeWidth={1.5} 
  className=&quot;text-green-600&quot;
/>`}
            </pre>
          </div>

          <div className="text-center text-sm text-green-600">
            <p>Clique em qualquer ícone para copiar o código de importação</p>
          </div>
        </div>
      </section>
    </div>
  );
}

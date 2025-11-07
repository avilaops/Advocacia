# 🎨 Guia Rápido - Ícones Iconoir

## Importação

```javascript
import { IconName } from "iconoir-react";
```

## Uso Básico

```jsx
<IconName width={20} height={20} strokeWidth={1.5} />
```

## Com Estilo

```jsx
<IconName 
  width={24} 
  height={24} 
  strokeWidth={1.5} 
  className="text-green-600"
/>
```

## Ícones Mais Usados no Projeto

### Jurídico
```javascript
import { 
  Scale,          // Inventário e Partilha
  Group,          // Família e Guarda
  DollarCircle,   // Cobranças
  Bank,           // Bancário
  LockSquare,     // Execução Penal
  HomeSimple,     // Imobiliário
  Car             // Acidente de Trânsito
} from "iconoir-react";
```

### Comunicação
```javascript
import { 
  ChatLines,      // WhatsApp/Chat
  Phone,          // Telefone
  Mail            // E-mail
} from "iconoir-react";
```

### Navegação
```javascript
import { 
  ArrowRight,     // Seta direita
  Menu,           // Menu hamburguer
  MapPin          // Localização
} from "iconoir-react";
```

### Organização
```javascript
import { 
  Calendar,       // Agendamento
  Clock           // Horário
} from "iconoir-react";
```

### Interface
```javascript
import { 
  CheckCircle,    // Confirmação/Sucesso
  InfoCircle,     // Informação
  User,           // Perfil/Usuário
  Badge           // OAB/Credencial
} from "iconoir-react";
```

## Tamanhos Recomendados

| Contexto | Width/Height | StrokeWidth |
|----------|-------------|-------------|
| Ícone pequeno (inline) | 16px | 1.5 |
| Ícone médio (botões) | 20px | 1.5 |
| Ícone grande (cards) | 24px | 1.5 |
| Ícone destaque | 28-32px | 1.5 |
| Ícone hero | 48px+ | 1.5 |

## Cores do Projeto

```css
text-green-darker   /* #0f2f24 - Principal */
text-green-600      /* Verde médio */
text-green-700      /* Verde escuro texto */
text-gold           /* #c9a349 - Destaque */
text-offwhite       /* #f8f7f3 - Claro */
```

## Exemplos Práticos

### Botão com Ícone
```jsx
<button className="flex items-center gap-2">
  <ChatLines width={20} height={20} strokeWidth={1.5} />
  WhatsApp
</button>
```

### Card com Ícone
```jsx
<div className="flex items-start gap-3">
  <div className="p-2 bg-green-50 rounded-lg">
    <Scale width={24} height={24} strokeWidth={1.5} className="text-green-darker" />
  </div>
  <div>
    <h3>Inventário e Partilha</h3>
    <p>Descrição...</p>
  </div>
</div>
```

### Lista com Ícones
```jsx
<ul className="space-y-2">
  <li className="flex items-start gap-2">
    <CheckCircle width={18} height={18} strokeWidth={1.5} className="text-green-600 flex-shrink-0 mt-0.5" />
    <span>Item da lista</span>
  </li>
</ul>
```

## Galeria Completa

Acesse `/icons-gallery` para ver todos os ícones disponíveis e copiar o código de importação.

## Recursos

- 📚 [Documentação Iconoir](https://iconoir.com/)
- 🎨 [Galeria Completa](https://iconoir.com/support)
- 💻 [GitHub Iconoir React](https://github.com/iconoir-icons/iconoir-react)

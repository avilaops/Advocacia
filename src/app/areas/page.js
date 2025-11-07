import {
  ScaleFrameEnlarge,
  Group,
  DollarCircle,
  Bank,
  LockSquare,
  HomeSimple,
  Car,
  ChatLines,
  CheckCircle
} from "iconoir-react";

export const metadata = {
  title: "Áreas de Atuação | Gonzales & Pitondo",
  description: "Inventário, família, cobranças, bancário, penal, imobiliário e acidentes.",
};

const blocos = [
  {
    grupo: "Família e Sucessões",
    icon: ScaleFrameEnlarge,
    itens: [
      {
        titulo: "Inventário e Partilha",
        bullets: [
          "Abertura de inventário.",
          "Regularização de bens do falecido.",
          "Partilha entre herdeiros.",
          "Resolução de conflito familiar sobre divisão de patrimônio.",
        ],
        anchor: "inventario",
      },
      {
        titulo: "Divórcio, Guarda e Pensão",
        bullets: [
          "Definição de guarda dos filhos.",
          "Definição ou revisão de pensão.",
          "Divórcio consensual ou litigioso.",
          "Acordos formais para evitar disputa futura.",
        ],
        anchor: "familia",
      },
    ],
    chamada:
      "Antes de assinar qualquer termo de acordo familiar ou partilha de bens, solicite orientação jurídica.",
  },
  {
    grupo: "Cível e Cobranças",
    icon: DollarCircle,
    itens: [
      {
        titulo: "Cobranças e Execução de Títulos",
        bullets: [
          "Cobrança de dívida reconhecida.",
          "Ação de execução de cheque ou contrato.",
          "Pedido de bloqueio judicial de valores em contas bancárias.",
          "Penhora de bens.",
        ],
        anchor: "cobrancas",
      },
      {
        titulo: "Práticas Abusivas",
        bullets: [
          "Contestação de cláusulas abusivas.",
          "Defesa contra cobranças indevidas.",
          "Medidas para suspender desconto indevido.",
        ],
        anchor: "abusivas",
      },
    ],
  },
  {
    grupo: "Bancário e Juros Abusivos",
    icon: Bank,
    itens: [
      {
        titulo: "Contratos e Juros",
        bullets: [
          "Revisão de juros considerados abusivos.",
          "Conferência técnica do contrato com parâmetros oficiais do Banco Central.",
          "Ação judicial para reduzir encargos e recalcular parcelas.",
        ],
        anchor: "bancario",
      },
    ],
  },
  {
    grupo: "Penal / Execução Penal",
    icon: LockSquare,
    itens: [
      {
        titulo: "Acompanhamento Penal",
        bullets: [
          "Acompanhamento de execução de pena.",
          "Direitos do réu preso ou em regime.",
          "Pedidos de progressão de regime e benefícios.",
          "Acompanhamento de audiências.",
        ],
        anchor: "penal",
      },
    ],
    chamada: "Atendimento sigiloso e direto com o advogado.",
  },
  {
    grupo: "Imobiliário e Locação",
    icon: HomeSimple,
    itens: [
      {
        titulo: "Locação e Contratos",
        bullets: [
          "Elaboração e revisão de contratos de locação.",
          "Conflitos entre locador e locatário.",
          "Despejo por falta de pagamento.",
          "Garantias contratuais.",
          "Contratos de compra e venda de imóvel.",
        ],
        anchor: "imobiliario",
      },
    ],
  },
  {
    grupo: "Acidente de Trânsito",
    icon: Car,
    itens: [
      {
        titulo: "Responsabilidade e Indenização",
        bullets: [
          "Indenização por danos materiais e morais.",
          "Discussão de culpa e responsabilidade.",
          "Negociação com seguradora.",
          "Prova documental e laudo.",
        ],
        anchor: "acidente",
      },
    ],
  },
];

export default function AreasPage() {
  return (
    <div className="px-6 md:px-12 pb-24 space-y-16 max-w-7xl mx-auto">
      <header className="pt-10 md:pt-4 space-y-2">
        <h1 className="text-3xl font-semibold text-green-darker">Áreas de Atuação</h1>
        <p className="text-green-700 max-w-2xl text-sm md:text-base leading-relaxed">
          Linguagem direta e informativa sobre as principais situações em que atuamos. Para orientação inicial, explique sua situação pelo WhatsApp.
        </p>
      </header>
      {blocos.map((bloco) => {
        const IconComponent = bloco.icon;
        return (
          <section key={bloco.grupo} className="space-y-8" id={bloco.grupo.toLowerCase().replace(/[^a-zà-ú0-9]/gi, "-")}>
            <div className="flex items-center gap-3 border-b border-green-200 pb-2">
              <div className="p-2 bg-green-50 rounded-lg">
                <IconComponent width={28} height={28} strokeWidth={1.5} className="text-green-darker" />
              </div>
              <h2 className="text-2xl font-medium text-green-darker">
                {bloco.grupo}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {bloco.itens.map((item) => (
                <div
                  key={item.titulo}
                  id={item.anchor}
                  className="rounded-lg border border-green-200 bg-white p-6 shadow-sm space-y-4"
                >
                  <h3 className="font-medium text-green-darker">{item.titulo}</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle width={18} height={18} strokeWidth={1.5} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {bloco.chamada && (
              <p className="text-sm text-green-800 bg-green-50 border border-green-200 rounded-md p-4">
                {bloco.chamada}
              </p>
            )}
          </section>
        );
      })}
      <div className="bg-green-darker text-offwhite rounded-lg p-8 space-y-4 mt-4">
        <p className="text-lg font-medium">
          Explique sua situação. Receba orientação jurídica inicial com descrição dos próximos passos e documentos necessários.
        </p>
        <a
          href="https://wa.me/5517981058013"
          className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition"
        >
          WhatsApp agora
        </a>
      </div>
    </div>
  );
}

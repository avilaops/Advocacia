import Link from "next/link";

const situacoes = [
  {
    titulo: "Inventário e Partilha",
    texto:
      "Abertura de inventário e regularização de bens da família. Acompanhamento completo até a partilha.",
    slug: "areas#inventario",
  },
  {
    titulo: "Família e Guarda",
    texto:
      "Divórcio, guarda dos filhos, pensão alimentícia. Explicamos seus direitos antes de qualquer assinatura.",
    slug: "areas#familia",
  },
  {
    titulo: "Cobranças e Execução de Título",
    texto:
      "Ação de cobrança de cheques, notas promissórias e contratos. Penhora de valores e bloqueio de bens.",
    slug: "areas#cobrancas",
  },
  {
    titulo: "Juros Abusivos / Bancário",
    texto:
      "Análise de contratos bancários e financiamento. Contestação de juros abusivos e práticas abusivas.",
    slug: "areas#bancario",
  },
  {
    titulo: "Execução Penal",
    texto:
      "Acompanhamento em execução de pena e questões de regime. Atuação técnica e sigilosa.",
    slug: "areas#penal",
  },
  {
    titulo: "Locação e Imobiliário",
    texto:
      "Contratos de locação, despejo, inadimplência, conflitos entre locador e locatário. Elaboração de contratos.",
    slug: "areas#imobiliario",
  },
  {
    titulo: "Acidente de Trânsito",
    texto:
      "Indenização por dano material e moral. Responsabilidade civil e negociação com seguradoras.",
    slug: "areas#acidente",
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="bg-green-darker text-offwhite py-20 px-6 md:px-12 rounded-lg shadow-sm">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Advocacia Cível, Família, Penal e Imobiliário
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-green-100">
            Orientação jurídica imediata em inventário, divórcio, cobranças, revisão de juros, locação e execução penal. Atendimento sigiloso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/5517981058013"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition"
            >
              WhatsApp agora
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-gold font-medium hover:bg-gold/10 transition"
            >
              Agendar horário presencial
            </Link>
          </div>
          <p className="text-sm text-green-200 pt-4">
            Rua Rio Negro, 2044. Suporte emergencial em situações urgentes.
          </p>
        </div>
      </section>

      {/* Principais situações */}
      <section className="px-6 md:px-12" id="situacoes">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-green-darker">
            Principais situações em que atuamos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {situacoes.map((s) => (
              <Link
                key={s.titulo}
                href={`/${s.slug}`}
                className="group border border-green-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-medium text-green-darker group-hover:text-green-800">
                  {s.titulo}
                </h3>
                <p className="text-sm text-green-700 mt-2 leading-relaxed">
                  {s.texto}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento rápido e sigiloso */}
      <section className="px-6 md:px-12" id="atendimento">
        <div className="max-w-5xl mx-auto bg-white border border-green-200 rounded-lg p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-green-darker">
            Atendimento rápido e sigiloso
          </h2>
          <p className="text-green-700 leading-relaxed">
            Cada situação jurídica tem consequência prática imediata. Nosso trabalho é orientar de forma clara, preservar provas, e assumir o procedimento quando necessário.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
            <li>Atendimento presencial e remoto.</li>
            <li>Canal direto via WhatsApp para dúvidas iniciais.</li>
            <li>Acompanhamento pelo mesmo advogado responsável pelo caso.</li>
            <li>Sigilo absoluto.</li>
          </ul>
          <div>
            <a
              href="https://wa.me/5517981058013"
              className="inline-flex items-center justify-center rounded-md bg-green-darker px-6 py-3 text-offwhite font-medium hover:bg-green-900 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sobre o escritório */}
      <section className="px-6 md:px-12" id="sobre">
        <div className="max-w-5xl mx-auto space-y-4 bg-white border border-green-200 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-green-darker">Sobre o escritório</h2>
          <p className="text-green-700 leading-relaxed">
            Gonzales & Pitondo é um escritório que atua em Direito de Família e Sucessões, Cível, Bancário, Penal e Direito Imobiliário.
          </p>
          <p className="text-green-700 leading-relaxed">
            Atendemos questões como inventário, partilha de bens, execução de dívidas, análise de contratos e locação de imóveis, além de acompanhamento de execução penal e defesa em casos criminais.
          </p>
          <p className="text-green-700 leading-relaxed">
            O objetivo é orientar de forma direta, proteger o patrimônio e resguardar direitos do cliente.
          </p>
        </div>
      </section>

      {/* Endereço e contato */}
      <section className="px-6 md:px-12" id="endereco">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 bg-green-darker text-offwhite rounded-lg p-8">
          <div>
            <h3 className="font-semibold mb-2">Endereço</h3>
            <p className="text-sm leading-relaxed">
              Rua Rio Negro, 2044<br />Votuporanga - SP
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm leading-relaxed">(17) 98105-8013</p>
          </div>
            <div>
            <h3 className="font-semibold mb-2">Horário</h3>
            <p className="text-sm leading-relaxed">
              Atendimento em horário comercial.<br />Atuação emergencial em casos específicos.
            </p>
          </div>
          <div className="md:col-span-3 pt-4">
            <a
              href="https://wa.me/5517981058013"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition"
            >
              Falar agora no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

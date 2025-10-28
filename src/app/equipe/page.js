export const metadata = {
  title: "Equipe | Gonzales & Pitondo",
  description: "Perfil profissional dos advogados com áreas principais de atuação.",
};

const equipe = [
  {
    nome: "Advogado 1",
    oab: "OAB/SP 000000",
    texto:
      "Atuação em Direito de Família e Sucessões, Direito Cível e Execução de Títulos. Foco em resolução de conflitos patrimoniais e proteção de bens de família.",
  },
  {
    nome: "Advogado 2",
    oab: "OAB/SP 000000",
    texto:
      "Atuação em Direito Penal e Execução Penal, e em Direito Bancário e Revisional. Atuação em urgência e acompanhamento contínuo.",
  },
];

export default function EquipePage() {
  return (
    <div className="px-6 md:px-12 pb-24 max-w-6xl mx-auto space-y-12">
      <header className="pt-10 md:pt-4 space-y-2">
        <h1 className="text-3xl font-semibold text-green-darker">Equipe</h1>
        <p className="text-green-700 max-w-2xl text-sm md:text-base leading-relaxed">
          Apresentação objetiva dos profissionais. Sem linguagem de promessa ou garantias de resultado.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {equipe.map((p) => (
          <div
            key={p.nome}
            className="rounded-lg border border-green-200 bg-white p-6 shadow-sm space-y-3"
          >
            <div className="h-32 w-full rounded-md bg-green-100 flex items-center justify-center text-green-600 text-sm">
              Foto profissional (placeholder)
            </div>
            <h2 className="font-medium text-green-darker">{p.nome}</h2>
            <p className="text-xs text-green-600">{p.oab}</p>
            <p className="text-sm text-green-700 leading-relaxed">{p.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

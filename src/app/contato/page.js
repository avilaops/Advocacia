"use client";

import { ChatLines, Calendar, Phone, Mail } from "iconoir-react";

export default function ContatoPage() {
  return (
    <div className="px-6 md:px-12 pb-24 max-w-4xl mx-auto space-y-12">
      <header className="pt-10 md:pt-4 space-y-2">
        <h1 className="text-3xl font-semibold text-green-darker">Contato</h1>
        <p className="text-green-700 max-w-2xl text-sm md:text-base leading-relaxed">
          Dois fluxos claros: urgência via WhatsApp ou agendamento de consulta presencial.
        </p>
      </header>
      <section className="space-y-6">
        <div className="rounded-lg border border-green-200 bg-green-darker p-6 text-offwhite space-y-3">
          <div className="flex items-center gap-3">
            <ChatLines width={24} height={24} strokeWidth={1.5} />
            <h2 className="text-xl font-medium">Questão urgente</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Use o canal direto para orientação inicial em situações que exigem ação rápida.
          </p>
          <a
            href="https://wa.me/5517981058013"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition"
          >
            <ChatLines width={20} height={20} strokeWidth={1.5} />
            WhatsApp agora
          </a>
        </div>
        <div className="rounded-lg border border-green-200 bg-white p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Calendar width={24} height={24} strokeWidth={1.5} className="text-green-darker" />
            <h2 className="text-xl font-medium text-green-darker">Agendar consulta no escritório</h2>
          </div>
          <p className="text-sm text-green-700 leading-relaxed">
            Preencha os dados para retorno. (Em primeiro deploy pode ser substituído por link direto para WhatsApp.)
          </p>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const nome = fd.get("nome");
              const telefone = fd.get("telefone");
              const assunto = fd.get("assunto");
              const texto = encodeURIComponent(
                `Olá, meu nome é ${nome}. Gostaria de agendar consulta sobre: ${assunto}. Telefone: ${telefone}`
              );
              window.location.href = `https://wa.me/5517981058013?text=${texto}`;
            }}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="nome" className="text-sm font-medium text-green-darker">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                required
                className="rounded-md border border-green-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-darker bg-offwhite"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="telefone" className="text-sm font-medium text-green-darker">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                required
                className="rounded-md border border-green-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-darker bg-offwhite"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="assunto" className="text-sm font-medium text-green-darker">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                required
                className="rounded-md border border-green-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-darker bg-offwhite"
              >
                <option value="Inventário">Inventário</option>
                <option value="Família">Família</option>
                <option value="Cível">Cível</option>
                <option value="Penal">Penal</option>
                <option value="Imobiliário">Imobiliário</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 justify-center rounded-md bg-green-darker px-6 py-3 text-offwhite font-medium hover:bg-green-900 transition"
            >
              <ChatLines width={20} height={20} strokeWidth={1.5} />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

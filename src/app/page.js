'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ScaleFrameEnlarge,
  Group,
  DollarCircle,
  Bank,
  LockSquare,
  HomeSimple,
  Car,
  ChatLines,
  ArrowRight,
  MapPin,
  Clock
} from "iconoir-react";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsCounter from "@/components/StatsCounter";

const situacoes = [
  {
    titulo: "Inventário e Partilha",
    texto:
      "Abertura de inventário e regularização de bens da família. Acompanhamento completo até a partilha.",
    slug: "areas#inventario",
    icon: ScaleFrameEnlarge,
  },
  {
    titulo: "Família e Guarda",
    texto:
      "Divórcio, guarda dos filhos, pensão alimentícia. Explicamos seus direitos antes de qualquer assinatura.",
    slug: "areas#familia",
    icon: Group,
  },
  {
    titulo: "Cobranças e Execução de Título",
    texto:
      "Ação de cobrança de cheques, notas promissórias e contratos. Penhora de valores e bloqueio de bens.",
    slug: "areas#cobrancas",
    icon: DollarCircle,
  },
  {
    titulo: "Juros Abusivos / Bancário",
    texto:
      "Análise de contratos bancários e financiamento. Contestação de juros abusivos e práticas abusivas.",
    slug: "areas#bancario",
    icon: Bank,
  },
  {
    titulo: "Execução Penal",
    texto:
      "Acompanhamento em execução de pena e questões de regime. Atuação técnica e sigilosa.",
    slug: "areas#penal",
    icon: LockSquare,
  },
  {
    titulo: "Locação e Imobiliário",
    texto:
      "Contratos de locação, despejo, inadimplência, conflitos entre locador e locatário. Elaboração de contratos.",
    slug: "areas#imobiliario",
    icon: HomeSimple,
  },
  {
    titulo: "Acidente de Trânsito",
    texto:
      "Indenização por dano material e moral. Responsabilidade civil e negociação com seguradoras.",
    slug: "areas#acidente",
    icon: Car,
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* ChatBot Flutuante */}
      <ChatBot />

      {/* Hero com Animação */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-green-darker text-offwhite py-20 px-6 md:px-12 rounded-lg shadow-sm relative overflow-hidden"
      >
        {/* Decoração de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-800 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            <TypeAnimation
              sequence={[
                'Advocacia Cível, Família, Penal e Imobiliário',
                3000,
                'Defenda seus direitos com quem entende',
                3000,
                'Soluções jurídicas rápidas e eficazes',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl text-green-100"
          >
            Orientação jurídica imediata em inventário, divórcio, cobranças, revisão de juros, locação e execução penal. Atendimento sigiloso.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5517981058013"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition shadow-lg"
            >
              <ChatLines width={20} height={20} strokeWidth={1.5} />
              WhatsApp agora
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gold px-6 py-3 text-gold font-medium hover:bg-gold/10 transition"
              >
                Agendar horário presencial
                <ArrowRight width={20} height={20} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-green-200 pt-4"
          >
            Rua Rio Negro, 2044. Suporte emergencial em situações urgentes.
          </motion.p>
        </div>
      </motion.section>

      {/* Principais situações */}
      <section className="px-6 md:px-12" id="situacoes">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-green-darker"
          >
            Principais situações em que atuamos
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {situacoes.map((s, index) => {
              const IconComponent = s.icon;
              return (
                <motion.div
                  key={s.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                >
                  <Link
                    href={`/${s.slug}`}
                    className="group border border-green-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition block h-full"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="flex-shrink-0 p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent width={24} height={24} strokeWidth={1.5} className="text-green-darker" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-medium text-green-darker group-hover:text-green-800">
                          {s.titulo}
                        </h3>
                        <p className="text-sm text-green-700 mt-2 leading-relaxed">
                          {s.texto}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
              className="inline-flex items-center gap-2 justify-center rounded-md bg-green-darker px-6 py-3 text-offwhite font-medium hover:bg-green-900 transition"
            >
              <ChatLines width={20} height={20} strokeWidth={1.5} />
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

      {/* Timeline do Processo */}
      <ProcessTimeline />

      {/* Contador de Estatísticas */}
      <StatsCounter />

      {/* FAQ Interativo */}
      <FAQ />

      {/* Endereço e contato */}
      <section className="px-6 md:px-12" id="endereco">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 bg-green-darker text-offwhite rounded-lg p-8">
          <div className="flex items-start gap-3">
            <MapPin width={20} height={20} strokeWidth={1.5} className="mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-sm leading-relaxed">
                Rua Rio Negro, 2044<br />Votuporanga - SP
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ChatLines width={20} height={20} strokeWidth={1.5} className="mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm leading-relaxed">(17) 98105-8013</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock width={20} height={20} strokeWidth={1.5} className="mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Horário</h3>
              <p className="text-sm leading-relaxed">
                Atendimento em horário comercial.<br />Atuação emergencial em casos específicos.
              </p>
            </div>
          </div>
          <div className="md:col-span-3 pt-4">
            <a
              href="https://wa.me/5517981058013"
              className="inline-flex items-center gap-2 justify-center rounded-md bg-gold px-6 py-3 text-green-darker font-medium hover:bg-gold/90 transition"
            >
              <ChatLines width={20} height={20} strokeWidth={1.5} />
              Falar agora no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

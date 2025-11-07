'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Timer, Page, HandCash } from 'iconoir-react';

const etapas = [
    {
        numero: 1,
        titulo: 'Contato Inicial',
        descricao: 'Entre em contato via WhatsApp ou agende consulta. Orientação inicial imediata.',
        icon: CheckCircle,
        duracao: 'Imediato',
    },
    {
        numero: 2,
        titulo: 'Análise do Caso',
        descricao: 'Avaliação detalhada da situação, documentos e estratégia jurídica adequada.',
        icon: Page,
        duracao: '1-3 dias',
    },
    {
        numero: 3,
        titulo: 'Proposta e Aceite',
        descricao: 'Apresentação de honorários, custos e prazos. Contrato transparente e claro.',
        icon: HandCash,
        duracao: '1 dia',
    },
    {
        numero: 4,
        titulo: 'Atuação Jurídica',
        descricao: 'Início dos procedimentos. Acompanhamento constante com o mesmo advogado.',
        icon: Timer,
        duracao: 'Conforme o caso',
    },
];

export default function ProcessTimeline() {
    return (
        <section className="px-6 md:px-12 py-16 bg-white">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-green-darker">
                        Como Funciona
                    </h2>
                    <p className="text-green-700 max-w-2xl mx-auto">
                        Processo claro e transparente do primeiro contato até a solução do seu caso.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Linha vertical */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -ml-px" />

                    {/* Etapas */}
                    <div className="space-y-12">
                        {etapas.map((etapa, index) => {
                            const IconComponent = etapa.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col md:gap-8`}
                                >
                                    {/* Conteúdo */}
                                    <div className={`md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} w-full`}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-3xl font-bold text-green-600">{etapa.numero}</span>
                                                <div className="h-px flex-1 bg-green-200" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-green-darker mb-2">
                                                {etapa.titulo}
                                            </h3>
                                            <p className="text-green-700 text-sm leading-relaxed mb-3">
                                                {etapa.descricao}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                                <Timer width={14} height={14} strokeWidth={1.5} />
                                                {etapa.duracao}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Ícone central */}
                                    <div className="md:w-2/12 flex justify-center my-4 md:my-0">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                            className="bg-green-darker text-offwhite p-4 rounded-full shadow-lg z-10 relative"
                                        >
                                            <IconComponent width={32} height={32} strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Espaço vazio */}
                                    <div className="hidden md:block md:w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-8"
                >
                    <a
                        href="https://wa.me/5517981058013"
                        className="inline-flex items-center gap-2 bg-green-darker text-offwhite px-8 py-4 rounded-lg font-medium hover:bg-green-900 transition shadow-lg hover:shadow-xl"
                    >
                        <CheckCircle width={20} height={20} strokeWidth={1.5} />
                        Iniciar meu processo agora
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

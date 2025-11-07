'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavArrowDown, CheckCircle } from 'iconoir-react';

const faqs = [
    {
        categoria: 'Inventário e Sucessões',
        perguntas: [
            {
                pergunta: 'Quanto tempo demora um inventário?',
                resposta: 'O prazo varia conforme a complexidade. Inventários consensuais podem ser finalizados em 3-6 meses. Casos com conflitos podem levar mais tempo. Acompanhamos cada etapa para garantir agilidade.',
            },
            {
                pergunta: 'Posso fazer inventário extrajudicial?',
                resposta: 'Sim, quando todos os herdeiros são maiores e capazes, há acordo entre todos, e não há testamento. É mais rápido e econômico que o judicial.',
            },
            {
                pergunta: 'Quais documentos preciso para iniciar?',
                resposta: 'Certidão de óbito, documentos pessoais de todos os herdeiros, certidão de casamento do falecido, documentos dos bens (imóveis, veículos, contas bancárias).',
            },
        ],
    },
    {
        categoria: 'Família e Divórcio',
        perguntas: [
            {
                pergunta: 'Posso me divorciar sem advogado?',
                resposta: 'Apenas em casos consensuais, sem filhos menores e sem bens a partilhar, através do cartório. Nos demais casos, é necessário advogado.',
            },
            {
                pergunta: 'Como funciona a guarda compartilhada?',
                resposta: 'Ambos os pais mantêm responsabilidades sobre os filhos. A criança pode residir com um dos pais, mas decisões importantes são tomadas em conjunto.',
            },
            {
                pergunta: 'A pensão alimentícia é obrigatória?',
                resposta: 'Sim, quando há filhos menores. O valor é definido conforme as necessidades da criança e possibilidades do alimentante, geralmente entre 20-30% dos rendimentos.',
            },
        ],
    },
    {
        categoria: 'Bancário e Juros',
        perguntas: [
            {
                pergunta: 'Como sei se os juros são abusivos?',
                resposta: 'Comparamos as taxas do seu contrato com as médias do Banco Central. Juros muito acima da média do mercado podem ser considerados abusivos.',
            },
            {
                pergunta: 'Posso renegociar meu contrato?',
                resposta: 'Sim. Podemos revisar judicialmente contratos com taxas abusivas, recalcular parcelas e até recuperar valores pagos a mais.',
            },
            {
                pergunta: 'Vale a pena revisar financiamento antigo?',
                resposta: 'Sim. Contratos antigos frequentemente têm taxas muito acima do atual mercado. A revisão pode gerar economia significativa.',
            },
        ],
    },
    {
        categoria: 'Honorários e Custos',
        perguntas: [
            {
                pergunta: 'Como funcionam os honorários?',
                resposta: 'Variam conforme a complexidade do caso. Oferecemos avaliação inicial gratuita via WhatsApp para apresentar um orçamento transparente.',
            },
            {
                pergunta: 'Posso parcelar os honorários?',
                resposta: 'Sim, trabalhamos com parcelamento em casos específicos. As condições são discutidas na consulta inicial.',
            },
            {
                pergunta: 'Há custos além dos honorários?',
                resposta: 'Sim, custas judiciais, perícias e outras despesas processuais. Informamos todos os custos antes de iniciar.',
            },
        ],
    },
];

export default function FAQ() {
    const [categoriaAtiva, setCategoriaAtiva] = useState(0);
    const [perguntaAtiva, setPerguntaAtiva] = useState(null);

    return (
        <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-green-darker">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-green-700 max-w-2xl mx-auto">
                        Respostas rápidas para as dúvidas mais comuns. Para casos específicos, entre em contato.
                    </p>
                </motion.div>

                {/* Categorias */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {faqs.map((cat, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setCategoriaAtiva(index);
                                setPerguntaAtiva(null);
                            }}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${categoriaAtiva === index
                                    ? 'bg-green-darker text-offwhite shadow-lg'
                                    : 'bg-white text-green-darker border border-green-200 hover:border-green-400'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat.categoria}
                        </motion.button>
                    ))}
                </div>

                {/* Perguntas */}
                <motion.div
                    key={categoriaAtiva}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    {faqs[categoriaAtiva].perguntas.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setPerguntaAtiva(perguntaAtiva === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-green-50 transition"
                            >
                                <span className="font-medium text-green-darker pr-4">{faq.pergunta}</span>
                                <motion.div
                                    animate={{ rotate: perguntaAtiva === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <NavArrowDown width={24} height={24} strokeWidth={1.5} className="text-green-600 flex-shrink-0" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {perguntaAtiva === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-green-700 leading-relaxed flex items-start gap-3">
                                            <CheckCircle width={20} height={20} strokeWidth={1.5} className="text-green-600 flex-shrink-0 mt-1" />
                                            <p>{faq.resposta}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-green-darker text-offwhite rounded-xl p-8"
                >
                    <h3 className="text-xl font-semibold mb-3">Não encontrou sua resposta?</h3>
                    <p className="text-green-100 mb-6">Entre em contato e responderemos sua dúvida específica.</p>
                    <a
                        href="https://wa.me/5517981058013"
                        className="inline-flex items-center gap-2 bg-gold text-green-darker px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition"
                    >
                        Falar com advogado
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

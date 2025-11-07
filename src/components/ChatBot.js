'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChatLines, Send, XmarkCircle, ChatBubbleQuestion } from 'iconoir-react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        id: 'inicio',
        pergunta: 'Olá! Sou o assistente virtual do escritório Gonzales & Pitondo. Como posso ajudar você hoje?',
        opcoes: [
            { texto: 'Preciso de um advogado', proximo: 'area' },
            { texto: 'Quero saber sobre custos', proximo: 'custos' },
            { texto: 'Agendar consulta', proximo: 'agendar' },
        ],
    },
    {
        id: 'area',
        pergunta: 'Em qual área você precisa de orientação jurídica?',
        opcoes: [
            { texto: 'Inventário e Partilha', proximo: 'inventario' },
            { texto: 'Família e Divórcio', proximo: 'familia' },
            { texto: 'Cobranças e Dívidas', proximo: 'cobrancas' },
            { texto: 'Bancário/Juros', proximo: 'bancario' },
            { texto: 'Penal', proximo: 'penal' },
            { texto: 'Imobiliário', proximo: 'imobiliario' },
        ],
    },
    {
        id: 'inventario',
        pergunta: 'Entendo. Para casos de inventário e partilha de bens, oferecemos acompanhamento completo. A situação é urgente?',
        opcoes: [
            { texto: 'Sim, é urgente', proximo: 'whatsapp' },
            { texto: 'Não é urgente', proximo: 'agendar' },
        ],
    },
    {
        id: 'familia',
        pergunta: 'Questões familiares requerem atenção especial. Podemos ajudar com divórcio, guarda e pensão. Prefere atendimento imediato?',
        opcoes: [
            { texto: 'Sim, preciso falar agora', proximo: 'whatsapp' },
            { texto: 'Prefiro agendar', proximo: 'agendar' },
        ],
    },
    {
        id: 'cobrancas',
        pergunta: 'Para cobranças e execução de títulos, atuamos com agilidade. Você precisa cobrar ou está sendo cobrado?',
        opcoes: [
            { texto: 'Preciso cobrar alguém', proximo: 'whatsapp' },
            { texto: 'Estou sendo cobrado', proximo: 'whatsapp' },
        ],
    },
    {
        id: 'bancario',
        pergunta: 'Revisão de contratos bancários e juros abusivos. Vamos analisar seu caso. Gostaria de enviar o contrato para análise?',
        opcoes: [
            { texto: 'Sim, quero enviar', proximo: 'whatsapp' },
            { texto: 'Ainda não tenho', proximo: 'agendar' },
        ],
    },
    {
        id: 'penal',
        pergunta: 'Atuamos com total sigilo em casos penais. A situação requer atendimento emergencial?',
        opcoes: [
            { texto: 'Sim, é emergencial', proximo: 'whatsapp' },
            { texto: 'Não, posso aguardar', proximo: 'agendar' },
        ],
    },
    {
        id: 'imobiliario',
        pergunta: 'Contratos, locação e questões imobiliárias. Qual é a natureza do problema?',
        opcoes: [
            { texto: 'Problemas com locação', proximo: 'whatsapp' },
            { texto: 'Contrato de compra/venda', proximo: 'agendar' },
        ],
    },
    {
        id: 'custos',
        pergunta: 'Os honorários variam conforme a complexidade do caso. Para um orçamento preciso, precisamos entender melhor sua situação. Prefere contato imediato?',
        opcoes: [
            { texto: 'Sim, falar agora', proximo: 'whatsapp' },
            { texto: 'Agendar conversa', proximo: 'agendar' },
        ],
    },
    {
        id: 'whatsapp',
        pergunta: 'Perfeito! Vou direcioná-lo para nosso WhatsApp onde um advogado poderá atendê-lo imediatamente.',
        final: true,
        acao: 'whatsapp',
    },
    {
        id: 'agendar',
        pergunta: 'Ótimo! Vou direcioná-lo para nossa página de agendamento onde você pode escolher o melhor horário.',
        final: true,
        acao: 'contato',
    },
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [mensagens, setMensagens] = useState([]);
    const [questaoAtual, setQuestaoAtual] = useState('inicio');
    const messagesEndRef = useRef(null);

    const handleOpenChat = useCallback(() => {
        if (!isOpen) {
            if (mensagens.length === 0) {
                const primeiraPergunta = questions.find(q => q.id === 'inicio');
                if (primeiraPergunta) {
                    setMensagens([{ tipo: 'bot', texto: primeiraPergunta.pergunta }]);
                    setQuestaoAtual('inicio');
                }
            }
            setIsOpen(true);
        }
    }, [isOpen, mensagens.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensagens]);

    const handleResposta = (opcao) => {
        // Adiciona resposta do usuário
        setMensagens(prev => [...prev, { tipo: 'user', texto: opcao.texto }]);

        // Encontra próxima questão
        const proximaQuestao = questions.find(q => q.id === opcao.proximo);

        setTimeout(() => {
            setMensagens(prev => [...prev, { tipo: 'bot', texto: proximaQuestao.pergunta }]);
            setQuestaoAtual(opcao.proximo);

            // Se for final, executa ação
            if (proximaQuestao.final) {
                setTimeout(() => {
                    if (proximaQuestao.acao === 'whatsapp') {
                        window.open('https://wa.me/5517981058013', '_blank');
                    } else if (proximaQuestao.acao === 'contato') {
                        window.location.href = '/contato';
                    }
                }, 1500);
            }
        }, 800);
    };

    const questaoAtualObj = questions.find(q => q.id === questaoAtual);

    return (
        <>
            {/* Botão Flutuante */}
            <motion.button
                onClick={handleOpenChat}
                className={`fixed bottom-6 right-6 z-50 bg-green-darker text-offwhite p-4 rounded-full shadow-2xl hover:bg-green-900 transition-all ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <ChatBubbleQuestion width={24} height={24} strokeWidth={1.5} />
                <span className="hidden md:inline text-sm font-medium">Precisa de ajuda?</span>
            </motion.button>            {/* Modal do Chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-full max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-200">
                            {/* Header */}
                            <div className="bg-green-darker text-offwhite p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-800 p-2 rounded-full">
                                        <ChatBubbleQuestion width={24} height={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Assistente Virtual</h3>
                                        <p className="text-xs text-green-200">Online agora</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-green-800 p-2 rounded-full transition"
                                >
                                    <XmarkCircle width={24} height={24} strokeWidth={1.5} />
                                </button>
                            </div>                            {/* Mensagens */}
                            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-green-50">
                                {mensagens.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.tipo === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-lg ${msg.tipo === 'user'
                                                ? 'bg-green-darker text-offwhite rounded-br-none'
                                                : 'bg-white text-green-darker rounded-bl-none border border-green-200'
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.texto}</p>
                                        </div>
                                    </motion.div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Opções */}
                            {questaoAtualObj && !questaoAtualObj.final && (
                                <div className="p-4 bg-white border-t border-green-200 space-y-2">
                                    {questaoAtualObj.opcoes.map((opcao, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleResposta(opcao)}
                                            className="w-full text-left p-3 rounded-lg border border-green-200 hover:bg-green-50 hover:border-green-400 transition text-sm text-green-darker"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {opcao.texto}
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

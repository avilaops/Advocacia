'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { StatsUpSquare, Group, Page, Star } from 'iconoir-react';

const stats = [
    {
        icon: StatsUpSquare,
        valor: 500,
        sufixo: '+',
        label: 'Casos Atendidos',
        cor: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: Group,
        valor: 98,
        sufixo: '%',
        label: 'Satisfação dos Clientes',
        cor: 'text-gold',
        bg: 'bg-yellow-50',
    },
    {
        icon: Page,
        valor: 15,
        sufixo: '+',
        label: 'Anos de Experiência',
        cor: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: Star,
        valor: 24,
        sufixo: 'h',
        label: 'Atendimento Emergencial',
        cor: 'text-purple-600',
        bg: 'bg-purple-50',
    },
];

function AnimatedCounter({ value, duration = 2 }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}</span>;
}

export default function StatsCounter() {
    return (
        <section className="px-6 md:px-12 py-16 bg-gradient-to-br from-green-darker via-green-900 to-green-darker text-offwhite relative overflow-hidden">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Números que Falam
                    </h2>
                    <p className="text-green-100 max-w-2xl mx-auto">
                        Resultados concretos construídos com dedicação, ética e compromisso com nossos clientes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-gold/50 transition-all"
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <IconComponent width={32} height={32} strokeWidth={1.5} className="text-gold" />
                                </motion.div>

                                <div className="text-4xl md:text-5xl font-bold mb-2 text-gold">
                                    <AnimatedCounter value={stat.valor} />
                                    {stat.sufixo}
                                </div>

                                <p className="text-sm text-green-100 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-green-200 mb-6 text-sm">
                        * Dados acumulados desde 2010. Atendemos com a mesma dedicação em cada caso.
                    </p>
                    <a
                        href="https://wa.me/5517981058013"
                        className="inline-flex items-center gap-2 bg-gold text-green-darker px-8 py-4 rounded-lg font-medium hover:bg-gold/90 transition shadow-xl hover:shadow-2xl"
                    >
                        Seja o próximo caso de sucesso
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

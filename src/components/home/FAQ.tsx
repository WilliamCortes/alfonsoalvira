import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import content from '../../data/content.json';

const FAQ: React.FC = () => {
    const { faq } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden" id="faq">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Resolvemos tus Dudas
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Todo lo que necesitas saber antes de agendar tu cita con Don Alfonso Alvira, terapeuta especialista en columna en Villavicencio.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-3">
                        {faq.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`group rounded-2xl border transition-all duration-300 ${isOpen
                                            ? 'border-green-200 bg-green-50/50 shadow-md shadow-green-100/50'
                                            : 'border-gray-100 bg-white hover:border-green-100 hover:shadow-sm'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="flex items-start gap-3 sm:gap-4 min-w-0">
                                            <span
                                                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold transition-colors duration-300 ${isOpen
                                                        ? 'bg-green-600 text-white'
                                                        : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-700'
                                                    }`}
                                            >
                                                {index + 1}
                                            </span>
                                            <h3
                                                className={`font-bold text-base sm:text-lg leading-snug transition-colors duration-300 ${isOpen ? 'text-green-800' : 'text-gray-800'
                                                    }`}
                                            >
                                                {item.question}
                                            </h3>
                                        </span>
                                        <span
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                                                    ? 'bg-green-600 text-white rotate-180'
                                                    : 'bg-gray-100 text-gray-400 group-hover:bg-green-100 group-hover:text-green-600'
                                                }`}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </span>
                                    </button>

                                    <div
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-5 sm:px-6 pb-6 pl-16 sm:pl-[4.5rem]">
                                            <p className="text-gray-600 leading-relaxed text-base">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 text-center">
                        <div className="bg-gradient-to-r from-green-50 via-white to-green-50 border border-green-100 rounded-2xl p-6 sm:p-8">
                            <p className="text-gray-700 mb-1 font-medium">
                                ¿Tienes otra pregunta?
                            </p>
                            <p className="text-gray-500 text-sm mb-5">
                                Don Alfonso te responderá personalmente por WhatsApp
                            </p>
                            <a
                                href="https://wa.me/573202168589?text=Hola,%20tengo%20una%20pregunta%20sobre%20las%20terapias%20de%20Don%20Alfonso."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Preguntar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

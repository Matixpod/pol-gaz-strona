"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "Jakie marki pieców i kotłów gazowych naprawiacie?",
    answer: "Specjalizujemy się głównie w serwisie kotłów Beretta (jesteśmy oficjalnym Ambasadorem marki). Dodatkowo z powodzeniem i autoryzacją naprawiamy oraz serwisujemy urządzenia takich marek jak: Junkers, Buderus, Vaillant, Unical i Saunier Duval."
  },
  {
    question: "Jaki jest wasz obszar dojazdu do klienta?",
    answer: "Nasza główna siedziba znajduje się w Szczecinie, natomiast świadczymy usługi serwisowe w promieniu do 60 km wokół miasta. Regularnie dojeżdżamy do awarii m.in. w Policach, Goleniowie, Gryfinie oraz Stargardzie."
  },
  {
    question: "Jak długo czekam na przyjazd serwisanta w przypadku nagłej awarii?",
    answer: "Na terenie Szczecina staramy się reagować natychmiast, a czas oczekiwania na przyjazd serwisanta podczas nagłej awarii wynosi średnio od 1 do 3 godzin. Działamy z priorytetem dla sytuacji awaryjnych, gdzie ogrzewanie jest w 100% wyłączone."
  },
  {
    question: "Czy wykonujecie roczne przeglądy techniczne kotłów?",
    answer: "Tak, regularne, coroczne przeglądy techniczne są absolutną koniecznością dla zachowania gwarancji, bezpieczeństwa domowników i niskiego zużycia gazu. Oferujemy pełne przeglądy z diagnostyką i diagnozowaniem szczelności."
  },
  {
    question: "Od jak dawna działacie na rynku zachodniopomorskim?",
    answer: "Zajmujemy się kotłami od 1994 roku. Posiadamy 32-letnie doświadczenie z nieustannie unowocześnianymi na drodze autoryzacji umiejętnościami. Założyciel, Wojciech Podporski, przez ten czas zrealizował ponad 37 000 udanych napraw i wizyt kontrolnych."
  },
  {
    question: "Czy wykonujecie również montaż i wymianę pieców gazowych?",
    answer: "Tak, oprócz serwisu prowadzimy również profesjonalny montaż nowych pieców gazowych. Wymieniamy wysłużone urządzenia na nowoczesne, energooszczędne kotły. Oferujemy także doradztwo w doborze sprzętu odpowiedniego do metrażu i instalacji budynku."
  },
  {
    question: "Czy serwisujecie również kotły kondensacyjne?",
    answer: "Oczywiście, nowoczesne kotły kondensacyjne stanowią obecnie większość serwisowanych przez nas urządzeń ze względu na ekologię i wytyczne unijne. Posiadamy sprzęt pomiarowy dedykowany wysoce skomplikowanej automatyce tych urządzeń."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq" aria-label="Sekcja FAQ">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 text-lg">
            Zebraliśmy najważniejsze pytania naszych klientów w jednym miejscu, byś szybko odnalazł kluczowe informacje.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-blue-900 text-lg pr-8">
                  {faq.question}
                </span>
                <span 
                  className={`transform transition-transform duration-300 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 ${openIndex === index ? 'rotate-180 text-yellow-500' : 'text-blue-900'}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  <span className="block pt-4">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Nie znalazłeś odpowiedzi na swoje pytanie?</h3>
          <p className="text-gray-600 mb-6">Wojciech Podporski, właściciel, darmowo skonsultuje Twój problem przez telefon.</p>
          <a 
            href="tel:601418645" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-md"
          >
            Zadzwoń teraz: 601 418 645
          </a>
        </div>
      </div>
    </section>
  );
}
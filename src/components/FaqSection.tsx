"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "How does Dyad's AI assistance work?",
      answer: "Dyad analyzes your code context and provides real-time suggestions, component generation, and automated implementations based on best practices."
    },
    {
      question: "Is Dyad suitable for beginners?",
      answer: "Absolutely! Dyad is designed to help developers of all skill levels. Beginners get guided assistance while experts save time on repetitive tasks."
    },
    {
      question: "Can I use Dyad with my existing projects?",
      answer: "Yes, Dyad integrates seamlessly with existing React projects. Just install our Vite plugin and start getting AI-powered assistance."
    },
    {
      question: "What's included in the free tier?",
      answer: "Our free tier includes basic AI assistance, access to core components, and community support. Paid plans unlock advanced features and priority support."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400">
              Everything you need to know about getting started with Dyad.
            </p>
          </div>
          
          <div className="w-full max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
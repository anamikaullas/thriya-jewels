import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "Can I track my order?",
      answer: "No, we don't provide tracking at this time. After you place your order via WhatsApp, our team will keep you updated on the status. For delivery details, please contact us directly at +91 9995133495."
    },
    {
      category: "General",
      question: "Is this jewellery suitable for daily wear?",
      answer: "Yes, our jewelry collection is designed to be worn daily. Each piece is crafted with care to withstand regular wear. We recommend following our care guidelines—store pieces separately, avoid harsh chemicals, and remove jewelry before swimming or bathing to keep them looking beautiful for years."
    },
    {
      category: "General",
      question: "How can I place my order?",
      answer: "You can place your order through WhatsApp at +91 9995133495. Simply browse our collection on the website, choose the pieces you love, and message us via WhatsApp. Our team will assist you with the complete ordering process."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in bg-[#fcf9f4] min-h-screen">
      {/* Header */}
      <section className="py-24 text-center bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-4">Help Center</p>
          <h1 className="serif italic text-5xl text-gray-900">Frequently Asked Questions</h1>
          <div className="w-12 h-[1px] bg-[#e2b4b4] mx-auto mt-8"></div>
          <p className="text-sm text-gray-600 mt-8 max-w-2xl mx-auto">
            Find answers to common questions about our jewelry, ordering process, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {category}
            </h2>
            <div className="space-y-4">
              {faqs
                .map((faq, index) => ({ ...faq, originalIndex: index }))
                .filter(faq => faq.category === category)
                .map(({ question, answer, originalIndex }) => (
                  <div
                    key={originalIndex}
                    className="bg-white rounded-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFAQ(originalIndex)}
                      className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-[#fdf8f8] transition-colors"
                    >
                      <span className="text-sm md:text-base font-medium text-gray-900 pr-4">
                        {question}
                      </span>
                      {openIndex === originalIndex ? (
                        <ChevronUp size={20} className="flex-shrink-0 text-[#e2b4b4]" />
                      ) : (
                        <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === originalIndex ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 md:px-8 pb-6 text-sm text-gray-600 leading-relaxed">
                        {answer}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="serif italic text-3xl text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto">
            Our concierge team is here to help. Reach out via WhatsApp for immediate assistance or email us for detailed inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919995133495"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#20bd5a] transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:thriyajewels@gmail.com"
              className="px-8 py-4 bg-[#333] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

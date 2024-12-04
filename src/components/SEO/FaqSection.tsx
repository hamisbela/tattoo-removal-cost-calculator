import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "How much does tattoo removal typically cost?",
    answer: "Tattoo removal costs typically range from $200 to $500 per treatment session. The total cost depends on factors like size, colors, location, and the number of sessions needed. Most people require 6-12 sessions for complete removal."
  },
  {
    question: "How many sessions will I need?",
    answer: [
      "The number of sessions required varies based on several factors:",
      "• Tattoo size and density",
      "• Colors used (black is easiest to remove)",
      "• Age of the tattoo",
      "• Your skin type",
      "• The type of removal method used"
    ]
  },
  {
    question: "Does tattoo removal hurt?",
    answer: "Most people experience some discomfort during tattoo removal. The sensation is often described as similar to having a rubber band snapped against your skin. Many clinics offer numbing options to minimize discomfort during treatment."
  },
  {
    question: "What affects the cost of tattoo removal?",
    answer: "Several factors influence the cost: tattoo size, number of colors, location on the body, age of the tattoo, your skin type, the removal method used, and the expertise of the practitioner. Professional removal in medical settings typically costs more but offers safer, more effective results."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
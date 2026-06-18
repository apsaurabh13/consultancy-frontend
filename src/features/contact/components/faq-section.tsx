"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our team typically responds within 24 hours during business days. For urgent inquiries, we recommend contacting support directly.",
  },
  {
    question: "How do consultations work?",
    answer:
      "Browse consultants, choose an expert that matches your needs, book a session, and connect through our platform for personalized guidance.",
  },
  {
    question: "Can I become a consultant on ConsultEdge?",
    answer:
      "Yes. Professionals with relevant experience can apply to join our network. Applications are reviewed before approval.",
  },
  {
    question: "Are all consultants verified?",
    answer:
      "Yes. Every consultant goes through a verification and review process to ensure quality, professionalism, and trust.",
  },
  {
    question: "What industries do you support?",
    answer:
      "We currently support technology, business, finance, legal, career development, and other professional consulting domains.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We prioritize privacy and security and follow industry best practices to protect user data and communications.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}

        <div className="text-center">
          <span
            className="
            inline-flex
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-slate-300
            "
          >
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Got Questions?
            <span
              className="
              block
              bg-gradient-to-r
              from-violet-400
              via-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              We've Got Answers
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Find answers to the most common questions about
            ConsultEdge and our consultation platform.
          </p>
        </div>

        {/* FAQ */}

        <div
          className="
          mt-12
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-4
          sm:p-6
          "
        >
          <Accordion
            
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger
                  className="
                  text-left
                  text-base
                  font-medium
                  text-white
                  hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                  text-sm
                  leading-7
                  text-slate-400
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
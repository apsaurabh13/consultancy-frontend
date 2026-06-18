"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ConsultEdge pricing work?",
    answer:
      "ConsultEdge uses a wallet-based model. Add funds to your wallet, choose a consultant, and pay only for the consultation time you use.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "No. There are no monthly or annual subscription fees. You only pay for the consultations you use.",
  },
  {
    question: "How are consultation charges calculated?",
    answer:
      "Each consultant sets their own per-minute rate. Charges are deducted from your wallet based on the duration of the consultation.",
  },
  {
    question: "Can I use my wallet balance with any consultant?",
    answer:
      "Yes. Your wallet balance can be used across all consultants available on the platform.",
  },
  {
    question: "Will I see the consultant's rate before starting?",
    answer:
      "Absolutely. Every consultant profile clearly displays their consultation rate before you begin a session.",
  },
  {
    question: "Do wallet credits expire?",
    answer:
      "No. Wallet credits remain available in your account until they are used.",
  },
  {
    question: "Can I add more funds during a consultation?",
    answer:
      "Yes. If your balance is running low, you can add more funds and continue your consultation without interruption.",
  },
  {
    question: "Are payments secure?",
    answer:
      "Yes. All transactions are processed through secure payment gateways and follow industry-standard security practices.",
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
            Pricing FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Frequently Asked
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
              Questions
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Everything you need to know about wallet credits,
            consultation pricing, and payments.
          </p>
        </div>

        {/* FAQ Card */}

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
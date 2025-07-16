
type FAQsItem = {
  question: string;
  answer: string;
}

import FAQsButton from "@/components/FAQsButton";
import {
  Header,
  Footer,
} from '@/components'

export default function FAQsPage() {

    const items: FAQsItem[] = [
        {
            question: "What is TradeFlow?",
            answer: "TradeFlow is a quoting app built specifically for tradespeople such as builders, electricians, plumbers, mechanics etc. It helps you create, send, and manage professional quotes quickly and easily",
        },
        {
            question: "Who is TradeFlow for?",
            answer: "TradeFlow is designed for anyone working in the trades, such as self-employed tradesmen, small business owners, or even larger teams. If you quote jobs, TradeFlow is for you.",
        },
        {
            question: "How long does it take to create a quote?",
            answer: "You can generate a fully itemised, professional quote in under 2 minutes. Select tasks, add materials, and send ... it’s that simple.",
        },
        {
            question: "Can I save and reuse common job templates?",
            answer: "Yes! You can save frequently used tasks, materials, and entire quote templates for instant reuse.",
        },
        {
            question: "Can I save and reuse returning customers?",
            answer: "Yes! You can save recurring customers for instant reuse",
        },
        {
            question: "Can I customise my quotes?",
            answer: "Absolutely. You can customise your logo, business details, terms & conditions, and even tweak line items per job.",
        },
        {
            question: "Do I need to be tech-savvy to use it?",
            answer: "Not at all. TradeFlow is built to be simple, fast, and intuitive. No training required.",
        },
        {
            question: "Is TradeFlow free?",
            answer: "Yes, TradeFlow is completely free to use. With the free version, you can save 1 quote template and up to 3 customer profiles.",
        },
        {
            question: "What do I get if I upgrade?",
            answer: "Upgrading unlocks unlimited templates, unlimited customers, advanced features like quote analytics, job tracking, and more. It's designed for tradespeople who want to level up their workflow.",
        },
        {
            question: "Can I try the paid features before upgrading?",
            answer: "Yes — we offer a free trial of the Pro version so you can test out all the premium features before committing.",
        },
        {
            question: "Can I downgrade from the paid version later?",
            answer: "Yes, you can downgrade anytime. If you do, you'll still keep access to your existing quotes, but you’ll only be able to actively use 1 template and 3 customer slots.",
        },
        {
            question: "Who is the Pro plan for?",
            answer: "The Pro plan is perfect for tradesmen who quote regularly, want to save time with reusable templates, manage a growing customer base, and get insights from analytics.",
        },
        {
            question: "I found a bug — how do I report it?",
            answer: "You can report bugs via the in-app contact form or by emailing us directly. Please include screenshots if possible!",
        }
    ];


  return(
    <div className="w-full flex flex-col bg-blue-200 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Frequently Asked Questions</h2>

      <FAQsButton items={items}/>
      <Footer />
    </div>
  );
}

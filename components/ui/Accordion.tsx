'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('space-y-3', className)} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `accordion-trigger-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={index}
            role="listitem"
            className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] overflow-hidden transition-all duration-300 hover:border-accent-blue/20"
          >
            <button
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-sora font-semibold text-text-primary pr-4">
                {item.question}
              </span>
              <span
                className={cn(
                  'text-accent-blue text-xl transition-transform duration-300 flex-shrink-0',
                  isOpen && 'rotate-45'
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

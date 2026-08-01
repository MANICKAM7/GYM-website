import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item-wrapper ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question-row">
        <span className="faq-num">{(index + 1).toString().padStart(2, '0')}</span>
        <h4 className="faq-question">{faq.question}</h4>
        <div className="faq-toggle">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-container"
          >
            <div className="faq-answer-content">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

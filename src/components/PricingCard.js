import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingCard({ plan, billingCycle, index }) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const period = billingCycle === 'monthly' ? 'mo' : 'yr';
  const savings = billingCycle === 'yearly' ? plan.monthlyPrice * 12 - plan.yearlyPrice : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card pricing-card ${plan.popular ? 'popular-tier' : ''}`}
    >
      {plan.popular && <span className="popular-badge">Most Popular</span>}
      
      <div className="pricing-header">
        <h3 className="pricing-title">{plan.name}</h3>
        <div className="pricing-cost">
          <span className="currency">$</span>
          <span className="price">{price}</span>
          <span className="period">/{period}</span>
        </div>
        {savings > 0 && <span className="savings-tag">Save ${savings}/yr</span>}
      </div>

      <ul className="pricing-features">
        {plan.features.map((feature, idx) => (
          <li key={idx} className={feature.available ? 'available' : 'unavailable'}>
            {feature.available ? (
              <Check className="feature-icon check" size={16} />
            ) : (
              <X className="feature-icon x" size={16} />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-footer">
        <button className={`btn-plan ${plan.popular ? 'btn-neon' : 'btn-outline'}`}>
          Choose {plan.name}
        </button>
      </div>
    </motion.div>
  );
}

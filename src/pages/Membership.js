import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import { ShieldCheck, HelpCircle } from 'lucide-react';

const plansData = [
  { 
    name: "Iron Basic", 
    monthlyPrice: 29, 
    yearlyPrice: 20, 
    popular: false, 
    features: [
      { text: "Access to Gym Floor", available: true },
      { text: "Standard Locker access", available: true },
      { text: "1 Group Class per week", available: true },
      { text: "Bio-metric tracking login", available: false },
      { text: "Sauna & Steam room access", available: false },
      { text: "Personal Coach guidance", available: false }
    ] 
  },
  { 
    name: "Pulse Standard", 
    monthlyPrice: 49, 
    yearlyPrice: 35, 
    popular: true, 
    features: [
      { text: "Access to Gym Floor", available: true },
      { text: "Standard Locker access", available: true },
      { text: "Unlimited Group Classes", available: true },
      { text: "Bio-metric tracking login", available: true },
      { text: "Sauna & Steam room access", available: true },
      { text: "1 PT Session per month", available: false }
    ] 
  },
  { 
    name: "Elite Premium", 
    monthlyPrice: 79, 
    yearlyPrice: 55, 
    popular: false, 
    features: [
      { text: "Access to Gym Floor", available: true },
      { text: "Standard Locker access", available: true },
      { text: "Unlimited Group Classes", available: true },
      { text: "Bio-metric tracking login", available: true },
      { text: "Sauna & Steam room access", available: true },
      { text: "Weekly PT Guided Sessions", available: true }
    ] 
  }
];

const faqsData = [
  { question: "Can I cancel or freeze my membership?", answer: "Yes! Standard and Elite plans can freeze membership for up to 30 days per calendar year. Cancellations can be requested with a 15-day notice before your next billing cycle." },
  { question: "Is there an sign-up or enrollment fee?", answer: "No, we believe in transparent pricing. There are no enrollment fees or hidden administrative charges when you sign up online." },
  { question: "Do you offer guest passes for friends?", answer: "Yes! Standard members receive 1 guest pass per month, and Elite members receive 3 complimentary guest passes monthly." },
  { question: "Can I access other location branches?", answer: "Absolutely. Standard and Elite plans include nationwide roaming access to all 12+ IronPulse facilities at no extra cost." }
];

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly

  return (
    <div className="page-container membership-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      {/* Pricing Header */}
      <section className="pricing-header-section section-padding text-center">
        <span className="section-subtitle">MEMBERSHIPS</span>
        <h1 className="section-title text-neon">CHOOSE YOUR SUBSCRIPTION</h1>
        <p className="pricing-desc">
          Select a flexible plan that aligns with your athletic requirements. Choose yearly billing for major discounts.
        </p>

        {/* Toggle Switch */}
        <div className="billing-toggle-container flex-center">
          <span className={`toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
          <div 
            className="toggle-switch-track" 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <div className={`toggle-switch-handle ${billingCycle === 'yearly' ? 'yearly-active' : ''}`}></div>
          </div>
          <span className={`toggle-label ${billingCycle === 'yearly' ? 'active' : ''}`}>
            Yearly <span className="discount-badge">Save ~30%</span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="cards-grid pricing-cards-grid">
          {plansData.map((plan, idx) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              billingCycle={billingCycle} 
              index={idx} 
            />
          ))}
        </div>
      </section>

      {/* Features Comparison Matrix */}
      <section className="section-padding comparison-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Features Matrix</span>
          <h2 className="section-title">COMPARE TIER BENEFIT DETAILS</h2>
        </div>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tier Benefits</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Locker Rooms & Shower Access</td>
                <td><ShieldCheck className="text-red" size={18} /></td>
                <td><ShieldCheck className="text-red" size={18} /></td>
                <td><ShieldCheck className="text-red" size={18} /></td>
              </tr>
              <tr>
                <td>Bio-Metric App Login & History Track</td>
                <td>—</td>
                <td><ShieldCheck className="text-red" size={18} /></td>
                <td><ShieldCheck className="text-red" size={18} /></td>
              </tr>
              <tr>
                <td>Sauna / Steam Room Recovery Access</td>
                <td>—</td>
                <td><ShieldCheck className="text-red" size={18} /></td>
                <td><ShieldCheck className="text-red" size={18} /></td>
              </tr>
              <tr>
                <td>Juice Bar & Health Drinks Discount</td>
                <td>—</td>
                <td>10% Off</td>
                <td>20% Off</td>
              </tr>
              <tr>
                <td>Personal Coaching Guidance</td>
                <td>—</td>
                <td>—</td>
                <td>Full Dedicated PT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding faq-section">
        <div className="section-title-wrapper">
          <HelpCircle className="faq-icon-title text-red" size={32} />
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="faq-accordion-wrapper">
          {faqsData.map((faq, idx) => (
            <FAQAccordion key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

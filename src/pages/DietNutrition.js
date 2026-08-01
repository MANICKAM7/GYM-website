import React from 'react';
import CalorieCalculator from '../components/CalorieCalculator';
import { Apple,  GlassWater } from 'lucide-react';

const dietPlans = [
  {
    goal: "Lean Muscle Bulk",
    calories: "Maintenance + 400 kcal",
    split: "40% Carbs | 30% Protein | 30% Fats",
    desc: "Focus on clean complex carbs, healthy fats, and high-quality protein to support muscle growth without gaining excess adipose tissue.",
    meals: [
      { name: "Breakfast", items: "Oats with protein powder, banana slices, and peanut butter." },
      { name: "Lunch", items: "Grilled chicken breast, jasmine rice, and steamed broccoli." },
      { name: "Snack", items: "Greek yogurt, mixed berries, and handful of almonds." },
      { name: "Dinner", items: "Baked salmon, sweet potatoes, and asparagus." }
    ]
  },
  {
    goal: "Adipose Fat Shred",
    calories: "Maintenance - 500 kcal",
    split: "30% Carbs | 40% Protein | 30% Fats",
    desc: "Designed for a moderate calorie deficit to promote fat burning while maintaining lean skeletal muscle tissue.",
    meals: [
      { name: "Breakfast", items: "Scrambled egg whites, spinach, and whole wheat toast." },
      { name: "Lunch", items: "Turkey wraps with avocado, mixed greens, and tomatoes." },
      { name: "Snack", items: "Whey protein shake with unsweetened almond milk." },
      { name: "Dinner", items: "Lean sirloin steak or tofu, quinoa, and green salad." }
    ]
  }
];

export default function DietNutrition() {
  return (
    <div className="page-container diet-nutrition-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="diet-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">NUTRITIONAL INTEL</span>
          <h1 className="section-title text-neon">DIET & NUTRITION CENTERS</h1>
          <p className="diet-desc">
            Calculate your custom daily energy expenditure and discover structured macro plans aligned to your physical goals.
          </p>
        </div>

        {/* Calorie Calculator Container */}
        <div className="calorie-calculator-container-row">
          <div className="cal-left-column">
            <h2>MACRO & ENERGY ESTIMATOR</h2>
            <p>
              Your training constitutes only 30% of your results; the other 70% is decided in your kitchen. Fill out the daily calorie calculator to receive an estimated profile of your target calorie intake and macronutrient weights (g).
            </p>
            <div className="benefit-bullets">
              <div className="benefit-b">
                <GlassWater size={20} className="text-red" />
                <div>
                  <h4>Optimal Hydration Rule</h4>
                  <p>Target a minimum of 3.5 to 4.5 liters of clean water daily to optimize cell volumization.</p>
                </div>
              </div>
              <div className="benefit-b">
                <Apple size={20} className="text-red" />
                <div>
                  <h4>Micronutrient Densities</h4>
                  <p>Keep 80% of your food sources whole and single-ingredient (organic greens, eggs, fish, oats).</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cal-right-column">
            <CalorieCalculator />
          </div>
        </div>

        {/* Nutritional Diet Plans Matrix */}
        <div className="diet-plans-matrix-section">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Meal Layouts</span>
            <h2 className="section-title">STRUCTURED MEAL SPLITS</h2>
          </div>

          <div className="diet-plans-grid">
            {dietPlans.map((plan, idx) => (
              <div key={idx} className="glass-card diet-plan-card">
                <div className="diet-plan-header">
                  <h3>{plan.goal}</h3>
                  <div className="diet-split-badge">{plan.split}</div>
                </div>
                <p className="diet-plan-desc">{plan.desc}</p>
                <div className="meals-list">
                  {plan.meals.map((meal, mIdx) => (
                    <div key={mIdx} className="meal-row">
                      <span className="meal-name">{meal.name}:</span>
                      <span className="meal-items">{meal.items}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

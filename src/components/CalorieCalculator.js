import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, RefreshCw } from 'lucide-react';

export default function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('1.55'); // default moderate
  const [goal, setGoal] = useState('maintain');
  const [results, setResults] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (!weight || !height || !age) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Mifflin-St Jeor Equation for BMR
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const tdee = bmr * parseFloat(activity);
    
    let target = tdee;
    if (goal === 'lose') {
      target = tdee - 500;
    } else if (goal === 'gain') {
      target = tdee + 400;
    }

    // Macros distribution estimation
    // Maintenance: 40% Carb, 30% Protein, 30% Fat
    // Muscle Gain: 45% Carb, 30% Protein, 25% Fat
    // Weight Loss: 35% Carb, 40% Protein, 25% Fat
    let carbPct = 0.40, proteinPct = 0.30, fatPct = 0.30;
    if (goal === 'lose') {
      carbPct = 0.35; proteinPct = 0.40; fatPct = 0.25;
    } else if (goal === 'gain') {
      carbPct = 0.45; proteinPct = 0.30; fatPct = 0.25;
    }

    const proteinGrams = Math.round((target * proteinPct) / 4);
    const carbGrams = Math.round((target * carbPct) / 4);
    const fatGrams = Math.round((target * fatPct) / 9);

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams
    });
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setResults(null);
  };

  return (
    <div className="glass-card calorie-calculator-card">
      <form onSubmit={calculateCalories} className="calorie-form">
        <div className="form-grid-3">
          <div className="input-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-group">
            <label>Age (years)</label>
            <input 
              type="number" 
              placeholder="e.g. 28" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Height (cm)</label>
            <input 
              type="number" 
              placeholder="e.g. 180" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="form-grid-3">
          <div className="input-group">
            <label>Weight (kg)</label>
            <input 
              type="number" 
              placeholder="e.g. 80" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Activity Level</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value)}>
              <option value="1.2">Sedentary (No exercise)</option>
              <option value="1.375">Light (1-3 days/week)</option>
              <option value="1.55">Moderate (3-5 days/week)</option>
              <option value="1.725">Heavy (6-7 days/week)</option>
              <option value="1.9">Athlete (Twice daily training)</option>
            </select>
          </div>
          <div className="input-group">
            <label>Fitness Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="lose">Lose Weight (Deficit)</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Muscle (Surplus)</option>
            </select>
          </div>
        </div>

        <div className="calorie-actions">
          <button type="submit" className="btn-neon btn-full">
            <Apple size={18} />
            <span>Calculate Calorie Needs</span>
          </button>
          {results && (
            <button type="button" className="btn-outline btn-reset" onClick={handleReset}>
              <RefreshCw size={18} />
            </button>
          )}
        </div>
      </form>

      {results && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="calorie-results-panel"
        >
          <div className="calorie-header-summary">
            <div className="cal-stat-box primary">
              <span className="cal-stat-value">{results.target}</span>
              <span className="cal-stat-label">Daily Target (kcal)</span>
            </div>
            <div className="cal-stat-box">
              <span className="cal-stat-value">{results.tdee}</span>
              <span className="cal-stat-label">Maintenance (TDEE)</span>
            </div>
            <div className="cal-stat-box">
              <span className="cal-stat-value">{results.bmr}</span>
              <span className="cal-stat-label">Base Rate (BMR)</span>
            </div>
          </div>

          <div className="macros-breakdown">
            <h4>Recommended Daily Macro Targets</h4>
            <div className="macros-grid">
              <div className="macro-item protein">
                <span className="macro-val">{results.protein}g</span>
                <span className="macro-label">Protein (4kcal/g)</span>
                <div className="macro-bar"><div className="macro-fill" style={{ width: '40%' }}></div></div>
              </div>
              <div className="macro-item carbs">
                <span className="macro-val">{results.carbs}g</span>
                <span className="macro-label">Carbs (4kcal/g)</span>
                <div className="macro-bar"><div className="macro-fill" style={{ width: '35%' }}></div></div>
              </div>
              <div className="macro-item fats">
                <span className="macro-val">{results.fat}g</span>
                <span className="macro-label">Fats (9kcal/g)</span>
                <div className="macro-bar"><div className="macro-fill" style={{ width: '25%' }}></div></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

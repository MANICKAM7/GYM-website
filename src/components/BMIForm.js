import React, { useState } from 'react';
import { Activity, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BMIForm() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [advice, setAdvice] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    let bmiValue = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (unit === 'metric') {
      // height in cm, weight in kg
      const heightInMeters = h / 100;
      bmiValue = w / (heightInMeters * heightInMeters);
    } else {
      // height in inches, weight in lbs
      bmiValue = (w / (h * h)) * 703;
    }

    const calculatedBmi = parseFloat(bmiValue.toFixed(1));
    setBmi(calculatedBmi);
    determineStatus(calculatedBmi);
  };

  const determineStatus = (val) => {
    if (val < 18.5) {
      setStatus('Underweight');
      setAdvice('We recommend focused strength training and a structured calorie surplus diet to build lean muscle mass safely.');
    } else if (val >= 18.5 && val < 24.9) {
      setStatus('Healthy Weight');
      setAdvice('Excellent! You are in the optimal zone. Maintain your fitness with a balanced split of strength and cardiovascular training.');
    } else if (val >= 25 && val < 29.9) {
      setStatus('Overweight');
      setAdvice('Consider integrating more cardiovascular circuits, high-intensity interval training (HIIT), and a minor calorie deficit.');
    } else {
      setStatus('Obese');
      setAdvice('We advise customized personal training with low-impact cardio, combined with a professional nutritional program.');
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setBmi(null);
    setStatus('');
    setAdvice('');
  };

  return (
    <div className="glass-card bmi-calculator-card">
      <div className="bmi-header-tabs">
        <button 
          type="button" 
          className={`tab-btn ${unit === 'metric' ? 'active' : ''}`}
          onClick={() => { setUnit('metric'); resetForm(); }}
        >
          Metric Units (kg/cm)
        </button>
        <button 
          type="button" 
          className={`tab-btn ${unit === 'imperial' ? 'active' : ''}`}
          onClick={() => { setUnit('imperial'); resetForm(); }}
        >
          Imperial Units (lbs/in)
        </button>
      </div>

      <div className="bmi-form-wrapper">
        <form onSubmit={calculateBMI} className="bmi-actual-form">
          <div className="form-grid-2">
            <div className="input-group">
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Age (yrs)</label>
              <input 
                type="number" 
                placeholder="e.g. 25" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="input-group">
              <label>{unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}</label>
              <input 
                type="number" 
                placeholder={unit === 'metric' ? 'e.g. 175' : 'e.g. 69'} 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label>{unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}</label>
              <input 
                type="number" 
                placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 154'} 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="bmi-actions">
            <button type="submit" className="btn-neon btn-full">
              <Activity size={18} />
              <span>Calculate BMI</span>
            </button>
            {bmi !== null && (
              <button type="button" className="btn-outline btn-reset" onClick={resetForm}>
                <RefreshCw size={18} />
              </button>
            )}
          </div>
        </form>

        {bmi !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bmi-results-panel"
          >
            <div className="results-numbers">
              <div className="bmi-badge-circle">
                <span className="bmi-value-text">{bmi}</span>
                <span className="bmi-label-sub">BMI Score</span>
              </div>
              <div className="bmi-classification">
                <span className="class-title">Status</span>
                <span className={`class-badge ${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
              </div>
            </div>

            <div className="bmi-scale-bar-wrapper">
              <div className="scale-markers">
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
              </div>
              <div className="bmi-scale-bar">
                <div 
                  className="bmi-pointer" 
                  style={{ left: `${Math.min(Math.max((bmi - 15) * 4, 2), 98)}%` }}
                ></div>
                <div className="scale-segment underweight"></div>
                <div className="scale-segment normal"></div>
                <div className="scale-segment overweight"></div>
                <div className="scale-segment obese"></div>
              </div>
            </div>

            <p className="bmi-advice-text">{advice}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

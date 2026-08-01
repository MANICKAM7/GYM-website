import React from 'react';
import BMIForm from '../components/BMIForm';
import {  Zap } from 'lucide-react';

export default function BMICalculatorPage() {
  return (
    <div className="page-container bmi-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="bmi-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">HEALTH ANALYTICS</span>
          <h1 className="section-title text-neon">BODY MASS INDEX (BMI)</h1>
          <p className="bmi-header-desc">
            Calculate your Body Mass Index (BMI) instantly. Understand your starting body weight category to align your caloric splits.
          </p>
        </div>

        <div className="bmi-page-layout">
          {/* Left Column: Information & Chart */}
          <div className="bmi-info-column">
            <h2>WHAT IS BMI & WHY IS IT USEFUL?</h2>
            <p>
              Body Mass Index is a simple mathematical estimation that uses your height and weight to assess whether you carry a healthy amount of total tissue mass. While it doesn't directly measure body fat percentage (since muscle is denser than fat), it serves as a great general baseline for active adults.
            </p>

            <div className="bmi-chart-panel glass-card">
              <h3>BMI CATEGORIES REFERENCE CHART</h3>
              <div className="chart-rows-list">
                <div className="chart-row">
                  <span className="range">&lt; 18.5</span>
                  <span className="label underweight">Underweight</span>
                  <span className="desc">Increased need for muscle-building exercises & high protein intake.</span>
                </div>
                <div className="chart-row">
                  <span className="range">18.5 – 24.9</span>
                  <span className="label normal">Healthy Weight</span>
                  <span className="desc">Ideal starting point for performance and functional longevity.</span>
                </div>
                <div className="chart-row">
                  <span className="range">25.0 – 29.9</span>
                  <span className="label overweight">Overweight</span>
                  <span className="desc">Good candidate for body recomposition: minor deficit & strength lift focus.</span>
                </div>
                <div className="chart-row">
                  <span className="range">30.0 +</span>
                  <span className="label obese">Obese</span>
                  <span className="desc">Advised to start with low-impact cardio, strength work & minor caloric control.</span>
                </div>
              </div>
            </div>

            <div className="bmi-features-benefits">
              <div className="benefit-item">
                {/* <Heart size={20} className="text-red" /> */}
                <span>Optimize cardiovascular stamina by maintaining a healthy weight.</span>
              </div>
              <div className="benefit-item">
                <Zap size={20} className="text-red" />
                <span>Track structural changes in weight alongside specialized coaching.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bmi-form-column">
            <BMIForm />
          </div>
        </div>
      </section>
    </div>
  );
}

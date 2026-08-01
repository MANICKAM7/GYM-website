import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Zap, Target, Clock, ShieldCheck } from 'lucide-react';

const workoutPlansData = {
  strength: {
    title: "Strength & Power Split",
    description: "Designed for progressive overload to maximize muscular strength and power output.",
    badge: "Advanced",
    duration: "60-75 mins/day",
    frequency: "4 Days / Week",
    days: [
      { day: "Day 1", focus: "Upper Body Power", exercises: ["Bench Press (4 sets x 5 reps)", "Barbell Row (4 sets x 6 reps)", "Overhead Press (3 sets x 5 reps)", "Pull Ups (3 sets x Max reps)"] },
      { day: "Day 2", focus: "Lower Body Power", exercises: ["Barbell Squats (4 sets x 5 reps)", "Romanian Deadlifts (3 sets x 8 reps)", "Leg Press (3 sets x 10 reps)", "Calf Raises (4 sets x 15 reps)"] },
      { day: "Day 3", focus: "Rest & Active Recovery", exercises: ["20 mins light walking", "Full body stretching routine", "Mobility drills"] },
      { day: "Day 4", focus: "Upper Body Hypertrophy", exercises: ["Incline DB Press (3 sets x 10 reps)", "Lat Pulldown (3 sets x 10 reps)", "Lateral Raises (4 sets x 12 reps)", "Bicep Curls / Tricep Pushdowns (3 sets x 12 reps)"] }
    ]
  },
  shred: {
    title: "High Intensity Fat Shredder",
    description: "Combines functional resistance with HIIT circuits to elevate metabolic rate and accelerate calorie burn.",
    badge: "Intermediate",
    duration: "45-50 mins/day",
    frequency: "5 Days / Week",
    days: [
      { day: "Day 1", focus: "HIIT Full Body Circuit", exercises: ["Kettlebell Swings (40 sec work / 20 sec rest)", "Burpees (40 sec work)", "Dumbbell Thrusters (40 sec work)", "Plank (60 sec hold) - Repeat 4 rounds"] },
      { day: "Day 2", focus: "LISS & Core Devotion", exercises: ["45 min moderate pace incline treadmill run", "Hanging Leg Raises (3 sets x 15 reps)", "Cable Woodchoppers (3 sets x 15 reps/side)"] },
      { day: "Day 3", focus: "Lower Body Metabolic Circuit", exercises: ["Goblet Squats (4 sets x 12 reps)", "Walking Lunges (3 sets x 15 steps)", "Box Jumps (4 sets x 10 reps)", "Battle Ropes (4 rounds of 30 sec)"] },
      { day: "Day 4", focus: "Rest & Rehydrate", exercises: ["Foam rolling recovery session", "Yoga / Deep breathing exercises"] }
    ]
  },
  lean: {
    title: "Lean Muscle & Tone",
    description: "Focuses on high-volume training and isometric holds to define lines, build endurance, and shape clean muscle definition.",
    badge: "Beginner Friendly",
    duration: "50-60 mins/day",
    frequency: "3 Days / Week",
    days: [
      { day: "Day 1", focus: "Push Focus (Chest, Shoulders, Triceps)", exercises: ["DB Chest Press (3 sets x 12 reps)", "DB Shoulder Press (3 sets x 12 reps)", "Tricep Overhead Extension (3 sets x 15 reps)", "Push-ups (3 sets x Max reps)"] },
      { day: "Day 2", focus: "Pull Focus (Back, Biceps, Core)", exercises: ["Seated Cable Row (3 sets x 12 reps)", "Lat Pulldowns (3 sets x 12 reps)", "DB Hammer Curls (3 sets x 12 reps)", "Russian Twists (3 sets x 20 reps)"] },
      { day: "Day 3", focus: "Rest / Active Recovery", exercises: ["Light core stretching", "15 mins outdoor cycle"] },
      { day: "Day 4", focus: "Legs & Glutes Focus", exercises: ["Bulgarian Split Squats (3 sets x 12 reps/side)", "Glute Bridges (3 sets x 15 reps)", "Leg Curls (3 sets x 12 reps)", "Sumo Squats (3 sets x 15 reps)"] }
    ]
  }
};

export default function WorkoutPlan() {
  const [activePlan, setActivePlan] = useState('strength');
  const plan = workoutPlansData[activePlan];

  return (
    <div className="workout-plans-section">
      <div className="workout-plan-tabs">
        <button 
          className={`workout-tab-btn ${activePlan === 'strength' ? 'active' : ''}`}
          onClick={() => setActivePlan('strength')}
        >
          <Dumbbell size={16} />
          <span>Strength & Power</span>
        </button>
        <button 
          className={`workout-tab-btn ${activePlan === 'shred' ? 'active' : ''}`}
          onClick={() => setActivePlan('shred')}
        >
          <Zap size={16} />
          <span>Fat Shredder</span>
        </button>
        <button 
          className={`workout-tab-btn ${activePlan === 'lean' ? 'active' : ''}`}
          onClick={() => setActivePlan('lean')}
        >
          <Target size={16} />
          <span>Lean Muscle & Tone</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card active-plan-details"
        >
          <div className="plan-details-header">
            <div className="header-left">
              <span className="plan-difficulty-badge">{plan.badge}</span>
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
            <div className="header-right">
              <div className="metric-box">
                <Clock size={16} className="metric-icon" />
                <span>{plan.duration}</span>
              </div>
              <div className="metric-box">
                <ShieldCheck size={16} className="metric-icon" />
                <span>{plan.frequency}</span>
              </div>
            </div>
          </div>

          <div className="plan-days-grid">
            {plan.days.map((dayData, idx) => (
              <div key={idx} className="plan-day-card">
                <div className="day-title-row">
                  <span className="day-tag">{dayData.day}</span>
                  <span className="day-focus">{dayData.focus}</span>
                </div>
                <ul className="day-exercise-list">
                  {dayData.exercises.map((exercise, eIdx) => (
                    <li key={eIdx}>
                      <span className="bullet-dot"></span>
                      <span>{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

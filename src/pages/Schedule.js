import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, Calendar, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const scheduleData = {
  Monday: [
    { time: "07:00 AM - 08:00 AM", class: "Cardio Conditioning", coach: "Sarah Connor", duration: "60 min", room: "Studio A" },
    { time: "09:00 AM - 10:30 AM", class: "Heavy Powerlifting", coach: "Marcus Vane", duration: "90 min", room: "Strength Zone" },
    { time: "05:00 PM - 06:00 PM", class: "Boxing Academy", coach: "David Vance", duration: "60 min", room: "Ring Room" }
  ],
  Tuesday: [
    { time: "08:00 AM - 09:00 AM", class: "Pilates Alignment", coach: "Elena Rostova", duration: "60 min", room: "Mind & Body Room" },
    { time: "10:00 AM - 11:00 AM", class: "Crossfit Circuit", coach: "Marcus Vane", duration: "60 min", room: "Strength Zone" },
    { time: "06:00 PM - 07:00 PM", class: "Cardio Conditioning", coach: "Sarah Connor", duration: "60 min", room: "Studio A" }
  ],
  Wednesday: [
    { time: "07:00 AM - 08:00 AM", class: "Strength Core", coach: "David Vance", duration: "60 min", room: "Strength Zone" },
    { time: "09:00 AM - 10:00 AM", class: "Flex Stability", coach: "Elena Rostova", duration: "60 min", room: "Mind & Body Room" },
    { time: "05:00 PM - 06:00 PM", class: "Boxing Academy", coach: "David Vance", duration: "60 min", room: "Ring Room" }
  ],
  Thursday: [
    { time: "08:00 AM - 09:00 AM", class: "Crossfit Circuit", coach: "Marcus Vane", duration: "60 min", room: "Strength Zone" },
    { time: "04:00 PM - 05:00 PM", class: "Cardio Conditioning", coach: "Sarah Connor", duration: "60 min", room: "Studio A" }
  ],
  Friday: [
    { time: "07:00 AM - 08:30 AM", class: "Heavy Powerlifting", coach: "Marcus Vane", duration: "90 min", room: "Strength Zone" },
    { time: "09:00 AM - 10:00 AM", class: "Pilates Alignment", coach: "Elena Rostova", duration: "60 min", room: "Mind & Body Room" },
    { time: "05:00 PM - 06:00 PM", class: "Boxing Academy", coach: "David Vance", duration: "60 min", room: "Ring Room" }
  ],
  Saturday: [
    { time: "09:00 AM - 10:00 AM", class: "Community Core Run", coach: "Sarah Connor", duration: "60 min", room: "Studio A" },
    { time: "11:00 AM - 12:00 PM", class: "Crossfit Circuit", coach: "Marcus Vane", duration: "60 min", room: "Strength Zone" }
  ],
  Sunday: [
    { time: "10:00 AM - 11:30 AM", class: "Full Recovery Stretching", coach: "Elena Rostova", duration: "90 min", room: "Mind & Body Room" }
  ]
};

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday');
  const classesForDay = scheduleData[activeDay] || [];

  return (
    <div className="page-container schedule-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="schedule-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">TIMETABLE</span>
          <h1 className="section-title text-neon">CLASS SCHEDULE</h1>
          <p className="schedule-desc">
            Organize your week of workouts. Select a day to view active times, rooms, and assigned trainers.
          </p>
        </div>

        {/* Days of Week Tab Buttons */}
        <div className="schedule-days-tabs">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              className={`day-tab-btn ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="schedule-list-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="schedule-day-column"
            >
              {classesForDay.map((cls, idx) => (
                <div key={idx} className="glass-card schedule-class-card">
                  <div className="class-time-badge">
                    <Clock size={16} className="text-red" />
                    <span>{cls.time}</span>
                  </div>
                  
                  <div className="class-main-details">
                    <h3>{cls.class}</h3>
                    <div className="class-coach-room">
                      <div className="detail">
                        <User size={14} className="text-gray" />
                        <span>Coach: {cls.coach}</span>
                      </div>
                      <div className="detail">
                        <Calendar size={14} className="text-gray" />
                        <span>Room: {cls.room}</span>
                      </div>
                    </div>
                  </div>

                  <div className="class-booking-action">
                    <span className="class-duration-info">Duration: {cls.duration}</span>
                    <Link to="/contact" className="btn-neon btn-book-class">
                      <CheckSquare size={16} />
                      <span>Book Slot</span>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

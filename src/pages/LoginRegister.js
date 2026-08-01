import React, { useState } from 'react';
import { Mail, Lock, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginRegister() {
  const [activeTab, setActiveTab] = useState('login'); // login or register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (activeTab === 'register') {
      if (!name) {
        setError('Name is required.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    // Success response
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
    }, 3000);
  };

  return (
    <div className="page-container auth-page flex-center">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <div className="auth-card-wrapper">
        <div className="auth-tabs">
          <button 
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(''); }}
          >
            Sign In
          </button>
          <button 
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setError(''); }}
          >
            Create Account
          </button>
        </div>

        <div className="glass-card auth-card">
          <h2 className="auth-title">
            {activeTab === 'login' ? 'WELCOME BACK' : 'JOIN THE PULSE'}
          </h2>
          <p className="auth-subtitle">
            {activeTab === 'login' ? 'Sign in to access your custom splits.' : 'Sign up to configure nutrition & BMI monitors.'}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <AnimatePresence mode="wait">
              {activeTab === 'register' && (
                <motion.div 
                  key="register-name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="input-group"
                >
                  <label>Full Name</label>
                  <div className="auth-input-icon-wrapper">
                    <User className="input-icon" size={16} />
                    <input 
                      type="text" 
                      placeholder="e.g. Marcus Aurelius" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="input-group">
              <label>Email Address</label>
              <div className="auth-input-icon-wrapper">
                <Mail className="input-icon" size={16} />
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="auth-input-icon-wrapper">
                <Lock className="input-icon" size={16} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'register' && (
                <motion.div 
                  key="register-confirm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="input-group"
                >
                  <label>Confirm Password</label>
                  <div className="auth-input-icon-wrapper">
                    <Lock className="input-icon" size={16} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && <span className="auth-error-msg">{error}</span>}

            <button type="submit" className="btn-neon btn-full btn-auth-submit">
              {activeTab === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          {success && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="auth-success-overlay flex-center"
            >
              <div className="success-content text-center">
                <ShieldCheck size={48} className="text-red animate-bounce" />
                <h3>SUCCESS!</h3>
                <p>
                  {activeTab === 'login' ? 'Authentication approved. Loading panel...' : 'Account successfully registered!'}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

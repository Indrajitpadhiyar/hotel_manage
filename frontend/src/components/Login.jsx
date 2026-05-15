import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setIsLoading(true);
      setTimeout(() => {
        alert("Login Successful");
        localStorage.setItem("user", email);
        setIsLoading(false);
      }, 1500);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D11] via-[#111827] to-[#0B0D11]" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#C8A24B]/10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#0F766E]/15 blur-[120px]"
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full max-w-md mx-4"
        style={{ perspective: '1200px' }}
      >
        <div 
          className="relative rounded-3xl p-10 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(30px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 40px 100px -30px rgba(0,0,0,0.5), 0 0 60px -20px rgba(200,162,75,0.1)'
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer rounded-3xl pointer-events-none opacity-30" />

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C8A24B] to-[#9e7a2e] shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)]"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <h2 className="text-3xl font-bold text-white font-playfair">Welcome Back</h2>
            <p className="text-sm text-white/50 mt-2">Sign in to your QuickStay account</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Email</label>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 focus-within:border-[#C8A24B]/50 focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300">
                <svg className="w-4.5 h-4.5 text-[#C8A24B]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Password</label>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 focus-within:border-[#C8A24B]/50 focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300">
                <svg className="w-4.5 h-4.5 text-[#C8A24B]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </motion.div>

            <div className="flex justify-end">
              <a href="#" className="text-xs text-[#C8A24B]/70 hover:text-[#C8A24B] transition-colors">Forgot password?</a>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              disabled={isLoading}
              className="btn-magnetic w-full rounded-xl py-4 text-sm font-bold text-white transition-all duration-500 bg-gradient-to-r from-[#C8A24B] via-[#d4b35c] to-[#9e7a2e] shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(200,162,75,0.6)] disabled:opacity-70 relative overflow-hidden"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mx-auto"
                />
              ) : 'Sign In'}
            </motion.button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/30">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social login */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </motion.button>

          <p className="text-center text-xs text-white/30 mt-6">
            Don't have an account? <a href="#" className="text-[#C8A24B] hover:text-[#e8d48a] transition-colors">Sign up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
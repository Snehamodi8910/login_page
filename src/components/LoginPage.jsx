import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00BFB3] to-[#008B8B]">
      <div className="w-full max-w-md p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#00BFB3] mb-2">SolarisTech</h1>
            <p className="text-[#96C93D] text-lg">Powering a sustainable future</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#00BFB3] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#00BFB3]/20 focus:border-[#00BFB3] focus:ring-2 focus:ring-[#00BFB3]/20 transition-colors bg-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#00BFB3] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#00BFB3]/20 focus:border-[#00BFB3] focus:ring-2 focus:ring-[#00BFB3]/20 transition-colors bg-white"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#96C93D] focus:ring-[#96C93D] border-[#00BFB3]/20 rounded"
                />
                <label className="ml-2 text-[#00BFB3]">Remember me</label>
              </div>
              <a href="#" className="text-[#00BFB3] hover:text-[#96C93D] transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00BFB3] text-white py-3 rounded-xl font-medium hover:bg-[#96C93D] transition-colors"
            >
              Sign In
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#00BFB3]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#00BFB3]">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-white text-[#00BFB3] py-3 rounded-xl font-medium border-2 border-[#00BFB3]/20 hover:bg-[#00BFB3]/5 transition-colors"
            >
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-[#00BFB3]">
            Don't have an account?{' '}
            <a href="#" className="text-[#96C93D] font-medium hover:text-[#00BFB3] transition-colors">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://kids-backend-production-d9a6.up.railway.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Store logged-in status
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to dashboard
      navigate('/');
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-beige">
      <div className="flex rounded-xl drop-shadow-xl px-8 py-10 w-[80%] lg:w-[330px] xl:w-[400px] bg-[#B1F0F7] font-atma text-white border-white">
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <h1 className="text-xl font-semibold text-[#F09D51]">Login</h1>
            <h1 className="text-[#313638] text-base">to get started</h1>
          </div>

          {/* Inputs */}
          <div className="flex flex-col w-full mt-6 gap-4">
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alishbaJavaid@gmail.com"
                className="block w-full px-4 py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-black focus:border-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="block text-black w-full px-4 text-sm py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

          {/* Continue Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className="w-full hover:bg-[#F09D51]/50 bg-[#F09D51] rounded-full p-2 text-sm text-white flex items-center justify-center"
            >
              Continue
            </button>
          </div>

          {/* Register Link */}
          <div className="w-full flex justify-center mt-6">
            <p className="text-xs font-light">
              New User?{' '}
              <span className="font-semibold text-xs cursor-pointer hover:underline">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

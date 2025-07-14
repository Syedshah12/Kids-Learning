import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUppage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
    setSuccess('');

    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('https://kids-backend-production-d9a6.up.railway.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password,
          confirmPassword
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
      } else {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000);
      }

    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-beige">
      <div className="flex rounded-xl px-8 drop-shadow-xl py-10 w-[80%] lg:w-[350px] xl:w-[400px] bg-[#B1F0F7] font-atma text-white border-white">
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <h1 className="text-xl font-semibold text-[#F09D51]">Signup</h1>
            <h1 className="text-[#313638] text-base">to get started</h1>
          </div>

          {/* Inputs */}
          <div className="flex flex-col w-full mt-6 gap-4">
            <div className="w-full">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full px-4 text-black py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="alishbaJavaid@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 text-black py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 text-black py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 text-black py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Error / Success Messages */}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

          {/* Continue Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className="w-full hover:bg-[#F09D51]/90 bg-[#F09D51] rounded-full p-2 text-sm text-white flex items-center justify-center"
            >
              Continue
            </button>
          </div>

          {/* Login Link */}
          <div className="w-full flex justify-center mt-6">
            <p className="text-xs font-light">
              Already registered?{' '}
              <span className="font-semibold text-xs cursor-pointer hover:underline">
                <Link to={'/login'}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUppage;

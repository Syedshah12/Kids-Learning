import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-beige">
      <div className="flex rounded-xl drop-shadow-xl px-8 py-10 w-[80%] lg:w-[330px] xl:w-[400px] bg-[#B1F0F7] font-atma text-white border-white">
        <form className="w-full">
          <div>
            <h1 className="text-xl font-semibold text-[#F09D51]">Login</h1>
            <h1 className="text-[#313638] text-base">to get started</h1>
          </div>

          {/* Inputs */}
          <div className="flex flex-col w-full mt-6 gap-4">
            <div className="w-full">
              <input
                type="email"
                placeholder="alishbaJavaid@gmail.com"
                className="block w-full px-4 py-2 border text-sm border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="block w-full px-4 text-sm py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

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
                <Link to={'/register'}>
                  Register
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

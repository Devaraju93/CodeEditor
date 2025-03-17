import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5
                bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white
            "
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5
                bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white
            "
          placeholder="*******"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-[#3B82F6] font-medium rounded-lg
                   text-sm px-5 py-2.5 text-center bg-[#F97316] hover:bg-[#EA580C]
        "
      >
        Log In
      </button>

      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-sm block text-[#F97316] hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>

      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a href="#" className="text-[#1D4ED8] hover:underline">
          Create account
        </a>
      </div>
    </form>
  );
}

export default Login;

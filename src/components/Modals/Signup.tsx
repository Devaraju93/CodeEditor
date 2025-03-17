import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <form className='space-y-6 px-6 pb-4'>
    <h3 className='text-xl font-medium text-white'>Register to LeetClone</h3>
    
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-[#D1D5DB]'>
            Email
        </label>
        <input
            type='email'
            name='email'
            id='email'
            className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5
            bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white
            '
            placeholder='name@company.com'
        />
    </div>

    <div>
        <label htmlFor='displayName' className='text-sm font-medium block mb-2 text-[#D1D5DB]'>
            Display Name
        </label>
        <input
            type='displayName'
            name='displayName'
            id='displayName'
            className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5
            bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white
            '
            placeholder='John Doe'
        />
    </div>

    <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-[#D1D5DB]'>
            Password
        </label>
        <input
            type='password'
            name='password'
            id='password'
            className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5
            bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white
            '
            placeholder='*******'
        />
    </div>

    <button
        type='submit'
        className='w-full text-white focus:ring-[#3B82F6] font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-[#F97316] hover:bg-[#ea580c]
        '
    >
       Register
    </button>

    <div className='text-sm font-medium text-[#D1D5DB]'>
        Already have an account?{" "}
        <a href='#' className='text-[#3B82F6] hover:underline'>
            Log In
        </a>
    </div>
</form>

  )
}

export default Signup
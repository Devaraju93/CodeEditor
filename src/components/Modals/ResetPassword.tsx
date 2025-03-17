import React from 'react'

type Props = {}

const ResetPassword = (props: Props) => {
  return (
    <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
    <h3 className='text-xl font-medium text-white'>Reset Password</h3>
    
    <p className='text-sm text-[#F3F4F6]'>
        Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
        to reset it.
    </p>

    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-[#D1D5DB]'>
            Your email
        </label>
        <input
            type='email'
            name='email'
            id='email'
            className='border-2 outline-none sm:text-sm rounded-lg focus:ring-[#3B82F6] focus:border-[#3B82F6] block w-full p-2.5 
            bg-[#4B5563] border-[#6B7280] placeholder-[#9CA3AF] text-white'
            placeholder='name@company.com'
        />
    </div>

    <button
        type='submit'
        className='w-full text-white focus:ring-4 focus:ring-[#3B82F6] font-medium rounded-lg text-sm px-5 py-2.5 text-center 
        bg-[#F97316] hover:bg-[#ea580c]'
    >
        Reset Password
    </button>
</form>

  )
}

export default ResetPassword
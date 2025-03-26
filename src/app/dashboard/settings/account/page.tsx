"use client";
import React from 'react'

const Account = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-8'>Account Settings</h1>


        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Profile Information
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Name
              </label>
              <input
                type='text'
                defaultValue="Lanserinno"
                className='mt-2 block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2
              focus:ring-blue-500'
              />
            </div>


            <div>
              <label className='block text-sm font-medium text-gray-600 space-y-4'>
                Email
              </label>
              <input type='email'
                defaultValue="lanserinno.horseplayer@gmail.com"
                className='mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2
              focus:ring-blue-500'
              />
            </div>
          </div>
        </div>


        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-600 mb-4'>
            Security
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-500'>
                Password
              </label>
              <input type='password'
                placeholder='Enter New Password'
                className='mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2
              focus:ring-blue-500'
              />
            </div>


            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Confirm Password
              </label>
              <input type='password'
                placeholder='Confirm New Password'
                className='mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2
              focus:ring-blue-500'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-end space-x-4'>
          <button
            className='px-6 py-2 text-black bg-red-600 rounded-lg hover:bg-red-700 transition:colors'
          >
            Cancel
          </button>
          <button
            className='px-6 py-2 text-black bg-green-600 rounded-lg hover:bg-green-700 transition:colors'
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className='flex justify-end mt-8'>
        <button
          className='px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors'
          onClick={() => window.location.href = '/dashboard/settings'}
        >
          Return to Settings
        </button>
      </div>
    </div>
  )
}

export default Account
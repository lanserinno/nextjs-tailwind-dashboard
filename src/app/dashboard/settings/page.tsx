"use client";
import Link from 'next/link'
import React from 'react'


const Settings = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50
     to-gray-500 p-10'>
      <div className='max-w-7xl mx-auto bg-gray-200 rounded-lg shadow-2xl p-8'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>Settings</h1>
        <p className='text-lg text-gray-700 mb-8 '>
          Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.
        </p>

        <div className='flex space-x-12'>
          <div className='w-1/4 bg-gray-300 rounded-lg p-6 space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Quick Links
            </h2>
            <ul className='space-y-4'>
              <li>
                <Link className='flex items-center text-lg text-gray-800 hover:text-indigo-600 transition:colors
                py-2 px-4 rounded-md hover:bg-indigo-500'
                  href='/dashboard/settings/account'
                >
                  <span className='text-lg font-semibold text-indigo-600'>Account</span>
                </Link>

                <Link className='flex items-center text-lg text-gray-800 hover:text-yellow-600 transition:colors
                py-2 px-4 rounded-md hover:bg-yellow-500'
                  href='/dashboard/settings/notification'
                >
                  <span className='text-lg font-semibold text-yellow-600'>Notification</span>
                </Link>

                <Link className='flex items-center text-lg text-gray-800 hover:text-green-600 transition:colors
                py-2 px-4 rounded-md hover:bg-green-500'
                  href='/dashboard/settings/profile'
                >
                  <span className='text-lg font-semibold text-green-600'>Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex-1 bg-gray-300 shadow-md rounded-lg p-8'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
              Select a Setting
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl'>
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-8'>
        <button
          className='px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors'
          onClick={() => window.location.href = '/dashboard'}
        >
          Return to dashboard
        </button>
      </div>
    </div>
  )
}

export default Settings
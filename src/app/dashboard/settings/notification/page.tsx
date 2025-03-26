"use client";
import React from 'react'

const Notification = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Notifications</h1>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Notification Preferences
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email Notifications
              </label>
              <select
                className='mt-1 block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option>Enabled</option>
                <option>Disabled</option>
              </select>

              <div className='space-y-4'>
                <label className='block text-sm font-medium text-gray-700 mt-4'>
                  SMS Notifications
                </label>
                <select
                  className='mt-1 block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex justify-end space-x-4 mt-8'>
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

export default Notification
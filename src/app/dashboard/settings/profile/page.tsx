"use client";
import React from "react";


const ProfileSettings = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>Profile Settings</h2>


        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Profile Picture
          </h2>
          <div className='flex items-center space-x-4'>
            <div className='w-24 h-24 rounded-full bg-gray-300'>
            </div>
          </div>

          <div>
            <button className='px-6 mt-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors'>
              Change Picture
            </button>
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Profile Information
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mt-4'>
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Lanserinno"
                className='mt-2 block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2
              focus:ring-blue-500'/>
            </div>
          </div>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mt-4'>
                Email Address
              </label>
              <input
                type="text"
                defaultValue="lanserinnohorseplayer@gmail.com"
                className='mt-2 block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2
              focus:ring-blue-500'/>
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

export default ProfileSettings
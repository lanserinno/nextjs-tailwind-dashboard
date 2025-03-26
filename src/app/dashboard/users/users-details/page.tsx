"use client"
import React from 'react'

const UserDetails = () => {

  const user = {
    name: "Lanserinno",
    email: "lanserinnohorseplayer@gmail.com",
    role: "User",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, voluptatum!",
    profilePicture: "Placeholder",
    activities: [
      { id: 1, description: "Updated Password", timestamp: "2025-03-24" },
      { id: 2, description: "Changed Email Address", timestamp: "2025-03-25" },
      { id: 3, description: "Logged in from new device", timestamp: "2025-03-26" },
      { id: 4, description: "One for the grand", timestamp: "2025-03-26" },
    ],

  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8'>
        <h1 className='text-xl font-bold text-gray-800 mb-8'>User Details</h1>

        <div className='flex items-center mb-8'>
          <div className='w-20 h-20 rounded-full bg-gray-300'>
          </div>

          <div className='ml-4'>
            <div className='text-3xl font-bold text-gray-800'>{user.name}</div>
            <p className='text-sm text-gray-600'>{user.email}</p>
            <p className='text-sm text-gray-600'>Role: {user.role}</p>
            <p
              className={`text-sm mt-2 ${user.status === "Active" ? "text-green-500" : "text-red-500"
                }`}
            >
              Status: {user.status}
            </p>
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>About</h2>
          <p className='text-sm text-gray-600'>{user.bio}</p>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Recent Activies</h2>
          <ul className='space-y-4'>
            {user.activities.map((activity) => (
              <li key={activity.id} className='flex items-centers space-y-4'>
                <div className='bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                  <span className='text-sm'>.</span>
                </div>

                <div className='ml-4'>
                  <p className='text-gray-700'>{activity.description}</p>
                  <p className='text-gray-700'>{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
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
          onClick={() => window.location.href = '/dashboard/users'}
        >
          Return to Users
        </button>
      </div>
    </div>
  )
}

export default UserDetails
"use client"
import React from 'react'

const UsersList = () => {

  const users = [
    {
      id: 1,
      name: "Lanserinno",
      email: "lanserinnohorseplayer",
      role: "User",
      status: "Active",
    },

    {
      id: 2,
      name: "Lanserinno1",
      email: "lanserinnohorseplayer",
      role: "Editor",
      status: "Inactive",
    },

    {
      id: 3,
      name: "Lanserinno2",
      email: "lanserinnohorseplayer",
      role: "Admin",
      status: "Active",
    },

    {
      id: 4,
      name: "Lanserinno3",
      email: "lanserinnohorseplayer",
      role: "User",
      status: "Suspended",
    },

    {
      id: 5,
      name: "Lanserinno4",
      email: "lanserinnohorseplayer",
      role: "Editor",
      status: "Active",
    },

    {
      id: 6,
      name: "Lanserinno5",
      email: "lanserinnohorseplayer",
      role: "Admin",
      status: "Inactive",
    },

  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8'>
        <h1 className='text-xl font-bold text-gray-800 mb-8'>User List</h1>

        <div className='overflow-x-auto bg-gray-100 shadow-lg rounded-lg'>
          <table className='min-w-full table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <td className='py-3 px-4 text-left'>Name</td>
                <td className='py-3 px-4 text-left'>Email</td>
                <td className='py-3 px-4 text-left'>Role</td>
                <td className='py-3 px-4 text-left'>Status</td>
                <td className='py-3 px-4 text-left'>Actions</td>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className='border-t hover:bg-gray-50'>
                  <td className='py-4 px-4'>{user.name}</td>
                  <td className='py-4 px-4'>{user.email}</td>
                  <td className='py-4 px-4'>{user.role}</td>
                  <td className='py-4 px-4'>
                    <span
                    className={`${
                      user.status === "Active" 
                      ? "text-green-500"
                      : user.status === "Inactive"
                      ? "text-yellow-500"
                      : "text-red-500"
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  <td className='py-4 px-4 text-center'>
                    <button className='px-4 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500
                    transition-colors'>
                      Edit
                    </button>
                    <button className='ml-2 px-4 py-2 text-gray-100 bg-blue-700 rounded-lg hover:bg-blue-800
                    transition-colors'>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default UsersList
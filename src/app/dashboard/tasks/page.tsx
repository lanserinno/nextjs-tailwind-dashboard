"use client";
import React from 'react'

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish this small project",
      description: "Complete the project that contains functionality and simple tailwind design",
      status: "In progress",
      dueDate: "2025-03-23",
    },

    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-03-24",
    },

    {
      id: 3,
      title: "Just a random title because I want to",
      description: "A short description about this random title ",
      status: "Completed",
      dueDate: "2025-03-21",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 p-8'>
      <div className='max-w-7xl mx-auto bg-gray-200 rounded-lg shadow-sm p-8'>
        <h1 className='text-3x1 font-bold text-gray-800 mb-8'>Tasks</h1>

        <div className='space-y-6'>
          {tasks.map((task) =>
            <div key={task.id}
              className='flex items-center justify-between bg-gray-300 rounded-lg 
              shadow-md p-6 border-l-4'
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "green"
                    : task.status === "In progress"
                      ? "yellow"
                      : "red"
              }}
            >

              <div className='flex flex-col'>
                <h2 className='text-x1 font-semibold text-gray-800'>{task.title}</h2>
                <p className='text-sm text-gray-800 mt-2'>{task.description}</p>
                <p className='text-sm text-gray-800 mt-2'>Due date: {task.dueDate}</p>
              </div>

              <div className='flex space-x-4'>
                <span className={`px-4 py-3 text-center text-sm rounded-full ${task.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : task.status === "In progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.status}
                </span>

                <button
                  className='px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Edit
                </button>

                {task.status !== "Completed" && (
                  <button
                    className='px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors'
                  >
                    Mark as Complete
                  </button>
                )}

                <button
                  className='px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors'
                >
                  Delete
                </button>
              </div>
            </div>
          )}


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

export default Tasks
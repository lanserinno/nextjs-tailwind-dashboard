import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br
         from-gray-50 to-gray-500 p-8">
            <div className="max-w-6xl mx-auto bg-gray-200 rounded-2xl 
           shadow-lg p-8 space-y-8">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-extrabold text-gray-900 
                mb-4 sm:mb-0">
                        Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 mt-3">
                        Welcome back, Optimum priduh! AUUGH AAGH UUGH AAAGH UGGH
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link href="dashboard/tasks"
                        className="bg-blue-100 hover:bg-blue-200 p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-200
                        ease-in-out transform hover:scale-105"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-blue-800">Tasks</h2>
                            <span className="text-blue-500 text-2xl">📋</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                            View, organize, and manage your daily tasks.
                        </p>
                    </Link>


                    <Link href="dashboard/analytics"
                        className="bg-green-100 hover:bg-green-200 p-3 rounded-xl shadow-md hover:shadow-xl 
                        transition-all duration-200 ease-in-out transform hover:scale-105"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className='text-x1 font-semibold text-green-800'>
                                Analytics
                            </h2>
                            <span className='text-green-500 text-2x1'>📊</span>
                        </div>
                        <p className='text-gray-700 mt-2'>
                            Gain insights into your performance and trends.
                        </p>
                    </Link>


                    <Link href="dashboard/settings"
                        className='bg-purple-100 hover:bg-purple-200 p-3 rounded-xl shadow-md hover:shadow-x1 transition-all duration-200
                        ease-in-out transform hover:scale-105'
                    >
                        <div className="flex items-center justify-between">
                            <h2 className='text-xl font-semibold text-purple-800'>
                                Settings
                            </h2>
                            <span className='text-purple-500 text-2x1'>⚙️</span>
                        </div>
                        <p className='text-gray-700 mt-2'>
                            Customize and tweak your dashboard settings.
                        </p>
                    </Link>


                    <Link href="dashboard/users"
                        className='bg-yellow-100 hover:bg-yellow-200 p-3 rounded-xl shadow-md hover:shadow-x1 transition-all duration-200
                        ease-in-out transform hover:scale-105'
                    >
                        <div className="flex items-center justify-between">
                            <h2 className='text-xl font-semibold text-yellow-800'>
                                Users
                            </h2>
                            <span className='text-purple-500 text-2x1'>👥</span>
                        </div>
                        <p className='text-gray-700 mt-2'>
                            Customize and tweak your dashboard settings.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
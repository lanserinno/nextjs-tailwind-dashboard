import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-500
    flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1>
          Welcome to the dashboard app
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the dashboard page just foh you!
        </p>

        <Link href="/dashboard"
        className="inline-flex items-center justify-center bg-blue-600
        text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700
         transition-colors shadow-lg hover:shadow-xl">
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default page 
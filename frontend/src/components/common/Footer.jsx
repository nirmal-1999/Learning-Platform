import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div>
                        <h2 className="text-lg font-bold">Learn Easy</h2>
                        <p className="text-sm text-gray-400">Empowering your learning journey.</p>
                    </div>
                    <div className="text-sm text-gray-400 text-center md:text-right">
                        <p>📞 +91 9876543210</p>
                        <p>✉️ support@learneasy.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Learnify. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
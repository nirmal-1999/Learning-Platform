import React from 'react';
import Footer from './common/Footer'
import Navbar from './common/Navbar';

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />

      <main className="flex-grow">
        <header className="text-center py-20 bg-indigo-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to Learn Easy</h1>
          <p className="text-lg text-gray-700 mb-6">Learn new Courses, build your future.</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500">
            Explore Courses
          </button>
        </header>
        <section className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['React Basics', 'Node.js Mastery', 'MongoDB Essentials'].map((course, i) => (
            <div key={i} className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600 text-sm">A beginner-friendly guide to {course}.</p>
              <button className="mt-4 text-indigo-600 hover:underline">Learn More</button>
            </div>
          ))}
        </section>
      </main> 

      <Footer/>
    </div>
  );
};

export default HomePage;

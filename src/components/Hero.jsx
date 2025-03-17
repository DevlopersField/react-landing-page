import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Landing Page</h1>
      <p className="text-xl mb-6">Your amazing product deserves a beautiful introduction.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
    </section>
  );
}

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Where Innovation Finds Rhythm
      </h2>
      <p className="max-w-xl text-lg mb-6">
        Sync.co is where students and creatives collaborate to build ideas that
        stand the test of time. Explore, create, and stay in sync with the
        future.
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">
        Get Started
      </button>
    </section>
  );
};

export default Hero;

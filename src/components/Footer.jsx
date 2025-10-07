import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Sync.co — Where Innovation Finds Rhythm.
      </p>
    </footer>
  );
};

export default Footer;

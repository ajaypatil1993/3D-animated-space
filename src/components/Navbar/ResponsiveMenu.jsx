import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "top-20 opacity-100" : "top-[-100%] opacity-0"
      } h-auto w-full bg-white/40 backdrop-blur-md fixed top-0 
       z-40 `}
    >
      <nav className="my-10 text-2xl font-semibold text-center">
        <ul className="space-y-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;

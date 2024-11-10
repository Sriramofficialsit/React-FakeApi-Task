import React from "react";

function Nav({ cartcount, onCartClick }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">D-mart</h1>
      <div>
        <button onClick={onCartClick} className="bg-blue-500 px-4 py-2 rounded">
          Cart ({cartcount})
        </button>
      </div>
    </nav>
  );
}

export default Nav;

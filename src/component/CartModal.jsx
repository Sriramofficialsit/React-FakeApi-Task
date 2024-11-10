import React from "react";

function CartModal({ cart, onRemoveFromCart, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-4">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-cover mb-2" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-700">${item.price}</p>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2"
              >
                Remove from Cart
              </button>
            </div>
          ))
        )}
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;

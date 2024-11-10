import React from "react";

function Products({ products, onAddToCart }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md w-72">
          <img src={product.image} alt={product.title} className="h-40 object-cover mx-auto" />
          <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-700 text-white px-4 py-2 rounded mt-4"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default Products;

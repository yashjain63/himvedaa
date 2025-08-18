import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Herbal Face Cream",
      price: 199,
      quantity: 2,
      image: "/imags/faceCream.png",
    },
    {
      id: 2,
      title: "Herbal Hair Oil",
      price: 169,
      quantity: 1,
      image: "/imags/hairOil.png",
    },
    {
      id: 3,
      title: "Herbal Face Wash",
      price: 149,
      quantity: 3,
      image: "/imags/faceWash.png",
    },
  ]);

  // Increase Quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Cart Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-500">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <p className="font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
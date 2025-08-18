import React from 'react';
import praice from "../../assets/images/praice.png";
import salesBanner from "/imags/salesBanner.jpg"

const productsOnSale = [
  {
    id: 1,
    name: "Natural Baby Oil",
    image: "/imags/protct3.png",
    oldPrice: 1999,
    newPrice: 999,
  },
  {
    id: 2,
    name: "Organic Hair Oil",
    image: "/imags/protct4.png",
    oldPrice: 499,
    newPrice: 299,
  },
  {
    id: 3,
    name: "Natural Face Cream",
    image: "/imags/protct3.png",
    oldPrice: 1499,
    newPrice: 799,
  },
  {
    id: 4,
    name: "Natural Face Wash",
    image: "/imags/protct2.png",
    oldPrice: 299,
    newPrice: 149,
  },
];

const SalesPage = () => {
  return (
    <>

      <div className=''>
        <header className="text-center bg-gradient-to-r p-14 mt-10 text-white" style={{
                  backgroundImage: `url(${salesBanner})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
            Flash Sale — Up to 50% OFF!
          </h1>
          <p className="text-lg md:text-xl">Explore our exclusive wellness products</p>
        </header>
      </div>

      {/* Deal... */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full  p-6 sm:p-10 md:p-20 bg-amber-100">
        {/* Left section */}
        <div className="w-full lg:w-[40%] flex justify-center items-center mb-8 lg:mb-0 ">
          <img
            className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src={praice}
            alt="image"
          />
        </div>

        {/* Right section */}
        <div className="w-full bg-white p-2 sm:w-full lg:w-1/2 flex justify-center items-center ">
          <div className="w-full  max-w-2xl bg-amber-50 border-4 border-pink-200  shadow-md p-6 sm:p-8 md:p-15 flex flex-col items-center gap-6">
            {/* Titles */}
            <h4 className="text-base sm:text-lg font-medium text-gray-600 text-center">
              Nature & Organic Shampoo
            </h4>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
              style={{ color: "#7b342d", fontFamily: "Open Sans" }}
            >
              DEALS OF THE DAY
            </h1>

            {/* Price */}
            <div className="flex justify-center items-center gap-4">
              <span className="line-through text-gray-500 text-lg">$99.99</span>
              <span className="text-2xl sm:text-3xl font-semibold text-green-600">
                $95.99
              </span>
            </div>

            {/* Description */}
            <div className="text-center px-2 sm:px-4">
              <p className="text-gray-700 mb-1">Fresh Organic Shampoo</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit placeat a doloremque?
              </p>
            </div>

            {/* Countdown */}
            <div className="flex gap-4 flex-wrap justify-center items-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                <div
                  key={index}
                  className="border border-gray-400 flex flex-col items-center px-8 py-5 shadow-xl hover:shadow-2xl rounded-md"
                >
                  <span className="font-bold text-xl sm:text-2xl text-gray-800">
                    30
                  </span>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="px-6 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Sales Card....... */}
      <div className="px-4 py-8 bg-gray-50">

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsOnSale.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="line-through text-gray-500">₹{product.oldPrice}</span>
                  <span className="text-2xl text-green-600 font-bold">₹{product.newPrice}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default SalesPage;

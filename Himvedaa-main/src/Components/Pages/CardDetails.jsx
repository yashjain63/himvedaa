import { useState } from "react";
import { FaStar, FaTruck } from "react-icons/fa";
import first from "../../assets/products/1st.jpg";
import second from "../../assets/products/2nd.jpg";
import third from "../../assets/products/3rd.jpg";
import forth from "../../assets/products/4th.webp";
import NATURAL_PILES_CARE_HERBS from "../../assets/products/NATURAL_PILES_CARE_HERBS.webp";

const thumbnails = [first, second, third, forth, NATURAL_PILES_CARE_HERBS];

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("8 fl oz");
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("one-time");
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const sizes = ["8 fl oz", "Travel | 2 fl oz", "Single Use", "24 fl oz"];

  return (
    <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-10 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
        {/* Thumbnails */}
        <div className="flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible max-h-[400px]">
          {thumbnails.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Thumbnail ${i + 1}`}
              onClick={() => setMainImage(src)}
              className={`w-14 h-14 object-cover border rounded cursor-pointer shrink-0 ${
                mainImage === src ? "ring-2 ring-green-500" : ""
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center w-full">
          <img
            src={mainImage}
            alt="Product"
            className="w-full max-w-[400px] h-auto object-contain rounded"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black ml-2 text-sm">425 Reviews</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-1">
          MINT DAILY SWISH™
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          1100+ sold in the last 30 days
        </p>
        <p className="text-gray-700 mb-4 text-sm">
          Cool and refreshing pulling oil for clean, healthy teeth and gums.
        </p>

        {/* Sizes */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Sizes:</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`border px-3 py-1 rounded text-sm ${
                  selectedSize === size
                    ? "bg-green-600 text-white font-medium"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="border rounded-lg overflow-hidden mb-4 text-sm">
          <div
            className={`flex justify-between items-center p-3 cursor-pointer ${
              deliveryOption === "one-time" ? "bg-yellow-100 font-semibold" : ""
            }`}
            onClick={() => setDeliveryOption("one-time")}
          >
            <span>DELIVER ONE TIME ONLY</span>
            <span>$18.99</span>
          </div>
          <div
            className={`flex justify-between items-center p-3 cursor-pointer ${
              deliveryOption === "subscribe"
                ? "bg-yellow-100 font-semibold"
                : ""
            }`}
            onClick={() => setDeliveryOption("subscribe")}
          >
            <span>SUBSCRIBE & SAVE 15%</span>
            <span className="text-red-500">$16.14</span>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <div className="flex border rounded items-center overflow-hidden">
            <button
              className="px-4 py-2 text-lg font-bold"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              className="px-4 py-2 text-lg font-bold"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full w-full sm:w-auto text-center">
            ADD TO CART – $
            {(deliveryOption === "subscribe" ? 16.14 : 18.99).toFixed(2)}
          </button>
        </div>

        {/* Shipping Notice */}
        <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded text-sm font-medium">
          <span className="font-semibold">10 hours</span> left for same day
          shipping!
          <FaTruck />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

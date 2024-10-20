import React from "react";

export default function OrderModal({
  closeModal,
  open,
}: {
  closeModal: () => void;
  open: boolean;
}) {
  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Modal Content with animations */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white  shadow-lg max-w-lg w-full p-6 relative mx-auto transform transition-transform duration-300 ${
          open ? "scale-100" : "scale-90"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-blue-600">
            Place Your Order
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form below to schedule a pickup for your laundry.
          </p>
        </div>

        {/* Modal Form */}
        <form method="POST" action="/submit-order">
          {/* Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your pickup address"
              required
            />
          </div>

          {/* Service Type */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Service Type
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Service</option>
              <option value="Laundry">Laundry</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
              <option value="Ironing">Ironing</option>
            </select>
          </div>

          {/* Pickup Time */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pickup-time"
            >
              Pickup Time
            </label>
            <input
              id="pickup-time"
              name="pickup-time"
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2  font-semibold hover:bg-blue-700 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Moto() {
  const data = {
    name: "Emani",
    address: "470 Lucy Forks, Patriciafurt, YC7B 3UT",
    phone: "(123) 456-7890",
    hours: "8.00 - 18.00 Mon-Sat",
  };

  return (
    <div className="w-full py-6 bg-white border-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between md:items-center gap-6 px-4 items-start">
        {/* Logo and Business Name */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Laundris Logo"
              width={80}
              height={80}
              className="w-40 h-20"
            />
          </Link>
          <div className="text-center lg:text-left">
            <p className="text-2xl font-semibold text-blue-700">{data.name}</p>
            <p className="text-sm text-gray-600">Laundry Center</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-8 text-sm font-thin">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-cyan-500 " />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-gray-600 text-xs">{data.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-cyan-500 " />
            <div>
              <p className="text-sm font-medium">Call Us Now</p>
              <p className="text-blue-600 text-xs">
                <a href={`tel:${data.phone}`} className="hover:underline">
                  {data.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center space-x-2">
            <FaClock className="text-cyan-500 " />
            <div>
              <p className="text-sm font-medium">Opening Hours</p>
              <p className="text-gray-600 text-xs">{data.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

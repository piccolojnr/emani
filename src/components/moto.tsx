import Image from "next/image";
import React from "react";

export default function Moto() {
  const data = {
    name: "Emani",
    address: "470 Lucy Forks, Patriciafurt, YC7B 3UT",
    phone: "(123) 456-7890",
    hours: "8.00 - 18.00 Mon-Sat",
  };
  return (
    <>
      <div className="w-full sm:w-full text-xs border-b py-4">
        <div className="flex justify-center py-4 mx-auto">
          <div className="w-3/12 sm:w-1/4">
            <div className="flex items-center">
              <div className="w-20 mx-4">
                <a href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </a>
              </div>
              <div className="w-9/12">
                <div>
                  <p className="text-xl font-medium">
                    <a href="/" className="text-blue-500">
                      {data.name}
                    </a>
                  </p>
                  <p className="text-xs font-thin">
                    <a href="/" className="text-gray-700">
                      Laundry and Dry Cleaning
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12 sm:w-1/3 flex justify-center items-center">
            <div className="flex space-x-2">
              <div className="flex items-center">
                <span className="text-xl fa fa-map-marker-alt"></span>
              </div>
              <div>
                <p className="text-sm">Address</p>
                <p className="text-gray-500">{data.address}</p>
              </div>
            </div>
          </div>

          <div className="w-2/12 sm:w-1/6 flex justify-center items-center">
            <div className="flex space-x-2">
              <div className="flex items-center">
                <span className="text-xl fa fa-phone"></span>
              </div>
              <div>
                <p className="text-sm">Call us now</p>
                <p className="text-blue-500">
                  <a href="tel:1234567890">{data.phone}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-3/12 sm:w-1/4 flex justify-center items-center">
            <div className="flex space-x-2">
              <div className="flex items-center">
                <span className="text-xl fa fa-clock"></span>
              </div>
              <div>
                <p className="text-sm">Opening Hours</p>
                <p className="text-gray-500 text-sm">{data.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

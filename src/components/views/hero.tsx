import { useState } from "react";
import OrderModal from "../ordermodal";
const data = {
  title: "WE OFFER THE BEST LAUNDRY SERVICES",
  description:
    "The Laundry Company provides a premium laundry, ironing, dry cleaning, and alteration service for domestic and small businesses in the US.",
  image: "/images/hero.jpg",
};
const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <OrderModal closeModal={() => setShowModal(false)} open={showModal} />
      <div
        className="bg-cover bg-no-repeat bg-left-top py-12 text-white relative"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        {/* overlay */}
        <div className="container px-10 py-4 relative z-10">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-6/12">
              <div className="mb-6">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="my-4"></p>
                <p className="text-base font-thin">{data.description}</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 "
                >
                  ORDER NOW
                </button>
              </div>
            </div>
            <div className="w-full sm:w-6/12">
              {/* <!-- Empty column for potential image or content --> */}
            </div>
          </div>
        </div>
        <div className="absolute bg-blue-500 bg-opacity-50 top-0 left-0 right-0 bottom-0" />
      </div>
    </>
  );
};

export default Hero;

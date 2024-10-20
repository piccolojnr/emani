import React from "react";
import PersonalizedExperience from "../svgs/personalizedexperience";
import AffordablePricing from "../svgs/affordablepricing";
import Convenience from "../svgs/convenience";
import Quality from "../svgs/quality";
import ExpressDelivery from "../svgs/expressdelivery";
import Instant from "../svgs/instant";
import Link from "next/link";

const data = [
  {
    title: "Personalized Experience",
    description:
      "We take utmost care of your clothes, doing laundry according to the cloth type and the nature of stains.",
    icon: <PersonalizedExperience className="w-20 h-20" />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Prices that suit your pocket. Choose one of our 4 pricing plans according to your needs.",
    icon: <AffordablePricing className="w-20 h-20" />,
  },
  {
    title: "Convenience",
    description:
      "With just a tap of a button, your laundry gets done, giving you more time to spend with family and friends.",
    icon: <Convenience className="w-20 h-20" />,
  },
  {
    title: "Quality",
    description:
      "We use the best products to ensure that your favorite clothes are always available for you to wear.",
    icon: <Quality className="w-20 h-20" />,
  },
  {
    title: "Express Delivery",
    description:
      "With our super express delivery, we get your laundry done in less than 8 hours.",
    icon: <ExpressDelivery className="w-20 h-20" />,
  },
  {
    title: "Instant Order Update",
    description:
      "Regular updates on your order help you track your laundry and plan accordingly.",
    icon: <Instant className="w-20 h-20" />,
  },
];

export default function WhyUs() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="mx-auto flex items-center justify-center flex-col">
        {/* <!-- Title Section --> */}
        <div className="text-center mb-12">
          <p className="text-lg text-yellow-500">Our features</p>
          <h2 className="text-3xl font-bold">WHY CHOOSE US</h2>
        </div>
        <div className="mx-auto flex flex-wrap gap-2 justify-center items-start">
          {data.map((item, index) => (
            <div
              className="w-full h-full max-w-72 flex items-start justify-center gap-2 p-4"
              key={index}
            >
              <div className="w-20 h-20">{item.icon}</div>
              <div className="w-9/12 pl-4">
                <h3 className="text-xl font-thin">
                  <Link href="#" className="text-blue-500">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mt-2 text-sm font-thin">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

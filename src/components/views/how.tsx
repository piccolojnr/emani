import React from "react";

const steps = [
  {
    text: [
      {
        value: "Bag up",
        color: "yellow-500",
      },
      {
        value: " all your dirty clothes",
        color: "",
      },
    ],
  },
  {
    text: [
      {
        value: "Pick up",
        color: "yellow-500",
      },
      {
        value: " your clothes",
        color: "",
      },
    ],
  },
  {
    text: [
      {
        value: "Clean",
        color: "yellow-500",
      },
      {
        value: " your clothes",
        color: "",
      },
    ],
  },
  {
    text: [
      {
        value: "Deliver",
        color: "yellow-500",
      },
      {
        value: " clean, folded clothes",
        color: "",
      },
    ],
  },
];

export default function How() {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        {/* <!-- Title Section --> */}
        <div className="text-center mb-12">
          <p className="text-lg text-yellow-500">
            In {steps.length} easy steps
          </p>
          <h2 className="text-3xl font-bold">HOW IT WORKS</h2>
        </div>

        {/* <!-- Steps Section --> */}
        <div className="flex flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="w-full sm:w-3/12 px-4 text-center mb-8">
              <p className="text-7xl font-normal text-yellow-500 opacity-20">
                0{index + 1}
              </p>
              <h3 className="font-thin">
                {step.text.map((text, index) => (
                  <span key={index} className={`text-${text.color}`}>
                    {text.value}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

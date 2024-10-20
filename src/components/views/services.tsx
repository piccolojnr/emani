import LaundryWasher from "../svgs/laundrywasher";
import LaundryDryer from "../svgs/laudryDryer";
import LaundryCarpet from "../svgs/laundrycarpet";

const services = [
  {
    title: "Laundry Services",
    description:
      "Let us pick up your dirty laundry, sort it, clean, dry, fold, and deliver back to you in one neat, easy package.",
    image: <LaundryWasher className="w-20 h-20" />,
  },
  {
    title: "Dry Cleaning Services",
    description:
      "SMU students and local residents love our reliable dry cleaning services for fast, accurate, and top-quality results.",
    image: <LaundryDryer className="w-20 h-20" />,
  },
  {
    title: "Carpet Cleaning",
    description:
      "To keep your carpet at peak performance, we recommend professional deep cleaning every 12 to 18 months.",
    image: <LaundryCarpet className="w-20 h-20" />,
  },
];

const Services = () => {
  return (
    <>
      <div className="py-12">
        <div className="w-full">
          <div className="flex flex-wrap">
            {/* <!-- Laundry Services --> */}
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-4/12 lg:w-4/12">
                <div
                  className="p-6  text-center"
                  style={{ minHeight: "400px" }}
                >
                  <div className="mb-6 flex justify-center">
                    {service.image}
                  </div>
                  <h3 className="text-2xl font-normal">
                    <a href="#" className="text-blue-500">
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 my-4 text-sm font-thin">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href="/more/"
                      className="inline-block bg-blue-500 text-white py-2 px-6  font-semibold hover:bg-blue-600 transition duration-300"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-2">
        <div className="m-4 max-w-3xl mx-auto ">
          <div className="flex sm:flex-row flex-col-reverse items-center justify-between gap-10">
            {/* <!-- Text Column --> */}
            <div className="w-80">
              <div className="mt-6 mb-4">
                <p className="text-sm text-yellow-500 font-semibold">
                  Services you will love
                </p>
                <h2 className="font-thin">WE ARE PASSIONATE ABOUT LAUNDRY</h2>
              </div>
              <div className="mb-6 text-sm text-gray-500 font-thin">
                <p className=" mb-4">
                  We are professionals in the laundry and dry cleaning business,
                  which means we always stay up to date on the latest
                  technologies, cleaning methods, and solutions for dealing with
                  stains or delicate fabrics.
                </p>
                <p className="text-gray-400 ">
                  Plus, we maintain the highest standards of business integrity
                  by following local and national regulations and environmental
                  safety rules. We are passionate about changing the way you
                  think about laundry!
                </p>
              </div>
            </div>

            <div
              className="w-full sm:w-6/12 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/services-img01.jpg')` }}
            >
              <div className="h-[330px] hidden sm:block"></div>
              <div className="h-[300px] sm:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

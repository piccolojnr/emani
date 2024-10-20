import Link from "next/link";

const Navbar = () => {
  const data = [
    {
      name: "HOME",
      link: "/",
      active: true,
    },
    {
      name: "ABOUT US",
      link: "/about-us/",
    },
    {
      name: "SERVICES",
      link: "/services/",
    },
    {
      name: "PRICING",
      link: "/pricing/",
    },
    {
      name: "GALLERY",
      link: "/gallery/",
    },
    {
      name: "TESTIMONIALS",
      link: "/testimonials/",
    },
    {
      name: "FAQ",
      link: "/faq/",
    },
    {
      name: "CONTACTS",
      link: "/contacts/",
    },
  ];
  return (
    <div className=" py-2">
      <div className="container px-10 py-4">
        <ul className="flex justify-start space-x-6">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={
                  `${item.active ? "text-blue-500" : "text-gray-500"}` +
                  " hover:text-blue-500 font-thin text-xs"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

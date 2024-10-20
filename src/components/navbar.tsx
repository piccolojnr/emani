import Link from "next/link";

const Navbar = () => {
  const data = [
    {
      name: "HOME",
      link: "#",
      active: true,
    },
    {
      name: "ABOUT US",
      link: "#",
    },
    {
      name: "SERVICES",
      link: "#",
    },
    {
      name: "PRICING",
      link: "#",
    },
    {
      name: "GALLERY",
      link: "#",
    },
    {
      name: "TESTIMONIALS",
      link: "#",
    },
    {
      name: "FAQ",
      link: "#",
    },
    {
      name: "CONTACTS",
      link: "#",
    },
  ];
  return (
    <div className=" py-2">
      <div className="container px- py-4">
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

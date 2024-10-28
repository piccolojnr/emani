import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    { name: "HOME", link: "#", active: true },
    { name: "ABOUT US", link: "#" },
    { name: "SERVICES", link: "#" },
    { name: "PRICING", link: "#" },
    { name: "GALLERY", link: "#" },
    { name: "TESTIMONIALS", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "CONTACTS", link: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden lg:flex justify-center space-x-8 text-gray-600">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`${
                  item.active ? "text-cyan-500" : "hover:text-cyan-500"
                } transition-colors duration-200 text-xs font-medium`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden absolute top-14 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-4 px-6">
            {data.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`${
                    item.active ? "text-cyan-500" : "hover:text-cyan-500"
                  } text-xs font-medium text-gray-600`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

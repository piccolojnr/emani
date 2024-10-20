import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Laundry Service. All rights reserved.</p>
        <ul className="flex justify-center mt-4 space-x-4">
          <li>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

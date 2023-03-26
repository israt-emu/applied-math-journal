import Link from "next/link";
import {useState} from "react";

const LowerNav = () => {
  const [active, setActive] = useState("home");
  return (
    <header className="px-4 pt-1">
      <div className="container flex justify-between h-14 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "home" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("home")}>
              Home
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "publications" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("publications")}>
              Publications
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "research" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("research")}>
              Research Areas
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "events" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("events")}>
              Events
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "About" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("About")}>
              About Us
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "People" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("People")}>
              People
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "Contact" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("Contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <button title="Open menu" type="button" className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LowerNav;

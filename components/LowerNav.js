import Link from "next/link";
import {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
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
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "research" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("research")}>
              Research Areas
            </Link>
          </li>
          <li className="flex relative">
            <Link href="#" className={`flex items-center font-medium px-4 peer ${active === "publications" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("publications")}>
              <span>Publications</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </Link>

            <ul className="w-40 absolute top-12 left-8 z-10 bg-gray-200 shadow-lg border-t-4 border-secondary hidden peer-hover:flex hover:flex transition-all duration-200 hover:ease-linear flex-col py-3 ">
              <li className="flex relative peer hover:bg-white transition-all duration-200 hover:ease-linear px-3 py-2">
                <Link href="#" className="cursor-pointer hover:opacity-90 text-dark  font-semibold flex items-center">
                  Journals
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </Link>
                <ul className="w-40 absolute top-12 left-12 z-20 bg-gray-200 shadow-lg border-t-4 border-secondary hidden peer-hover:flex hover:flex transition-all duration-200 hover:ease-linear flex-col py-3 ">
                  <li className="cursor-pointer hover:opacity-90 text-dark hover:bg-dark transition-all duration-200 hover:ease-linear px-3 py-2 font-semibold flex items-center">International Journal of Mathematical Physics</li>
                  <li className="cursor-pointer hover:opacity-90 text-dark hover:bg-white transition-all duration-200 hover:ease-linear px-3 py-2 font-semibold flex items-center border-t border-gray-100">International Journal of Mathematical Physics</li>
                </ul>
              </li>
              <li className="flex hover:bg-white transition-all duration-200 hover:ease-linear px-3 py-2 border-t border-gray-100">
                <Link href="#" className="cursor-pointer hover:opacity-90 text-dark font-semibold flex items-center ">
                  Books
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "fee" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("fee")}>
              Publication Processing Fee
            </Link>
          </li>
          <li className="flex">
            <Link href="#" className={`flex items-center font-medium px-4 ${active === "events" ? "border-b-4 border-secondary text-secondary" : "border-b-4 border-transparent"}`} onClick={() => setActive("events")}>
              Events
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

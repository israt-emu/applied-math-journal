import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
const LowerNav = () => {
  const router = useRouter();
  const path = router?.pathname;
  useEffect(() => {
    if (path === "/") {
      setActive("home");
    } else {
      const value = path.split("/")[1];
      setActive(value);
    }
  }, [path]);
  const [active, setActive] = useState("home");
  return (
    <header className="px-4 pt-1">
      <div className="container flex justify-between h-14 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link href="/" className={`nav-link ${active === "home" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("home")}>
              Home
            </Link>
          </li>
          <li className="flex">
            <Link href="/about" className={`nav-link ${active === "about" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("about")}>
              About Us
            </Link>
          </li>
          <li className="flex dropdown dropdown-hover dropdown-bottom">
            <Link tabIndex={0} href="/people" className={`nav-link ${active === "people" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("people")}>
              People
              <span>
                <IoMdArrowDropdown />
              </span>
            </Link>
            <ul tabIndex={0} className="dropdown-menu">
              <li className="flex">
                <Link href="/president" className="dropdown-link" onClick={() => setActive("president")}>
                  President
                </Link>
              </li>
              <li className="flex border-t border-gray-50">
                <Link href="/team" className="dropdown-link">
                  Our Team
                </Link>
              </li>
            </ul>
          </li>

          <li className="flex">
            <Link href="/research" className={`nav-link ${active === "research" ? "nav-link-active" : " border-transparent"}`} onClick={() => setActive("research")}>
              Research Areas
            </Link>
          </li>
          <li className="flex dropdown dropdown-hover dropdown-bottom">
            <Link href="/publications" tabIndex={0} className={`nav-link ${active === "publications" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("publications")}>
              <span>Publications</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </Link>

            <ul tabIndex={0} className="w-40 dropdown-menu">
              <li className="flex dropdown dropdown-hover dropdown-right">
                <Link href="/journals" tabIndex={1} className="dropdown-link" onClick={() => setActive("journals")}>
                  Journals
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </Link>
                <ul tabIndex={1} className="w-50 dropdown-menu -mt-8">
                  <li className="flex">
                    <Link href="/journal-physics" className="dropdown-link" onClick={() => setActive("journal-physics")}>
                      International Journal of Mathematical Physics
                    </Link>
                  </li>
                  <li className="flex border-t border-gray-50">
                    <Link href="/journal-biology" className="dropdown-link" onClick={() => setActive("journal-biology")}>
                      International Journal of Mathematical Biology
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex border-t border-gray-50" onClick={() => setActive("books")}>
                <Link href="/books" className="dropdown-link">
                  Books
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex">
            <Link href="/fee" className={`nav-link ${active === "fee" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("fee")}>
              Publication Processing Fee
            </Link>
          </li>
          <li className="flex">
            <Link href="/events" className={`nav-link ${active === "events" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("events")}>
              Events
            </Link>
          </li>

          <li className="flex">
            <Link href="/contact" className={`nav-link ${active === "contact" ? "nav-link-active" : "border-transparent"}`} onClick={() => setActive("contact")}>
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

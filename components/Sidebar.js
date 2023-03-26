import Link from "next/link";
import {useState} from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <aside className="flex flex-col h-screen py-3 bg-small_bg ">
      <div className="space-y-3">
        <div className="flex-1">
          <h1 className="text-2xl text-secondary px-2 py-4 font-semibold">Journals</h1>
          <ul className="pt-2 pb-4 text-sm">
            <li className="rounded-sm border-t border-gray-100">
              <Link href="#" className={`flex items-center px-2 py-3 text-dark font-semibold text-lg hover:border-l-8 border-secondary transition-all duration-200 hover:ease-linear ${active === "physics" ? "border-l-8 border-secondary text-secondary" : "border-0"}`} onClick={() => setActive("physics")}>
                <span>Mathematical Physics</span>
              </Link>
            </li>
            <li className="rounded-sm border-t border-gray-100">
              <Link href="#" className={`flex items-center px-2 py-3 text-dark font-semibold text-lg hover:border-l-8 border-secondary transition-all duration-200 hover:ease-linear ${active === "Biology" ? "border-l-8 border-secondary text-secondary" : "border-0"}`} onClick={() => setActive("Biology")}>
                <span>Mathematical Biology</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

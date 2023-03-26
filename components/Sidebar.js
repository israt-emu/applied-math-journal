import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen p-3 bg-small_bg ">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <span>Journal of Mathematical Physics</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <span>Journal of Mathematical Biology</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

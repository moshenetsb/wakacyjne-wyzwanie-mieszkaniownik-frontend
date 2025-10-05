import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "./Logo";

function MobileMenu({ setMenuOpen }) {
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <menu className="fixed top-0 left-0 w-full min-h-screen bg-blue-950 text-white p-6 flex flex-col z-50">
      <div className="flex flex-row justify-between items-center">
        <Logo onClick={closeMenu} isMobile={true} />
        <X className="w-10 h-10 " onClick={closeMenu} />
      </div>
      <ul className="flex flex-col align-middle items-center text-center uppercase mt-10 text-2xl font-semibold">
        <li
          className="p-4 w-full border-b border-blue-100 last:border-none"
          onClick={closeMenu}
        >
          <Link to="/">Strona główna</Link>
        </li>
      </ul>
    </menu>
  );
}

export default MobileMenu;

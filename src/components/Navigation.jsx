import { Link } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

function Navigation() {
  const { user, logout } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex flex-row align-middle items-center w-full max-w-350 px-6 py-3">
      <Menu
        className="md:hidden w-8 h-8 mr-4"
        onClick={() => setMenuOpen(true)}
      />

      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      <Logo />

      <div className="flex text-lg flex-row gap-4 items-center font-semibold">
        <ul className="hidden md:flex flex-row">
          <li className="p-2 transition-colors rounded-lg hover:bg-blue-600/40 ">
            <Link to="/">Strona główna</Link>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-2 ml-auto relative">
          {user ? (
            <>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="gap-2 flex items-center"
                >
                  Witaj, {`${user.name} ${user.surname}`}
                  <span
                    className={`inline-block transition-transform duration-600 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-blue-500 rounded-lg shadow-lg flex flex-col">
                    <Link
                      to="/profile"
                      className="px-4 py-2 hover:bg-blue-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profil
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-left hover:bg-blue-100"
                    >
                      Wyloguj się
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="p-2 transition-colors rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Zaloguj się
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

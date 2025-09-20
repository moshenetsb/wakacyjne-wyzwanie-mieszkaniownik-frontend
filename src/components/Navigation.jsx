import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useState } from "react";

function Navigation() {
  const { user, logout } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="align-middle w-full p-3 bg-blue-500 text-white">
      <div className="max-w-350 font-bold flex flex-row gap-2 w-full mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo strony Mieszkaniownik"
              className="w-10 aspect-square mr-3"
            />
          </Link>
          <ul className="flex gap-4 text-xl">
            <li>
              <Link to="/">Strona główna</Link>
            </li>
          </ul>
        </div>

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
              className="text-base border-solid border p-3 rounded-lg bg-white text-blue-500 font-normal hover:bg-blue-100"
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

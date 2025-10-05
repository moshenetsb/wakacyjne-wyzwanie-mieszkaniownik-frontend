import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ user, login: setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };

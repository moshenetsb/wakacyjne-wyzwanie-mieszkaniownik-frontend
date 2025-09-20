import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login: setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };

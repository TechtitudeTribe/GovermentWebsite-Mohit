import { createContext, useState } from "react";

const AuthContext = createContext();
//eslint-disable-next-line
function AuthProvider({ children }) {
  try {
    JSON.parse(localStorage.getItem("auth"));
    //eslint-disable-next-line
  } catch (error) {
    localStorage.removeItem("auth");
  }
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth")) || {token:null}
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

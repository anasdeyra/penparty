import { useLocalStorage } from "@mantine/hooks";
import { createContext } from "react";
const authContext = createContext();
export default authContext;

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage({ key: "user", defaultValue: null });
  function logout() {
    setUser(null);
  }
  return (
    <authContext.Provider
      value={{ user, setUser, logout }}
      children={children}
    />
  );
}

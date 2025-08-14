//react hooks import
import { useEffect, useState, createContext, useContext } from "react";

//import axios
import axios from "axios";

//create context
export const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // state => count all the users
  const [countUser, setCountUser] = useState(0);

  const [Users, setUsers] = useState([]);

  useEffect(() => {
    totalUsers();
  }, []);

  // handel get all the users
  const totalUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3002/users");
      const users = response.data.data;
      setCountUser(users.length);
      setUsers(users);
    } catch (error) {
      console.error("Error fetching the users", error);
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{ countUser, setCountUser, Users, setUsers }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

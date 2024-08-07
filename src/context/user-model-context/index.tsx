import { createContext, useContext, useState } from "react";

import { UserModelContextProviderProps, UserModelContextType, UserDataType } from "../../types/types";
import { localStorageTokenKey } from "../../constants";

export const UserModelContext = createContext<UserModelContextType | null>(null);

const UserModelContextProvider: React.FC<UserModelContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataType>({ username: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);

  const authToken = localStorage.getItem(localStorageTokenKey);

  return (
    <UserModelContext.Provider value={{ userData, authToken, isLogged, setUserData, setIsLogged }}>
      {children}
    </UserModelContext.Provider>
  );
};

export const useUserModelContext = () => {
  const userModelContext = useContext(UserModelContext);

  if (userModelContext === null) {
    throw new Error("Blur context is not found");
  }

  return userModelContext;
};

export default UserModelContextProvider;

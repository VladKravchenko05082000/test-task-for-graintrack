import { localStorageTokenKey } from "../constants";
import { useUserModelContext } from "../context";

export const useResetAppData = () => {
  const { setIsLogged } = useUserModelContext();

  const resetAppData = () => {
    localStorage.removeItem(localStorageTokenKey);
    setIsLogged(false);
  };

  return { resetAppData };
};

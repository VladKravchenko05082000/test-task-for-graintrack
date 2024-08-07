import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

import { useUserModelContext } from "../context";
import { ROUTES } from "../navigate/constants";

export const useTokenCheck = () => {
  const { authToken, isLogged, setIsLogged } = useUserModelContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  useEffect(() => {
    if (!isLogged) {
      navigate({ to: ROUTES.login });
    }
  }, [isLogged]);
};

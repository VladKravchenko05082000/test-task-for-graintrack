import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

import { useUserModelContext } from "../context";

import { ROUTES } from "../navigate/constants";

export const useAuthCheck = () => {
  const { isLogged } = useUserModelContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate({ to: ROUTES.login });
    }
  }, [isLogged]);
};

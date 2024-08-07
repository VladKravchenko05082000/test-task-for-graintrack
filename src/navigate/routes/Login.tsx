import { createFileRoute, redirect } from "@tanstack/react-router";

import { Login } from "../../pages";

import { ROUTES } from "../constants";

export const Route = createFileRoute(ROUTES.login)({
  component: Login,
  beforeLoad: ({ context}) => {
    if (context.authToken) {
      throw redirect({
        to: ROUTES.home,
      });
    }
  },
});

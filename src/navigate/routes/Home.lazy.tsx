import { createLazyFileRoute } from "@tanstack/react-router";

import { Home } from "../../pages";

import { ROUTES } from "../constants";

export const Route = createLazyFileRoute(ROUTES.home)({
  component: Home,
});

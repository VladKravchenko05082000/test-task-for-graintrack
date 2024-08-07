import { FileRoutesByPath } from "@tanstack/react-router";

import { RoutesType } from "../../types/types";

export const ROUTES: { [key in RoutesType]: keyof FileRoutesByPath } = {
  login: "/",
  home: "/home",
};

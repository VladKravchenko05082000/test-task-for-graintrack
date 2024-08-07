/* prettier-ignore-start */

/* eslint-disable */

import { createFileRoute } from "@tanstack/react-router";

import { Route as rootRoute } from "./navigate/__root";
import { Route as Login } from "./navigate/routes/Login";
import { ROUTES } from "./navigate/constants";

const HomeLazy = createFileRoute(ROUTES.home)();

const HomeLazyRoute = HomeLazy.update({
  path: ROUTES.home,
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./navigate/routes/Home.lazy").then(d => d.Route));

const LoginRoute = Login.update({
  path: ROUTES.login,
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof Login;
      parentRoute: typeof rootRoute;
    };
    "/home": {
      id: "/home";
      path: "/home";
      fullPath: "/home";
      preLoaderRoute: typeof HomeLazyRoute;
      parentRoute: typeof rootRoute;
    };
  }
}

export const routeTree = rootRoute.addChildren({
  LoginRoute,
  HomeLazyRoute,
});

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home",
      ]
    },
    "/": {
      "filePath": "Login.tsx"
    },
    "/home": {
      "filePath": "Home.lazy.tsx"
    },
  }
}
ROUTE_MANIFEST_END */

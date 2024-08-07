import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { NotFoundPage } from "../pages";

import { UserModelContextType } from "../types/types";

export const Route = createRootRouteWithContext<UserModelContextType>()({
  component: () => (
    <>
      <div className="flex items-center min-h-screen">
        <div className="container mx-auto flex justify-center">
          <Outlet />
        </div>
      </div>
    </>
  ),
  notFoundComponent: () => <NotFoundPage />,
});

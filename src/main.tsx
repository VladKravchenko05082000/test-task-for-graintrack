import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { UserModelContextProvider, useUserModelContext } from "./context";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import { Theme } from "@radix-ui/themes";

import "./index.css";
import "@radix-ui/themes/styles.css";

const router = createRouter({
  routeTree,
  context: {
    authToken: null,
    userData: {},
    isLogged: false,
    setUserData: () => {},
    setIsLogged: () => {},
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const InnerApp: React.FC = () => {
  const { authToken } = useUserModelContext();

  return <RouterProvider router={router} context={{ authToken }} />;
};

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Theme hasBackground={false}>
        <UserModelContextProvider>
          <InnerApp />
        </UserModelContextProvider>
      </Theme>
    </StrictMode>,
  );
}

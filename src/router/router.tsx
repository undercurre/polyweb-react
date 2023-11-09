import Index from "../view/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        // Single route in lazy file
        lazy: () => import("../view/about/index"),
      },
      {
        path: "store",
        // Single route in lazy file
        lazy: () => import("../view/store/counter"),
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;

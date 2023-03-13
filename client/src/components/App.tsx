import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Fermi</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

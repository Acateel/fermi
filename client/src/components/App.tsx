import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import ConversationList from "./conversation/ConversationList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Fermi</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/conversation",
    element: <ConversationList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

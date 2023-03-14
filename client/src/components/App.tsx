import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import Conversation from "./conversation/Conversation";
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
  {
    path: "/conversation/:id",
    element: <Conversation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

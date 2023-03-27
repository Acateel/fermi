import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Registration from "./auth/Registration";
import Conversation from "./conversation/Conversation";
import ConversationList from "./conversation/ConversationList";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/logout",
    element: <Logout />,
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

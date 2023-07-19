import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Authentication/Login/Login";
import Authentication from "./layouts/Authentication";
import Registration from "./components/Authentication/Registration/Registration";
import { useContext } from "react";
import { AuthContext } from "./components/Context/UserContext";

function App() {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: user ? <h1>Home{user}</h1> : <h1>Hello member</h1>
        },
        {
          path: '/', element: <h1>Home</h1>
        }
      ]
    },
    {
      path: '/login', element: <Authentication />, children: [
        {
          path: '/login/signin', element: <Login />
        },
        {
          path: '/login/signup', element: <Registration />
        }
      ]
    }

  ])
  return <RouterProvider router={router} />
}

export default App;

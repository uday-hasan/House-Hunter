import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Authentication/Login/Login";
import Authentication from "./layouts/Authentication";
import Registration from "./components/Authentication/Registration/Registration";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNew from "./components/Dashboard/AddNew";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: <Home />
        },
        {
          path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>, children: [
            {
              path: '/dashboard/add', element: <AddNew />
            }
          ]
        },
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

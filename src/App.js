import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Authentication/Login/Login";
import Authentication from "./layouts/Authentication";
import Registration from "./components/Authentication/Registration/Registration";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNew from "./components/Dashboard/AddNew";
import AllHouses from "./components/Dashboard/AllHouses";
import EditHouse from "./components/Dashboard/EditHouse";
import EditSingle from "./components/Dashboard/EditSingle";
import PurchItem from "./components/Home/PurchItem";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: <Home />
        },
        {
          path: '/purch/:id', element: <PurchItem />
        },
        {
          path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>, children: [
            {
              path: '/dashboard/add', element: <AddNew />
            },
            {
              path: '/dashboard/edit', element: <EditHouse />
            },
            {
              path: '/dashboard/edit/:id', element: <EditSingle />
            },
            {
              path: '/dashboard/all', element: <AllHouses />
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Authentication/Login/Login";
import Authentication from "./layouts/Authentication";
import Registration from "./components/Authentication/Registration/Registration";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: <h1>Home</h1>
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

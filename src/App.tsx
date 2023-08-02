import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import SignupPage from "./routes/SignupPage";
import SigninPage from "./routes/SigninPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";
import AddRecipeForm from "./components/AppRecipeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "explore",
        element: <SignupPage />,
      },
      {
        path: "add_recipe",
        element: <AddRecipeForm />,
      },
      {
        path: "my_recipe",
        element: <SigninPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

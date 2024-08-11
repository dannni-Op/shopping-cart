import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Settings } from "./pages/settings";
import { CartProvider } from "./context/cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/carts",
      element: <Cart />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;

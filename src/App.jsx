import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Settings } from "./pages/settings";
import { CartProvider } from "./contexts/cart";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterProvider } from "./contexts/filter";

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
      <BrowserRouter>
        <FilterProvider>
          <CartProvider>
            <Navbar />
            <ToastContainer />
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carts" element={<Cart />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </AnimatePresence>
          </CartProvider>
        </FilterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

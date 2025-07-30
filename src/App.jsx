/**
 *  Basic Layout of the App
 *
 *  - Header
 *    - Logo
 *    - Navbar (Home / About / Cart)
 *
 *  - Body
 *    - Search bar components
 *    - Restaurant Container
 *      - Restaurant Card
 *
 *  - Footer
 *    - Copyright
 *    - Links
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import RestMenu from "./pages/RestMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

// Chunking
// Code Spliting
// Dynamic Bundling
// Lasy Loading
// Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurant/:restId" element={<RestMenu />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<Shimmer />}>
                <Grocery />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

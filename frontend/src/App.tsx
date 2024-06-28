import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/loader";
import Header from "./components/header";
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
function App() {

  return (
<Router>
  <Header/>
<Suspense fallback={<Loader/>}>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="/cart" element={<Cart />} />


   
  </Routes>
</Suspense>
</Router>
  )
}

export default App

import { useSmoothScroll } from "./hooks/useSmoothScroll";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import Home from "./pages/Home/Home";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
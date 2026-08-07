import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameScreen as AllProducts } from "./screens/AllProducts";
import { FrameScreen as ProductDetail } from "./screens/ProductDetail";
import { Home1 } from "./screens/Home1/Home1";
import { Home2 } from "./screens/Home2/Home2";
import { Home3 } from "./screens/Home3/Home3";
import { Index } from "./screens/Index/Index";
import { Search } from "./screens/Search/Search";
import { List } from "./screens/List/List";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/home1", element: <Home1 /> },
  { path: "/home2", element: <Home2 /> },
  { path: "/home3", element: <Home3 /> },
  { path: "/products", element: <AllProducts /> },
  { path: "/product/:slug", element: <ProductDetail /> },
  { path: "/search", element: <Search /> },
  { path: "/list", element: <List /> },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

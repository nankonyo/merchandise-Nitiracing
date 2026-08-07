import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameScreen as AllProducts } from "./screens/AllProducts";
import { FrameScreen as ProductDetail } from "./screens/ProductDetail";
import { Merchandise } from "./screens/Merchandise/Merchandise";
import { Search } from "./screens/Search/Search";
import { List } from "./screens/List/List";

const router = createBrowserRouter([
  { path: "/", element: <Merchandise /> },
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

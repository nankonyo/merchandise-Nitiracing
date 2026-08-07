import { Link } from "react-router-dom";

const pages = [
  { to: "/", label: "/ — Homepage" },
  { to: "/products", label: "/products — All Products" },
  { to: "/search", label: "/search — Search" },
  { to: "/list", label: "/list — Navigation list" },
];

const detailSlugs = [
  { slug: "essential-t-shirt", label: "Essential T-Shirt" },
  { slug: "team-jersey", label: "Team Jersey" },
  { slug: "racer-jacket", label: "Racer Jacket" },
  { slug: "classic-cap", label: "Classic Cap" },
];

export const List = () => (
  <main className="flex min-h-screen flex-col items-start gap-4 bg-black p-20 text-white">
    <h1 className="[font-family:'Tektur',Helvetica] text-2xl font-bold">
      Navigation
    </h1>
    <ul className="flex flex-col gap-2">
      {pages.map((page) => (
        <li key={page.to}>
          <Link
            to={page.to}
            className="text-[#006ee3] underline visited:text-[#006ee3]"
          >
            {page.label}
          </Link>
        </li>
      ))}
    </ul>
    <h2 className="mt-6 [font-family:'Tektur',Helvetica] text-xl font-bold">
      Product detail (slug)
    </h2>
    <ul className="flex flex-col gap-2">
      {detailSlugs.map((product) => (
        <li key={product.slug}>
          <Link
            to={`/product/${product.slug}`}
            className="text-[#006ee3] underline visited:text-[#006ee3]"
          >
            /product/{product.slug} — {product.label}
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

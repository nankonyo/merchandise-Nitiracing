import { Link } from "react-router-dom";
import { Home, House, Store, LayoutGrid, Search, List, Package } from "lucide-react";

const routes = [
  { to: "/home1", title: "Home 1", desc: "Homepage asli", Icon: Home },
  { to: "/home2", title: "Home 2", desc: "Homepage look 2", Icon: House },
  { to: "/home3", title: "Home 3", desc: "Homepage look 3", Icon: Store },
  { to: "/products", title: "All Products", desc: "Katalog produk", Icon: LayoutGrid },
  { to: "/product/essential-t-shirt", title: "Product Detail", desc: "Detail produk", Icon: Package },
  { to: "/search", title: "Search", desc: "Cari produk", Icon: Search },
  { to: "/list", title: "Navigation List", desc: "Menu navigasi", Icon: List },
];

export const Index = () => (
  <main className="flex min-h-screen flex-col items-center gap-10 bg-black px-20 py-16 text-white">
    <header className="flex flex-col items-center gap-2 text-center">
      <h1 className="[font-family:'Tektur',Helvetica] text-3xl font-bold">
        Nitiracing Merchandise
      </h1>
      <p className="[font-family:'Mulish',Helvetica] text-base text-white/60">
        Pilih menu navigasi
      </p>
    </header>
    <nav className="grid w-full max-w-4xl grid-cols-3 gap-4">
      {routes.map(({ to, title, desc, Icon }) => (
        <Link
          key={to}
          to={to}
          className="group flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-[#006ee3] hover:bg-white/10"
        >
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden="true" />
          <span className="flex flex-col gap-1">
            <span className="[font-family:'Tektur',Helvetica] text-lg font-bold">
              {title}
            </span>
            <span className="[font-family:'Mulish',Helvetica] text-sm text-white/60">
              {desc}
            </span>
            <span className="[font-family:'Mulish',Helvetica] text-xs text-[#006ee3]">
              {to}
            </span>
          </span>
        </Link>
      ))}
    </nav>
  </main>
);

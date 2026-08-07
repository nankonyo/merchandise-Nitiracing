import { Link } from "react-router-dom";

const routes = [
  { to: "/home1", title: "Home 1", desc: "Homepage asli", icon: "🏠" },
  { to: "/home2", title: "Home 2", desc: "Homepage look 2", icon: "🏠" },
  { to: "/home3", title: "Home 3", desc: "Homepage look 3", icon: "🏠" },
  { to: "/products", title: "All Products", desc: "Katalog produk", icon: "🛍️" },
  { to: "/product/essential-t-shirt", title: "Product Detail", desc: "Detail produk", icon: "📦" },
  { to: "/search", title: "Search", desc: "Cari produk", icon: "🔍" },
  { to: "/list", title: "Navigation List", desc: "Menu navigasi", icon: "🧭" },
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
      {routes.map((route) => (
        <Link
          key={route.to}
          to={route.to}
          className="group flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-[#006ee3] hover:bg-white/10"
        >
          <span className="text-3xl" aria-hidden="true">
            {route.icon}
          </span>
          <span className="flex flex-col gap-1">
            <span className="[font-family:'Tektur',Helvetica] text-lg font-bold">
              {route.title}
            </span>
            <span className="[font-family:'Mulish',Helvetica] text-sm text-white/60">
              {route.desc}
            </span>
            <span className="[font-family:'Mulish',Helvetica] text-xs text-[#006ee3]">
              {route.to}
            </span>
          </span>
        </Link>
      ))}
    </nav>
  </main>
);

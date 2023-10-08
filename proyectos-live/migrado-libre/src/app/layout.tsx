import type {Metadata} from "next";

import Image from "next/image";
import "./globals.css";

import {getProducts} from "./services";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

function Products({products}: {products: Product[]}) {
  const transformPrice = new Intl.NumberFormat("es-ar", {
    currency: "ARS",
    style: "currency",
  });

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {products.map((product) => (
        <li key={product.id}>
          <div className="relative h-28 w-28">
            <Image
              alt={product.title}
              className="object-cover"
              layout="fill"
              src={product.thumbnail}
            />
          </div>
          <p>{product.title}</p>
          <p>{transformPrice.format(product.price)}</p>
        </li>
      ))}
    </ul>
  );
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const products = await getProducts();

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Migrado Libre</header>
        <main className="py-8">
          {children}
          <Products products={products} />
        </main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Don Miguel
        </footer>
      </body>
    </html>
  );
}

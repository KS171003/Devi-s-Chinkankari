import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="pt-24 px-6">
      <section className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl mb-12">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
              className="cursor-pointer block"
            >
              <div className="aspect-[3/4] bg-neutral-800 mb-4" />

              <h3 className="font-serif text-lg">{product.name}</h3>
              <p className="text-gray-400">₹{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const products = [
  {
    id: 1,
    name: "Ivory Chikankari Kurta",
    price: "₹6,999",
  },
  {
    id: 2,
    name: "Black Hand-Embroidered Jacket",
    price: "₹12,999",
  },
  {
    id: 3,
    name: "Minimal Chikankari Shirt",
    price: "₹5,499",
  },
]

export default function Home() {
  return (
    <main className="pt-24 px-6">
      <section className="max-w-7xl mx-auto">

        <h2 className="font-serif text-4xl mb-12">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="cursor-pointer">
              <div className="aspect-[3/4] bg-neutral-800 mb-4" />

              <h3 className="font-serif text-lg">
                {product.name}
              </h3>
              <p className="text-gray-400">
                {product.price}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  )
}
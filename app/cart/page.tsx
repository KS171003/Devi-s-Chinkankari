"use client"

import { useCartStore } from "@/store/cartStore"

export default function CartPage() {
  const items = useCartStore((state) => state.items)

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="pt-24 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl mb-12">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/10 pb-4"
                >
                  <div>
                    <h3 className="font-serif text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-400">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center">
              <p className="text-xl">
                Total: ₹{total}
              </p>

              <button className="border border-accent px-10 py-3 uppercase tracking-widest hover:bg-accent hover:text-black transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
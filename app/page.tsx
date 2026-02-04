export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl tracking-wide">
        DEVI CHIKANKARI
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
        Luxury unisex chikankari clothing crafted with timeless elegance
        </p>

        <button className="mt-10 border border-accent px-10 py-3 uppercase tracking-widest hover:bg-accent hover:text-black transition">
          Shop Collection
        </button>
      </section>
    </main>
  )
}
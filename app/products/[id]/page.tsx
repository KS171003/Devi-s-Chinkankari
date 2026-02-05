import mongoose from "mongoose"
import { connectDB } from "@/lib/db"
import Product from "@/models/Product"
import AddToCartButton from "@/components/AddToCartButton"

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params   // ✅ FIX (IMPORTANT)

  await connectDB()

  // ✅ Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return (
      <div className="pt-24 text-center text-xl">
        Invalid product ID
      </div>
    )
  }

  const product = await Product.findById(id).lean()

  if (!product) {
    return (
      <div className="pt-24 text-center text-xl">
        Product not found
      </div>
    )
  }

  return (
    <main className="pt-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Image */}
        <div className="aspect-[3/4] bg-neutral-800" />

        {/* Info */}
        <div>
          <h1 className="font-serif text-4xl mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            ₹{product.price}
          </p>

          <AddToCartButton
            id={product._id.toString()}
            name={product.name}
            price={product.price}
          />
        </div>

      </div>
    </main>
  )
}
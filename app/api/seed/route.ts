import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Product from "@/models/Product"

export async function GET() {
  await connectDB()

  const existing = await Product.countDocuments()

  if (existing > 0) {
    return NextResponse.json({
      message: "Products already seeded",
    })
  }

  await Product.create([
    {
      name: "Ivory Chikankari Kurta",
      price: 6999,
      image: "https://via.placeholder.com/400",
      category: "unisex",
    },
    {
      name: "Black Hand-Embroidered Jacket",
      price: 12999,
      image: "https://via.placeholder.com/400",
      category: "unisex",
    },
    {
      name: "Minimal Chikankari Shirt",
      price: 5499,
      image: "https://via.placeholder.com/400",
      category: "unisex",
    },
  ])

  return NextResponse.json({
    message: "Products seeded successfully",
  })
}
import { Schema, model, models } from "mongoose"

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "unisex" },
  },
  { timestamps: true }
)

export default models.Product || model("Product", ProductSchema)
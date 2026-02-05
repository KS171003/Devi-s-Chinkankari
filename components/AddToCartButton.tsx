"use client";

import { useCartStore } from "@/store/cartStore";

type Props = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({ id, name, price }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem({ id, name, price })}
      className="border border-accent px-10 py-3 uppercase tracking-widest hover:bg-accent hover:text-black transition"
    >
      Add to Cart
    </button>
  );
}

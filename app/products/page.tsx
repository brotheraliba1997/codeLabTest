"use client";
import { useEffect, useState } from "react";
import { getproducts } from "@/lib/api";
import ProductCard from "@/components/productCard";
import Cart from "@/components/Cart";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    getproducts().then((res: any) => setProducts(res.data));
  }, []);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price,
              }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, subtotal: product.price }];
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="col-span-1">
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

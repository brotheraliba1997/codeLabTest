"use client";
import { createSale } from "@/lib/api";

export default function Cart({ cart, setCart }: { cart: any[]; setCart: any }) {
  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  const handleCheckout = async () => {
    const saleData = {
      invoiceNumber: `INV-${Date.now()}`,
      totalAmount: total,
      items: cart.map((item) => ({
        productPointId: item.id,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.subtotal,
      })),
    };

    try {
      const res = await createSale(saleData);

      console.log(res.message)
    //   alert(
    //     res.message ? "Sale created successfully: " + res.message : "checkout is empty!"
    //   );
      setCart([]); // empty cart after checkout
    } catch (err) {
      alert("Error creating sale");
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-3">Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>${item.subtotal}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
      >
        Checkout
      </button>
    </div>
  );
}

export default function ProductCard({ product, onAdd }: { product: any; onAdd: () => void }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500">SKU: {product.sku}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <button
        onClick={onAdd}
        className="mt-2 w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

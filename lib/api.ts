export const API_URL = "http://localhost:5000/api"; // NestJS backend URL

// Fetch all product
export async function getproducts() {
  const res = await fetch(`${API_URL}/product`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

// Fetch single product
export async function getProducts(id: string) {
  const res = await fetch(`${API_URL}/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

// Create a new sale
export async function createSale(saleData: any) {
  const res = await fetch(`${API_URL}/sale`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(saleData),
  });
  if (!res.ok) throw new Error("Failed to create sale");
  return res.json();
}

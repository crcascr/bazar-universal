import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const products = await getProducts();
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(filteredProducts);
}

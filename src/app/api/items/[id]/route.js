import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const products = await getProducts();
  const product = products.find((product) => product.id === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json(
      { message: "Producto no encontrado" },
      { status: 404 }
    );
  }
}

import { Suspense } from "react";
import ProductDetail from "@/components/ProductDetail";

function ProductPage({ params }) {
  return (
    <div className="container mx-auto px-4">
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductDetail id={params.id} />
      </Suspense>
    </div>
  );
}

export default ProductPage;

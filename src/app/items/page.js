import { Suspense } from "react";
import ProductList from "@/components/ProductList";

function SearchResults({ searchParams }) {
  const query = searchParams.search;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Resultados para: {query}</h2>
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductList query={query} />
      </Suspense>
    </div>
  );
}

export default SearchResults;

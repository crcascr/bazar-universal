import Link from "next/link";
import StarRating from "./StarRating";

async function getProducts(query) {
  const res = await fetch(`http://localhost:3000/api/items?q=${query}`);
  if (!res.ok) {
    throw new Error("No se han podido obtener los productos");
  }
  return res.json();
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

async function ProductList({ query }) {
  const products = await getProducts(query);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-2xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-2 rounded-2xl"
          />
          <h3 className="text-xl font-light">
            {capitalizeWords(product.title)}
          </h3>
          <p className="text-gray-500 mb-2">
            Marca: {capitalizeWords(product.brand)}
          </p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex flex-row items-center justify-between my-1">
            <div className="flex flex-col">
              <p className="text-xs mt-2 text-gray-400 line-through">
                ${" "}
                {(
                  product.price *
                  (1 + product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
              <div className="flex flex-row items-center">
                <p className="text-2xl font-normal">$ {product.price}</p>
                <p className="text-sm ml-2 text-green-500">
                  {product.discountPercentage}% OFF
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <p className="pr-1 text-sm">{product.rating}</p>
              <StarRating rating={product.rating} />
            </div>
          </div>
          {product.stock <= 10 && (
            <p className="text-red-500 mb-1">Últimas unidades disponibles</p>
          )}
          <Link
            href={`/items/${product.id}`}
            className="text-blue-500 hover:underline mb-1"
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

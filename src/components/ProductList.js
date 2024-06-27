import Link from "next/link";

async function getProducts(query) {
  const res = await fetch(`http://localhost:3000/api/items?q=${query}`);
  if (!res.ok) {
    throw new Error("No se han podido obtener los productos");
  }
  return res.json();
}

async function ProductList({ query }) {
  const products = await getProducts(query);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
          <Link
            href={`/items/${product.id}`}
            className="text-blue-500 hover:underline"
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

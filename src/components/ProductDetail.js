async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/items/${id}`);
  if (!res.ok) {
    throw new Error("No se han podido obtener el producto");
  }
  return res.json();
}

async function ProductDetail({ id }) {
  const product = await getProduct(id);
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-bold mb-2">${product.price}</p>
      <p className="text-lg mb-4">Categoría: {product.category}</p>
      <button className="bg-green-500 text-white p-2 rounded">Comprar</button>
    </div>
  );
}

export default ProductDetail;

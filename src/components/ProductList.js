import Link from "next/link";
import StarRating from "./StarRating";
import CapitalizeWords from "./CapitalizeWords";
import Image from "next/image";
import CategoryList from "./CategoryList";
import ProductCategory from "./ProductCategory";

async function getProducts(query) {
  const res = await fetch(`http://localhost:3000/api/items?q=${query}`);
  if (!res.ok) {
    throw new Error("No se han podido obtener los productos");
  }
  return res.json();
}

function productsCategories(products) {
  const categoriesMap = new Map();

  products.forEach((product) => {
    if (categoriesMap.has(product.category)) {
      categoriesMap.set(
        product.category,
        categoriesMap.get(product.category) + 1
      );
    } else {
      categoriesMap.set(product.category, 1);
    }
  });

  return Array.from(categoriesMap, ([category, count]) => ({
    category,
    count,
  }));
}

async function ProductList({ query }) {
  const products = await getProducts(query);
  const categoriesList = productsCategories(products);
  return (
    <div>
      <p className="text-gray-500 text-sm mt-1 mb-4 select-none">
        {products.length} resultados
      </p>
      <div>
        <CategoryList categories={categoriesList} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-custom p-4 rounded-2xl">
            <Image
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-2 rounded-2xl"
              width="1280"
              height="720"
              placeholder="blur"
              blurDataURL="/fallback.svg"
            />
            <ProductCategory
              category={product.category}
              iconWidth="w-6"
              iconHeight="h-6"
              fontSize="text-normal"
            />
            <h3 className="text-xl font-light">
              {CapitalizeWords(product.title)}
            </h3>
            <p className="text-gray-500 mb-2">
              Marca: {CapitalizeWords(product.brand)}
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
    </div>
  );
}

export default ProductList;

import StarRating from "./StarRating";
import CapitalizeWords from "./CapitalizeWords";
import Image from "next/image";
import ProductCategory from "./ProductCategory";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/items/${id}`);
  if (!res.ok) {
    throw new Error("No se han podido obtener el producto");
  }
  return res.json();
}

function randomPosition() {
  return Math.floor(Math.random() * 10) + 1;
}

async function ProductDetail({ id }) {
  const product = await getProduct(id);
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-[410px] md:min-h-[500px] md:px-4 py-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="h-full object-cover rounded-xl w-full"
            width="1280"
            height="720"
            placeholder="blur"
            blurDataURL="/fallback.svg"
          />
        </div>
        <div className="flex flex-col md:ml-2 md:mr-8 md:max-w-[352px]">
          <div className="flex flex-row items-center mb-2">
            <p className="text-xs mr-1 select-none">{randomPosition()}° en</p>
            {ProductCategory({
              category: product.category,
              iconWidth: "w-4",
              iconHeight: "h-4",
              fontSize: "text-xs",
            })}
          </div>
          <h2 className="text-2xl font-bold md:mb-4">
            {CapitalizeWords(product.title)}
          </h2>
          <div className="flex flex-row items-center">
            <p className="text-gray-600 mr-2 text-sm">{product.rating}</p>
            <StarRating rating={product.rating} />
          </div>
          <div className="flex flex-col">
            <p className="text-base mt-2 text-gray-400 line-through">
              ${" "}
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2
              )}
            </p>
            <div className="flex flex-row items-center">
              <p className="text-4xl font-light">$ {product.price}</p>
              <p className="text-lg font-normal ml-2 text-green-500">
                {product.discountPercentage}% OFF
              </p>
            </div>
          </div>
          <p className="text-sm font-normal mt-4">Detalles del producto</p>
          <p className="text-gray-600 text-sm font-normal mt-2">
            {product.description}
          </p>
        </div>
        <div className="border-custom border md:max-w-[325px] md:min-w-[325px] w-full flex flex-col rounded-lg h-fit">
          <div className="py-6 md:px-4 flex flex-col">
            {product.price < 15 ? (
              <p className="mb-1">Envío a nivel nacional</p>
            ) : (
              <p className="mb-1">
                <span className="text-green-500 font-semibold text-base">
                  Envío gratis
                </span>{" "}
                a todo el país
              </p>
            )}
            <div className="md:mt-5 mb-2">
              {product.stock <= 10 ? (
                <p className="text-red-500 font-semibold">
                  Últimas unidades disponibles
                </p>
              ) : (
                <p className="font-semibold">Stock disponible</p>
              )}
            </div>
            <div className="flex flex-row items-center mb-3">
              <p className="text-black/90">Cantidad:</p>
              <select className="ml-1 font-semibold border-none w-[30%] bg-inherit">
                <option value="1">1 unidad</option>
                <option value="2">2 unidades</option>
                <option value="3">3 unidades</option>
                <option value="4">4 unidades</option>
                <option value="5">5 unidades</option>
                <option value="6">6 unidades</option>
              </select>
              <p
                className={`ml-2 text-sm ${
                  product.stock <= 10 ? "text-red-500" : "text-black/55"
                }`}
              >
                (
                {product.stock <= 10
                  ? product.stock
                  : product.stock < 100
                  ? "+" + parseInt(product.stock / 10) * 10
                  : "+99"}{" "}
                disponibles)
              </p>
            </div>
            <button className="bg-blue-500 text-white px-6 h-12 font-semibold rounded-md mt-2">
              Comprar ahora
            </button>
            <p className="my-5 text-sm text-black/90 select-none">
              Tienda oficial{" "}
              <span className="text-blue-500 cursor-pointer">
                {CapitalizeWords(product.brand)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

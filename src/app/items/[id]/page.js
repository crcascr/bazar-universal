import { Suspense } from "react";
import ProductDetail from "@/components/ProductDetail";

function ProductPage({ params }) {
  return (
    <div className="container mx-auto p-4 h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#e0e0e0"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#3498db"
                strokeWidth="4"
                fill="none"
                strokeDasharray="31.4 31.4"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <style>{`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.1);
                }
                100% {
                  transform: scale(1);
                }
              }
              svg {
                animation: pulse 1s infinite;
              }
            `}</style>
          </div>
        }
      >
        <ProductDetail id={params.id} />
      </Suspense>
    </div>
  );
}

export default ProductPage;

import { getCategoryInfo } from "./CategoryMapping";
import CapitalizeWords from "./CapitalizeWords";

function ProductCategory({ category, iconWidth, iconHeight, fontSize }) {
  const { color, icon: Icon } = getCategoryInfo(category);
  return (
    <div
      className="flex w-fit items-center p-1 rounded-lg shadow-md select-none"
      style={{ backgroundColor: color }}
    >
      {Icon && (
        <Icon className={`text-black mr-2 ${iconWidth} ${iconHeight}`} />
      )}
      <span className={`text-black ${fontSize}`}>
        {CapitalizeWords(category)}
      </span>
    </div>
  );
}

export default ProductCategory;

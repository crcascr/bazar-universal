import { getCategoryInfo } from "./CategoryMapping";
import CapitalizeWords from "./CapitalizeWords";

function CategoryList({ categories }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pb-4">
      {categories.map(({ category, count }) => {
        const { color, icon: Icon } = getCategoryInfo(category);
        return (
          <div
            key={category}
            className="flex items-center p-2 rounded-lg shadow-md cursor-pointer"
            style={{ backgroundColor: color }}
          >
            {Icon && <Icon className="w-6 h-6 mr-2 text-black" />}
            <span className="text-black font-semibold truncate">
              {CapitalizeWords(category)}
            </span>
            <span className="text-black font-semibold pl-1">({count})</span>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;

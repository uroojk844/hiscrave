import { category } from "../../data/category";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="grid grid-cols-3 gap-5 py-16 justify-between">
      {category.map((category, index) => (
        <CategoryCard category={category} key={index} />
      ))}
    </div>
  );
};

export default Category;

import { category } from "../../data/category_circle";
import CategoryImage from "./CategoryImage";

const CircleCategory = () => {
  return (
    <div className="flex gap-x-5 py-16 justify-between">
      {category.map((category, index) => (
        <CategoryImage category={category} key={index} />
      ))}
    </div>
  );
};

export default CircleCategory;

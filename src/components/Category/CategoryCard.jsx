const CategoryCard = ({ category }) => {
  return (
    <div className="relative grid gap-4 place-items-center">
      <img
        style={{ backgroundColor: category.color }}
        src={category.img}
        className="w-full"
        alt=""
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 backdrop-blur-xl text-center text-white font-semibold">
        {category.text}
      </div>
    </div>
  );
};

export default CategoryCard;

const CategoryImage = ({ category }) => {
  return (
    <div className="grid gap-4 place-items-center">
      <img
        style={{ backgroundColor: category.color }}
        src={category.img}
        className="rounded-full w-[170px] aspect-square"
        alt=""
        loading="lazy"
      />
      <div className="font-semibold">{category.text}</div>
    </div>
  );
};

export default CategoryImage;

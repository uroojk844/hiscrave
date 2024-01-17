import ItemCard from "./ItemCard";
import Rectangle3 from "../../assets/Rectangle 3.png";
import Rectangle4 from "../../assets/Rectangle 4.png";
import Rectangle5 from "../../assets/Rectangle 5.png";
import Rectangle6 from "../../assets/Rectangle 6.png";

const ItemList = () => {
  const items = [Rectangle3, Rectangle4, Rectangle5, Rectangle6];

  return (
    <div className="grid grid-cols-4 gap-5 justify-between">
      {items.map((img) => (
        <ItemCard img={img} />
      ))}
    </div>
  );
};

export default ItemList;

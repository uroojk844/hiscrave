import SaleCard from "./SaleCard";
import Diamond from "../../assets/diamond.png";
import Discount from "../../assets/discount.png";

const SaleCards = () => {
  const cards = [
    {
      img: Diamond,
      discount: 85,
      color: "#CCCEA7",
    },
    {
      img: Discount,
      discount: 75,
      color: "#D6BEBE",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 py-12">
      {cards.map((card) => (
        <SaleCard card={card}/>
      ))}
    </div>
  );
};

export default SaleCards;

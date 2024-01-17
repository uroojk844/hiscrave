const SaleCard = ({ card }) => {
  return (
    <div
      className="font-semibold grid place-items-center gap-6 py-14"
      style={{ backgroundColor: card.color }}
    >
      <img src={card.img} className="mb-6" />
      <div className="text-4xl">Hurry Up!</div>
      <div className="text-[84px]">{card.discount}% OFF</div>
      <div className="text-4xl">Sale</div>
      <button className="border py-3 px-8 text-white">SHOP NOW</button>
    </div>
  );
};

export default SaleCard;

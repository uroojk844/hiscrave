import { FaShareAlt, FaShoppingCart } from "react-icons/fa";
import { RiHeart2Fill } from "react-icons/ri";

const ItemCard = ({ img }) => {
  return (
    <div className="grid gap-1">
      <div className="relative card-image">
        <img loading="lazy" src={img} className="w-full" alt="" />
        <div className="card-options cursor-pointer hidden backdrop-blur-md inset-0 absolute items-center justify-center gap-4">
          <div className="w-12 aspect-square rounded-full bg-white hover:bg-red-900 hover:text-white transition-colors grid place-items-center text-primary text-xl">
            <FaShoppingCart />
          </div>
          <div className="w-12 aspect-square rounded-full bg-white hover:bg-red-900 hover:text-white transition-colors grid place-items-center text-primary text-xl">
            <RiHeart2Fill />
          </div>
          <div className="w-12 aspect-square rounded-full bg-white hover:bg-red-900 hover:text-white transition-colors grid place-items-center text-primary text-xl">
            <FaShareAlt />
          </div>
        </div>
      </div>
      <div className="text-sm text-center">
        Men Henley Neck <br /> Full Sleeve Red Wine
      </div>
      <div className="flex gap-1 items-center justify-center">
        <div className="text-xl font-bold">₹399</div>
        <div className="text-sm text-red-500 line-through">₹1299</div>
      </div>
      <div className="flex gap-x-4 justify-center">
        <div className="border cursor-pointer hover:bg-gray-300 w-8 aspect-square grid place-items-center font-medium">
          S
        </div>
        <div className="border cursor-pointer hover:bg-gray-300 w-8 aspect-square grid place-items-center font-medium">
          M
        </div>
        <div className="border cursor-pointer hover:bg-gray-300 w-8 aspect-square grid place-items-center font-medium">
          L
        </div>
        <div className="border cursor-pointer hover:bg-gray-300 w-8 aspect-square grid place-items-center font-medium">
          XL
        </div>
        <div className="border cursor-pointer hover:bg-gray-300 w-8 aspect-square grid place-items-center font-medium">
          XXL
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

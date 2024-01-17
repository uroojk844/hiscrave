import { RiHeart2Line, RiMenu4Fill } from "react-icons/ri";
import { LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <RiMenu4Fill size={20} className="text-pink-800" />
      <div className="">Logo here</div>
      <div className="flex gap-4 text-gray-500">
        <LuSearch size={20} />
        <RiHeart2Line size={20} />
        <LuShoppingBag size={20} />
        <LuUser size={20} />
      </div>
    </nav>
  );
};

export default NavBar;

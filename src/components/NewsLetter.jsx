import MaxContainer from "./MaxContainer";
import Mask from "../assets/Mask group.png"

const NewsLetter = () => {
  return (
    <MaxContainer>
      <section className="relative overflow-hidden gradient py-16 grid place-items-center mb-16">
        <img src={Mask} alt="" className="absolute w-full -z-10" />
        <div className="text-4xl font-semibold text-white max-w-3xl text-center mb-6">
          Subscribe to get updates on exciting offers & deals
        </div>
        <div className="flex max-w-2xl w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-1 bg-white/35 px-5 text-white placeholder:text-white/70"
          />
          <button className="bg-gray-200 text-primary font-semibold p-4">
            Subscribe
          </button>
        </div>
      </section>
    </MaxContainer>
  );
};

export default NewsLetter;

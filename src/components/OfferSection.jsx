import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";
import image5 from "../assets/image 5.png";
import image6 from "../assets/image 6.png";

const OfferSection = () => {
  return (
    <div className="grid gap-10 mb-16">
      <div className="flex gap-5 justify-between">
        <img loading="lazy" src={image2} alt="" />
        <img loading="lazy" src={image3} alt="" />
      </div>
      <div className="flex gap-5 justify-between">
        <img loading="lazy" src={image4} alt="" />
        <img loading="lazy" src={image5} alt="" />
        <img loading="lazy" src={image6} alt="" />
      </div>
    </div>
  );
};

export default OfferSection;

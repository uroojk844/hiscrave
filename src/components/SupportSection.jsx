import Return from "../assets/return.png";
import Medal from "../assets/medal.png";
import Safe from "../assets/safe.png";
import Help from "../assets/help.png";
import MaxContainer from "./MaxContainer";

const SupportSection = () => {
  const data = [
    {
      img: Return,
      label: "7 Days Return",
    },
    {
      img: Medal,
      label: "Quality Products",
    },
    {
      img: Safe,
      label: "Safe Payment",
    },
    {
      img: Help,
      label: "24x7 Helpline",
    },
  ];

  return (
    <div className="relative mb-16" style={{ backgroundColor: "#F5F4F2" }}>
      <div className="max-xl:hidden primary aspect-square w-56 rounded-full absolute top-1/2 -translate-x-1/2"></div>
      <div className="max-xl:hidden primary aspect-square w-56 rounded-full absolute -top-1/2 right-0 translate-x-1/2"></div>
      <MaxContainer>
        <div className="flex gap-36 justify-between py-10">
          {data.map((card) => {
            return (
              <div className="grid place-items-center gap-4">
                <img
                  loading="lazy"
                  className="w-20 aspect-square object-contain"
                  src={card.img}
                  alt=""
                />
                <div>{card.label}</div>
              </div>
            );
          })}
        </div>
      </MaxContainer>
    </div>
  );
};

export default SupportSection;

const Heading = ({ children }) => {
  return (
    <div className="flex items-center gap-6 mb-12">
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: "#FFC7D1" }}
      ></div>
      <div className="text-4xl text-nowrap font-semibold text-zinc-950">
        {children}
      </div>
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: "#FFC7D1" }}
      ></div>
    </div>
  );
};

export default Heading;

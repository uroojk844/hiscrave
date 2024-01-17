import ItemList from "./ItemList";
import Heading from "./Heading";
import Button from "./Button";

const TrendingSection = ({ title, row2 = false }) => {
  return (
    <section className="grid mb-16">
      <Heading>{title}</Heading>
      <div className="space-y-12 mb-12">
        <ItemList />
        {row2 && <ItemList />}
      </div>
      <div className="text-center">
        <Button />
      </div>
    </section>
  );
};

export default TrendingSection;

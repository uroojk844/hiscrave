import Banner from "../assets/image 1.png";
import Banner2 from "../assets/Banner 2.png";
import Banner3 from "../assets/Banner 3.png";
import MaxContainer from "../components/MaxContainer";
import OfferSection from "../components/OfferSection";
import TrendingSection from "../components/TrendingSection";
import CircleCategory from "../components/CircleCategory";
import Category from "../components/Category";
import SaleCards from "../components/SaleCard";
import SupportSection from "../components/SupportSection";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <img src={Banner} className="w-full" alt="" />
      <MaxContainer>
        <CircleCategory />
        <OfferSection />
        <TrendingSection title="Trending T-Shirts" row2 />
        <TrendingSection title="Featured Products" />
      </MaxContainer>
      <img src={Banner2} className="w-full mb-16" alt="" />
      <MaxContainer>
        <TrendingSection title="New Products" />
        <TrendingSection title="Best Selling Products" />
        <Category />
      </MaxContainer>
      <img src={Banner3} className="w-full mb-16" alt="" />
      <MaxContainer>
        <SaleCards />
      </MaxContainer>
      <SupportSection />
      <NewsLetter />
      <hr />
      <Footer />
    </>
  );
};

export default HomePage;

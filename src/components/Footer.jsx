import MaxContainer from "./MaxContainer";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/twitter.png";
import Twitter from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Pinterest from "../assets/pinterest.png";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <MaxContainer>
        <footer className="flex pt-12 pb-8">
          <div className="max-w-sm">
            <div className="text-sm font-medium leading-7 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries....
            </div>
            <div className="flex gap-3">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Insta} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Pinterest} alt="" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg mb-6 text-primary font-semibold text-nowrap">
              ONLINE SHOPPING
            </div>
            <div className="grid gap-4 text-sm font-medium text-nowrap">
              <div>Men’s T-Shirts</div>
              <div>Women’s Wear</div>
              <div>Winter Collections</div>
              <div>Hooded T-Shirts</div>
              <div>Streetwear Collections</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg mb-6 text-primary font-semibold text-nowrap">
              CUSTOMER POLICIES
            </div>
            <div className="grid gap-4 text-sm font-medium text-nowrap">
              <div>About Us</div>
              <div>Terms & Conditions</div>
              <div>Shipping & Returns Policy</div>
              <div>Cancellation & Refund Policy</div>
              <div>Contact Us</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-lg mb-6 text-primary font-semibold text-nowrap">
              STORE INFORMATION
            </div>
            <div className="grid gap-4 text-sm font-medium">
              <div className="flex items-start gap-4">
                <LuMapPin size={42} /> Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </div>
              <div className="flex items-start gap-4">
                <LuPhone size={18} /> Call Us: 1234567890
              </div>
              <div className="flex items-start gap-4">
                <LuMail size={18} /> Email Us: info@yourmail.com
              </div>
            </div>
          </div>
        </footer>
      </MaxContainer>
      <div
        className="grid p-4 text-center text-white"
        style={{ backgroundColor: "#20050A" }}
      >
        ©2022-23 Powered By dummy team
      </div>
    </>
  );
};

export default Footer;

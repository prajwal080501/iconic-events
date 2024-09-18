import { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Button from "./Button";
import Logo from "./Logo";
import { mobileMenu } from "../data/data";

const Mobilenav = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide nav when scrolling down, show it when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-2 w-[90%] mx-auto left-0 right-0 z-20 text-white px-5 py-4 flex bg-black/60 backdrop-blur-md h-fit justify-around rounded-lg lg:hidden transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="w-fit flex justify-evenly items-center gap-8">
        {mobileMenu.map((menu, index) => {
          const IconComponent = menu.icon;
          return <IconComponent key={index} className="w-6 h-6 text-white" />;
        })}
      </div>
      <Button
        onClick={openModal}
        className="text-normal font-bold hover:bg-blue-600 duration-200 hover:scale-105 p-2 rounded-lg bg-blue-500"
        btnText={"Get a quote"}
      />
    </nav>
  );
};

export default Mobilenav;

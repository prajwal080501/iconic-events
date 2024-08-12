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

      if (currentScrollY > lastScrollY && window.innerHeight + currentScrollY >= document.body.offsetHeight - 100) {
        // User is scrolling down and near the bottom of the page
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling up
        setIsVisible(true);
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
      className={`fixed bottom-2 w-[80%] mx-auto left-0 right-0 z-10 text-white px-5 py-4 flex bg-transparent backdrop-blur-lg bg-opacity-30 h-fit justify-around rounded-lg lg:hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-evenly items-center gap-8">
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

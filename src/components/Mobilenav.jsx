import { CgMenuLeftAlt } from "react-icons/cg";
import Button from "./Button";
import Logo from "./Logo";
import { mobileMenu } from "../data/data";
const Mobilenav = ({ openModal }) => {
  return (
    <nav className="fixed bottom-2 w-[80%]  mx-auto left-0 right-0 z-10 text-white px-5 py-4 flex bg-transparent backdrop-blur-lg bg-opacity-30 h-fit justify-around rounded-lg lg:hidden">
      {/* <div>
        <Logo brand={'Iconic Events'} />
      </div> */}
      <div className="flex justify-evenly items-center gap-8">
        {
          mobileMenu.map((menu) => {
            const IconComponent = menu.icon;
            console.log(IconComponent, 'Icom');
            return <IconComponent className="w-6 h-6 text-white" />
          })
        }
      </div>
      {/* <div className='inline-flex items-center'>
        <Button onClick={openModal} className="text-normal font-bold hover:bg-blue-600 duration-200 hover:scale-105 p-2 rounded-lg bg-blue-500" btnText={'Lets Talk'} />
      </div> */}
    </nav>
  )
}

export default Mobilenav;
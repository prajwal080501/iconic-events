import Image from "./Image";
import Icon from "../assets/Logo.jpeg"

const Logo = ({ brand }) => {
    return (
        <div className="flex items-center gap-2">
            <Image src={Icon} className={'hidden lg:inline-flex w-12 h-12 object-contain'} alt={'Logo'} />
            {/* <p className="font-extrabold text-2xl text-white">{brand}</p> */}
        </div>
    )
}

export default Logo;
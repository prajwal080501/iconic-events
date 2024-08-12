import Image from "./Image";
import Icon from "../assets/Logo.jpeg"

const Logo = ({ brand }) => {
    return (
        <div className="flex cursor-pointer items-center gap-2">
            <Image src={Icon} className={'inline-flex w-12 h-12 object-contain rounded-full'} alt={'Logo'} />
            {/* <p className="font-extrabold text-2xl text-white">{brand}</p> */}
        </div>
    )
}

export default Logo;
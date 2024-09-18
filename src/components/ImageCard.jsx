import Image from "./Image";

const ImageCard = ({image}) => {
    console.log(image,'image')
    return (
        <div>
            <Image alt="Image" src={image.image} className={'w-12 h-12'} />
        </div>
    )
}

export default ImageCard;
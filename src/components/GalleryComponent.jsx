import ImageCard from "./ImageCard"

const GalleryComponent = ({ data }) => {
    return (
        <div className="h-full w-full">
            Gallery Component
            {data.map((image) => {
                <ImageCard image={image} />
            })}
        </div>
    )
}

export default GalleryComponent
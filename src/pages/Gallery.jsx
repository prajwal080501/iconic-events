import {GalleryComponent} from "../components/components"
import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg"
;const Gallery = () => {
    let photos = [
        {
            photoId: 1,
            image: photo1,
        },
        {
            photoId: 2,
            image: photo2,
        },
    ]
    return (
        <div className="h-full w-full">
            <GalleryComponent data={photos} />
        </div>
    )
}

export default Gallery;
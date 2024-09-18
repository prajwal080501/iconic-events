import { Title } from "./components"
const CoverSection = ({ title, description, image, className }) => {
    return (
        <div className={`h-1/2 w-[98%]  text-white  flex items-center justify-center ${className}`}>
            <div className="flex flex-col items-center gap-6">
                <Title title={title} className={'text-white'} />
                {/* description */}
                <div>
                    <p className="text-gray-500 text-lg font-medium">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CoverSection;
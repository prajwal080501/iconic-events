const Card = ({ title, description, icon, index }) => {
    return (
        <div key={index} className="bg-black/70 mb-6 border border-transparent hover:border-1 hover:border-orange-300 duration-200 ease-linear cursor-pointer rounded-lg shadow-lg p-6 w-[70%] md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    ) 
}

export default Card;
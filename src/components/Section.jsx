const Section = ({ children, title, subtitle }) => {
    return (
        <section className="py-16 mt-0 bg-black/50 min-h-screen md:h-screen">
            <div className="container mx-auto px-8 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
                <h3 className="text-2xl text-gray-300 mb-8">{subtitle}</h3>
            </div>
            <div className="w-full h-full">
                {children}
            </div>
        </section>
    );
};


export default Section

const Section = ({ children, title }) => {
    return (
        <section className="py-16 mb-6 bg-zinc-900 h-full">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
            </div>
            <div className="">
                {children}
            </div>
        </section>
    )
}

export default Section;

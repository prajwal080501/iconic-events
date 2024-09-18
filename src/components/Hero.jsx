import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { GradientDivider } from "./components";
import HeroTitle from "./HeroTitle";

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image with Reduced Opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    opacity: 0.2,
                }}
            ></div>
            {/* Overlay and Text */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-4 text-center text-white p-4">
                    {/* <HeroTitle /> */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Unforgettable Events, Unmatched Experiences</h1>
                    <p className="text-lg md:text-xl w-[80%]">Expertly crafted events to bring your vision to life. From corporate gatherings to weddings, we make every moment memorable.</p>
                    <div className="w-full flex gap-8 items-center justify-center pt-6">
                        <button className="p-2 flex items-center rounded font-bold bg-orange-300 text-black">Get a quote
                            <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
                        </button>
                        <button className="bg-black/50 text-white p-2 rounded duration-200 hover:scale-105 hover:bg-black/70">Explore services</button>
                    </div>
                </div>
            </div>
            {/* Gradient Divider */}
            <div className="absolute bottom-0 w-full">
                <GradientDivider />
            </div>
        </div>
    );
};

export default Hero;

import Typewriter from 'typewriter-effect/dist/core';

const HeroTitle = () => {
    let title = document.getElementById('typewriter')
    new Typewriter(title, {
        lopp:true,
        strings: ['Hello', 'World'],
        autoStart: true,
    });
    return (
        <div>
            <h1 className="text-7xl font-bold text-white" id="typewriter"></h1>
        </div>
    )
}

export default HeroTitle;
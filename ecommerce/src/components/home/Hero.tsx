import HeroImg from "../../assets/hero_img.png";

const Hero = () => {
    return (
        <div>
            <div className="relative">
                <a href="/#" className="no-underline">
                    <img src={HeroImg} alt="Hero Background" className="border-0 max-w-full w-full" />
                    <div className="absolute top-1/2 right-[22%] -translate-y-2/4">
                        <p className="text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs uppercase px-7 py-3 lg:px-4 lg:py-2 md:px-2 md:py-2 sm:px-0 sm:py-1 text-[#fff] leading-normal border border-solid border-[#fff] inline-block font-semibold not-italic">SHOP NOW</p>
                    </div>
                </a>
                <div className="absolute top-1/2 left-[22%] -translate-y-2/4">
                    <a href="/#" className="no-underline">
                        <p className="text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-base leading-none text-[#fff] not-italic font-semibold px-0 pt-1.5 pb-2.5">new deals! up to 60% off winter clearance </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
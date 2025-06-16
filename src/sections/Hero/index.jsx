import SVG from "react-inlinesvg";
import playIcon from "@/play.svg";

function Hero() {
  return (
    <section className=" bg-background ">
      <div className="container flex flex-col lg:py-20">
        <div className="flex flex-col gap-8  py-10 lg:flex-row lg:py-22">
          <div className=" flex-1 flex flex-col gap-8 ">
            <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
              <div className=" inline-flex items-center gap-2 border border-gray1 px-3 py-2 rounded-3xl ">
                <div className="w-[9px] h-[9px] bg-green rounded-full" />
                <span className="font-text-2 text-green">Decentralised</span>
              </div>
              <h1 className="font-title-1 text-white">
                Revolutionizing
                <br />
                Web3 Finance
              </h1>
              <p className="font-text-1 text-gray1 text-center lg:text-start">
                Secure, scalable, and decentralized solutions for your digital
                assets — experience the future of financial freedom.
              </p>
            </div>
            <div className=" gap-5 flex flex-col items-center lg:flex-row">
              <button className=" cursor-pointer font-text-1 bg-green text-black  px-6 py-3.5 border-black rounded-full">
                Get Started
              </button>
              <button className="cursor-pointer flex  items-center gap-3 px-6 py-4 border-1 border-gray3 rounded-full ">
                <SVG src={playIcon} />
                <span className="font-text-1 text-white">Watch video</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* right */}
            <img src="src\assets\img\Shape-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

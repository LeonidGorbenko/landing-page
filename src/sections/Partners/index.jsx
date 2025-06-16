import SVG from "react-inlinesvg";
import parterOne from "@/partners/partner1.svg";
import parterTwo from "@/partners/partner2.svg";
import parterThree from "@/partners/partner3.svg";
import parterFour from "@/partners/partner4.svg";
import parterfive from "@/partners/partner5.svg";
function Partners() {
  return (
    <section className=" bg-background ">
      <div className="container py-10 flex flex-col gap-8">
        <p className="text-center text-gray1">Satisfied partners</p>
        <div className="flex flex-wrap gap-[20px] justify-around">
          <SVG src={parterOne} />
          <SVG src={parterTwo} />
          <SVG src={parterThree} />
          <SVG src={parterFour} />
          <SVG src={parterfive} />
        </div>
      </div>
    </section>
  );
}

export default Partners;

import SVG from "react-inlinesvg";
import logo from "@/logo.svg";
import arrow from "@/arrow-right.svg";
function Footer() {
  return (
    <section className="w-full  bg-background text-white">
      <div className="container  py-10 flex flex-col gap-8 ">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:py-10 lg:items-start">
          <div className=" flex gap-3 items-center lg:self-start">
            <SVG src={logo} />
            <p className="text-white font-subtitle">NeoFi</p>
          </div>
          <div className="flex flex-col items-center gap-12 ">
            <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start">
              <div className="flex flex-col gap-3">
                <p className="font-subtitle text-white">Quick links</p>
                <div className="flex flex-col gap-2 font-text-2 text-gray1">
                  <p>Home</p>
                  <p>Features</p>
                  <p>Community</p>
                  <p>Support</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-subtitle text-white">Help</p>
                <div className="flex flex-col gap-2 font-text-2 text-gray1">
                  <p>Help Centre</p>
                  <p>FAQ</p>
                  <p>Forum</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-subtitle text-white">Social Media</p>
                <div className="flex flex-col gap-2 font-text-2 text-gray1">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p>Join our mailing list for updates</p>
            </div>
            <div className=" flex justify-between">
              <input type="email" placeholder="Your email address" />
              <button className="bg-green rounded-full p-2.5 cursor-pointer">
                <SVG src={arrow} />
              </button>
            </div>
          </div>
        </div>

        <div className="self-center">
          <p className="font-caption text-gray1">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

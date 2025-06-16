import SVG from "react-inlinesvg";
import logo from "@/logo.svg";
import burger from "@/burger.svg";

function Navigation() {
  return (
    <section className=" bg-background text-white">
      <div className="container py-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <SVG src={logo} />
          <p className="font-subtitle">NeoFi</p>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex gap-8 font-text-2 text-white self-center">
            <a href="#home" className="hover:text-green transition">
              Home
            </a>
            <a href="#features" className="hover:text-green transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-green transition">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-green transition">
              FAQ
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer font-text-2 text-white border border-gray3 px-4 py-2 rounded-full">
            Login
          </button>
          <button className="cursor-pointer font-text-2 bg-green text-black px-4 py-2 rounded-full">
            Try for free
          </button>
        </div>

        <div className="lg:hidden">
          <SVG src={burger} />
        </div>
      </div>
    </section>
  );
}

export default Navigation;

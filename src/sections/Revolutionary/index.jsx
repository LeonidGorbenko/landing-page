import SectionTitle from "../../components/UI/Section-title";

const sens = {
  tag: "Revolutionaty",
  title: "Enhance Your Design Workflow with Seamless Landing Pages",
  description:
    "Join a thriving community committed to safeguarding digital assets, empowering your financial journey with trust, innovation, and security",
};

function Revolutionaty() {
  return (
    <section className=" bg-background text-white">
      <div className="container items-center py-10 flex flex-col gap-8 lg:py-20">
        <SectionTitle sens={sens} />
        <div>
          <button className=" cursor-pointer inline-block font-text-1 bg-green text-black  px-6 py-3.5 border-black rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Revolutionaty;

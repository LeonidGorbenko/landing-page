import iconOne from "@/cardIcons/Icon1.svg";
import iconTwo from "@/cardIcons/Icon2.svg";
import iconThree from "@/cardIcons/Icon3.svg";
import Card from "../../components/UI/Card";
import SectionTitle from "../../components/UI/Section-title";

function Features() {
  const sens = {
    tag: "Features",
    title: "Future Breakdown",
    description:
      "Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.",
  };
  const features = [
    {
      icon: iconOne,
      title: "Scalability",
      text: "Adapt and grow, no matter the demand on grow",
    },
    {
      icon: iconTwo,
      title: "Decentralisation",
      text: "Decentralization. Web3 aims to move away from the centralized",
    },
    {
      icon: iconThree,
      title: "Connectivity",
      text: "Computers will be able to understand information similarly to humans",
    },
  ];

  return (
    <section id="features" className=" bg-background ">
      <div className="container  py-10 flex flex-col gap-8 lg:gap-20 lg:py-20">
        <SectionTitle sens={sens} />

        <div className=" flex flex-col gap-4 lg:flex-row lg:gap-6">
          {features.map((feature, i) => (
            <div key={i} className="lg:flex-1 lg:flex">
              <Card features={feature} direction="vertical" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

import iconOne from "@/TechnologyIcon/IconOne.svg";
import iconTwo from "@/TechnologyIcon/IconTwo.svg";
import iconThree from "@/TechnologyIcon/IconThree.svg";
import Card from "../../components/UI/Card";
import SectionTitle from "../../components/UI/Section-title";
import shape3 from "@/Shape-3.png";
function Technology() {
  const sens = {
    tag: "Technology",
    title: "The future of blockchain technology",
    description:
      "Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era ofdecentralized technology.",
  };

  const features = [
    {
      icon: iconOne,
      title: "Connectivity and ubiquity",
      text: "Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within",
    },
    {
      icon: iconTwo,
      title: "Secure Transaction",
      text: "Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.",
    },
    {
      icon: iconThree,
      title: "Blockchain and decentralization",
      text: "Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.",
    },
  ];
  return (
    <section className="w-full  bg-background text-white">
      <div className="container  py-10 flex flex-col gap-8 lg:gap-20 lg:py-20">
        <SectionTitle sens={sens} />
        <div className=" flex-1  flex flex-col lg:flex-row lg:gap-19">
          <div className="self-center">
            <img src={shape3} alt="" />
          </div>
          <div className=" flex-1 flex flex-col gap-4">
            {features.map((feature, i) => (
              <Card key={i} features={feature} direction="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;

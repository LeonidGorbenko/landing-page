import Accordion from "../../components/UI/Accordion";
import SectionTitle from "../../components/UI/Section-title";
function FAQ() {
  const sens = {
    tag: "FAQ",
    title: "Get answers to common questions",
    description:
      "From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking",
  };

  const faqs = [
    {
      question: "What is NexoFi, and how does it work?",
      answer:
        "NexoFi is a blockchain-based platform that offers secure and scalable financial infrastructure for businesses. It enables transparent transactions and smart contract automation.",
    },
    {
      question: "How is blockchain related to cryptocurrency?",
      answer:
        "Blockchain is the underlying technology behind cryptocurrencies. It ensures secure, decentralized tracking and verification of digital asset transactions.",
    },
    {
      question: "Is blockchain technology secure?",
      answer:
        "Yes. Blockchain uses cryptographic techniques and decentralized consensus to protect data from unauthorized changes and fraud.",
    },
    {
      question: "How does blockchain enhance security?",
      answer:
        "Blockchain eliminates central points of failure and ensures that data is immutable, verified by consensus, and encrypted across the network.",
    },
    {
      question: "Can blockchain be hacked?",
      answer:
        "While theoretically possible, hacking a blockchain requires enormous computational power to override the network's consensus, making it extremely unlikely for well-designed systems.",
    },
    {
      question: "How can I implement blockchain in my industry?",
      answer:
        "NexoFi provides tailored solutions for industries like finance, supply chain, and healthcare to integrate blockchain for transparency, automation, and security.",
    },
  ];
  return (
    <section id="faq" className="bg-background ">
      <div className="container  py-10 flex flex-col gap-8 lg:py-20">
        <SectionTitle sens={sens} />
        <Accordion data={faqs} />
      </div>
    </section>
  );
}

export default FAQ;

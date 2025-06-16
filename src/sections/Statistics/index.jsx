import SectionTitle from "../../components/UI/Section-title";

const sens = {
  tag: "Statistics",
  title: "Completely Leverage product",
  description:
    "Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era ofdecentralized technology.",
};

function Statistics() {
  return (
    <section className="w-full  bg-background text-white">
      <div className="container  py-10 flex flex-col gap-8 items-center lg:py-30 lg:gap-18">
        <SectionTitle sens={sens} />
        <div className="flex flex-col gap-6  items-center lg:flex-row lg:justify-center lg:gap-19.5">
          <div className="flex flex-col gap-3">
            <p className="text-green font-title-2 self-center">2M+</p>
            <p className="text-gray1 font-subtitle">users</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-green font-title-2 self-center">500k+</p>
            <p className="text-gray1 font-subtitle">Transactions</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-green font-title-2 self-center">35+</p>
            <p className="text-gray1 font-subtitle">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;

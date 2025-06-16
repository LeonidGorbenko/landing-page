function SectionTitle({ sens }) {
  return (
    <div className="self-center flex flex-col items-center gap-4 lg:max-w-[702px]">
      <div className=" border px-5 py-3 border-black rounded-3xl inline-block">
        <p className="text-green font-text-2">{sens.tag}</p>
      </div>

      <p className="text-white font-title-2 text-center">{sens.title}</p>
      <p className="text-center text-gray1 font-text-1">{sens.description}</p>
    </div>
  );
}

export default SectionTitle;

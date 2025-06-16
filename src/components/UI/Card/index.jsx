import SVG from "react-inlinesvg";

function Card({ features, direction = "vertical" }) {
  const isVertical = direction === "vertical";

  return (
    <div
      className={`rounded-[20px] border border-gray3 text-white ${
        isVertical
          ? "flex flex-col items-center text-center px-6 py-8 space-y-4 lg:px-9 lg:py-12"
          : "flex items-start text-left px-5 py-6 space-x-5"
      }`}
    >
      {isVertical ? (
        <>
          <SVG src={features.icon} className="w-12 h-12 " />
          <p className="font-subtitle">{features.title}</p>
          <p className="text-gray1 font-text-1">{features.text}</p>
        </>
      ) : (
        <>
          <div className="w-6 h-6 mt-1 shrink-0 text-green">
            <SVG src={features.icon} />
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-subtitle">{features.title}</h3>
            <p className="text-gray1 font-text-2">{features.text}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;

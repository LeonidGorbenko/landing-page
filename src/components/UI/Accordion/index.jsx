import React, { useState } from "react";
import SVG from "react-inlinesvg";
import plus from "./../../../assets/img/plus.svg";
function Accordion({ data }) {
  const [activItems, setActivItems] = useState([]);

  const toggleItemm = (i) => {
    setActivItems((prev) => {
      if (prev.includes(i)) {
        return prev.filter((itemId) => itemId != i);
      } else {
        return [i];
      }
    });
  };

  return (
    <div className="flex flex-col lg:gap-[30px]">
      {data.map((faq, i) => (
        <div key={i} className="border border-gray3">
          <button
            onClick={() => toggleItemm(i)}
            className="w-full flex justify-between p-4 cursor-pointer"
          >
            <span className=" text-white">{faq.question}</span>
            <div>
              <SVG src={plus} className="w-5 h-5" />
            </div>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out  ${
              activItems.includes(i) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="p-4 text-white/70">{faq.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

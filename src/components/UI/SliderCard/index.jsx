import React from "react";

function SliderCard({ photo, text, name, role }) {
  return (
    <div className="flex flex-col gap-6 rounded-[20px] border border-white px-8 py-8 text-center">
      <div>
        <p className="text-white font-text-1 text-start">"{text}"</p>
      </div>

      <div className="flex gap-4.5">
        <div className="w-12 h-12 ">
          <img src={photo} alt="" className="rounded-full " />
        </div>
        <div className="flex flex-col items-start gap-1.5 justify-center">
          <p className="text-gray1 font-text-2">{name}</p>
          <p className="text-gray1 font-caption">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;

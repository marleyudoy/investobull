import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function According({ data,activeAccording,handleAccording}) {
    const {title, des ,id,} = data
  return (
    <div className="border-b border-white/20 py-5" >
      <button onClick={handleAccording} className="text-white text-start h5 flex items-center justify-between w-full">{title} <IoIosArrowUp className={`text-white/50 ${activeAccording === id ? "rotate-180" : "rotate-0"} transition duration-300
      ` } /> </button>
      {id === activeAccording && <p className="text-white/70 body2 mt-3 py-3" >{des}</p>}
    </div>
  );
}

export default According;

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

  
const Sound = () => {
const [openSound, setOpenSound] = useState(false);
  const handleSound = () => {
    setOpenSound((prev) => !prev);
  };
  return (
    <div className="sm:text-[12px] md:text-[16px] z-[9999999999] text-[18px] text-[white] fixed top-[10px] left-[10px] flex items-center gap-[8px] rounded-[3px] bg-[rgba(29,29,29,0.8)] p-2">
    <FontAwesomeIcon
      icon={faSoundcloud}
      className={openSound ? "text-[#08FDD8]" : "text-[#FD1056]"}
    />
    Sound{" "}
    <span
      className={
        openSound
          ? "text-[#08FDD8] cursor-pointer"
          : "text-[#FD1056] cursor-pointer"
      }
      onClick={handleSound}
    >
      OFF
    </span>{" "}
  </div>
  )
}

export default Sound
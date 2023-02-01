import React from "react";
import { motion } from "framer-motion";
const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Title = ({text,style}) => {
  return (
    <div>
      <motion.h3
        className={`text-${style} text-5xl md:6xl lg:text-7xl font-[700] leading-[1] px-2`}
        variants={sentence}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        {text.split("\\n").map((line, index) => {
          let charSpans = line.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className={`text-${style} hover:text-cyan ${
                  char == " " ? "" : "inline-block"
                } hover:animate-rubberbandEffect`}
                
              >
                {char}
              </motion.span>
            );
          });
          return (
            <>
              {charSpans}
              <br />
            </>
          );
        })}
      </motion.h3>
    </div>
  );
};

export default Title;

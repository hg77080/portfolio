import React from "react";
import Tags from "./tags";
import Title from "./Title";
import { motion } from "framer-motion";

const SkillsName = [
  {
    name: "Frontend",
    footerColor: "#08FDD8",
    width: "90%",
  },
  {
    name: "Backend",
    footerColor: "#FD2155",
    width: "60%",
  },
  {
    name: "React js",
    footerColor: "rgb(210, 108, 213)",
    width: "70%",
  },
  {
    name: "Node js",
    footerColor: "#08FDD8",
    width: "50%",
  },
];
const Skills = () => {
  return (
    <div className="flex bg-background min-h-screen p-8 md:p-10 lg:p-12 text-[#fff] flex-col lg:flex-row lg:gap-8 overflow-x-hidden">
      <div className=" flex-1 ">
        <Tags tag="<body>" />
        <Tags tag="<h1>" />
        <Title text="Skills &\nExperience" style="cyan" />
        <Tags tag="</h1>" />
        <Tags tag="<p>" />
        <div className="flex flex-col gap-2 text-sm md:text-base lg:text-base">
          <p>
            Since beginning my journey as a developer nearly 2 years ago, I’ve
            done remote work for for startups, and collaborated with talented
            people to create web products for both business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps and coding interactive layouts.
          </p>
          <p>
            I also have full-stack developer experience with Nodejs, Express,
            MongoDB etc.
          </p>
          <p>
            Visit my
            <a
              class="text-cyan text-md cursor-pointer mx-2"
              href="https://www.linkedin.com"
            >
              LinkedIn
            </a>
            profile for more details or just{" "}
            <a class="text-cyan text-md cursor-pointer mx-1" href="/contact">
              contact
            </a>{" "}
            me.
          </p>
        </div>
        <Tags tag="</p>" />
        <Tags tag="</body>" />
      </div>
      <div className="text-[#fff] flex-1 flex flex-col gap-[8px] mt-20">
        {SkillsName?.map((ele, index) => {
          return (
            <div
              className="text-1xl font-medium flex flex-col gap-2"
              key={index}
            >
              {ele?.name}
              <footer className="relative bg-[#2a2a2a] w-full h-px">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: ele?.width }}
                  transition={{ duration: 1.5 }}
                  className={`absolute left-0 h-px `}
                  style={{
                    backgroundColor: `${ele?.footerColor}`,
                  }}
                ></motion.div>
              </footer>
            </div>
          );
        })}
        <motion.div
          initial={{ opacity: 0.2, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-[#2a2a2a] w-full p-4 flex flex-col gap-4 mt-10"
        >
          <header className="text-2xl font-semibold">Frontend Engineer</header>
          <section className="text-base text-[#ababab]">
            Antino Labs
            <div className="text-sm">2022-2023</div>
          </section>
          <footer className="text-sm text-[#ababab]">
            Working on ObenEv Product. Tech Stack includes React, Redux,
            Material Ui, Typescript, Styled Components etc. Developing Mobile
            responsive designs.
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

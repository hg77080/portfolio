import React, { useEffect, useRef } from "react";
import Tags from "./tags";
import Title from "./Title";
const About = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const canvas = document.getElementById("myCanvas");
      canvas.width = 350;
      canvas.height = height - 10;
    }
  }, [ref.current]);
  useEffect(() => {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "#08FDD8",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
      activeCursor: "pointer",
      pinchZoom: false,
      zoomEnabled: false,
      clickToFront: true,
      initial: [0.05, -0.1],
    });
  }, []);
  return (
    <>
      <div className="flex bg-background min-h-screen lg:p-[4rem] md:p-[2rem] text-[#fff] flex-col lg:flex-row">
        <div className="px-[32px] flex-2 ">
          <Tags tag="<section>" />
          <Tags tag="<h1>" />
          <Title text="Me, \nMyself and I" style="cyan" />
          <Tags tag="</h1>" />
          <Tags tag="<p>" />
          <div>
            <p>
              Since Adobe Flash was a complete innovation, alongside with CSS
              1.0 and HTML 4.01 as standards of the current web I've been
              passionate about web.
            </p>
            <p>
              For over a decade I had many opportunities to work in a vast
              spectrum of
              <a href="#" class="tech">
                web technologies
              </a>
              what let me gather a significant amount of various experience.
              Working for companies and individuals around the globe I met and
              learnt from amazing and ambitious people.
            </p>
            <p>
              I currently work remotely with a selected freelance client base
              being open for new opportunities.
            </p>
          </div>
          <Tags tag="</p>" />
          <Tags tag="</section>" />
        </div>
        <div className="text-[#fff] flex-1 justify-center items-center text-center px-[10%] h-full w-full ">
          <div
            id="myCanvasContainer"
            ref={ref}
            className="text-white flex w-full items-center justify-center h-full sm:h-[500px]"
          >
            <canvas
              id="myCanvas"
              onWheel={(e) => e.preventDefault()}
              className="Canvas"
            >
              <ul id="tags">
                <li>
                  <a href="https://www.w3schools.com/html/" target="_blank">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_es5.asp"
                    target="_blank"
                  >
                    ES5
                  </a>
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    TypeScript
                  </a>
                </li>
                <li>
                  <a href="https://restfulapi.net/" target="_blank">
                    REST
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_json_intro.asp"
                    target="_blank"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a href="https://reactjs.org/" target="_blank">
                    React Js
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/" target="_blank">
                    Next Js
                  </a>
                </li>

                <li>
                  <a
                    href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
                    target="_blank"
                  >
                    React Query
                  </a>
                </li>
                <li>
                  <a href="https://v5.reactrouter.com/" target="_blank">
                    React Router
                  </a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/" target="_blank">
                    Node JS
                  </a>
                </li>
                <li>
                  <a href="https://git-scm.com/" target="_blank">
                    Git
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://redux.js.org/introduction/getting-started"
                    target="_blank"
                  >
                    Redux
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/" target="_blank">
                    npm
                  </a>
                </li>
                <li>
                  <a href="https://yarnpkg.com/" target="_blank">
                    yarn
                  </a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

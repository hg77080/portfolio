import { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Tags from "../components/tags";
import Title from "../components/Title";
import { Button } from "@mui/material";
import Loading from "../components/Loading";
export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleHamburger = () => {
    setOpenSidebar((prev) => !prev);
  };
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    const el = document.createElement("script");
    el.src = "/Canvas.js";
    document?.head?.appendChild(el);
    canvas.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    canvas.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
  }, []);
  return (
    <>
      <Loading />
      <div className="px-[32px] pt-[48px] overflow-x-hidden">
        <canvas
          className="absolute left-0 z-[-1] top-0 inline-block bg-[#1d1d1d]"
          id="canvas"
        />
        <Tags tag="<body>" />
        <Tags tag="<h1>" />
        <Title text="Hi,\nI'm Himanshu,\nSoftware Developer" style="white" />
        <Tags tag="</h1>" />
        <Tags tag="<p>" />
        <div className="text-[16px] text-[#8d8d8d] px-4">
          Front End Developer
        </div>
        <Tags tag="</p>" />
        <Button
          variant="outlined"
          sx={{
            color: "#08fdd8",
            borderColor: "#08fdd8",
          }}
          className="text-[14px] font-OpenSans tracking-[4px] px-[36px] py-[14px] mx-4 my-8 capitalize"
        >
          Contact me!
        </Button>
      </div>
      {openSidebar && (
        <SideMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
    </>
  );
}

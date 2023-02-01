import { config } from "@fortawesome/fontawesome-svg-core";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
import Sound from "../components/Sound";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import SideMenu from "../components/SideMenu";
import { UserContext } from "../context";
function MyApp({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    setOpenSidebar((prev) => !prev);
    setShowLoader(true);
  }, [pageProps]);
  const handleHamburger = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <>
      <UserContext.Provider value={{ showLoader, setShowLoader }}>
        <Head>
          <script src="./tagCanvas.js" type="text/javascript"></script>
        </Head>
        <Sound />
        {!openSidebar ? (
          <MenuSharpIcon
            onClick={handleHamburger}
            className="text-[white] sm:text-[36px] md:text-[42px] text-[48px] bg-[rgba(0,0,0,0.3)] rounded-[3px] fixed top-[10px] right-[10px] cursor-pointer z-[9999999999]"
          />
        ) : (
          <CloseIcon
            onClick={handleHamburger}
            className="text-[white] sm:text-[36px] md:text-[42px] text-[48px] bg-[rgba(0,0,0,0.3)] rounded-[3px] fixed top-[10px] right-[10px] cursor-pointer z-[9999999999]"
          />
        )}
        <Component {...pageProps} />
        {openSidebar && (
          <SideMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        )}
      </UserContext.Provider>
    </>
  );
}

export default MyApp;

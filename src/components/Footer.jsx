import { styles } from "../styles";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-3 bottom-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
        <p className="text-white text-[16px] cursor-pointer flex font-bold">
          © 2026 Mohit Naskar&nbsp;
          <span>&nbsp;All Rights Reserved. </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

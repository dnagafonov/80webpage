import { Link } from "react-router-dom";
import s from "./MainMenu.module.scss";
import { useState } from "react";
import logo from "../../assets/images/logo262x300.png";
import logoShadow from "../../assets/images/logo262x300shadow.png";

const MainMenu = () => {
  const [preview, setPreview] = useState(true);
  const [logoAnimation, setLogoAnimation] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo)

  if (preview) {
    return (
      <img
        src={logoSrc}
        className={`${s.logo} ${logoAnimation ? s.hidden : s.visible}`}
        onMouseEnter={() => setLogoSrc(logoShadow)}
        onMouseLeave={() => setLogoSrc(logo)}
        onClick={() => {
          setLogoAnimation(true);
          setTimeout(() => setPreview(false), 500);
        }}
      />
    );
  }

  return (
    <div className={s.mainMenu}>
      <Link className={s.mainMenuItem} to={"/projects"}>
        PROJECTS
      </Link>
      <Link className={s.mainMenuItem} to={"/shop"}>
        SHOP
      </Link>
      <Link className={s.mainMenuItem} to={"/contact"}>
        CONTACT
      </Link>
      <Link className={s.mainMenuItem} to={"/about"}>
        ABOUT
      </Link>
    </div>
  );
};

export default MainMenu;

import "./Navigation.css";
import NavLinks from "./NavLinks";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const openHamburgerMenu = () => {
    !open ? disableBodyScroll(document) : enableBodyScroll(document);

    return setOpen((prevValue) => !prevValue);
  };

  const hamburgerIcon = open ? (
    <CgClose
      className="hamburger"
      size="40px"
      color="#4c45b3"
      onClick={openHamburgerMenu}
    />
  ) : (
    <CgMenu
      className="hamburger"
      size="40px"
      color="#4c45b3"
      onClick={openHamburgerMenu}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="navigation mobile__navigation">
      {" "}
      {hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;

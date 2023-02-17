import "./Navigation.css";
import NavLinks from "./NavLinks";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = open ? (
    <CgClose
      className="hamburger"
      size="40px"
      color="#4c45b3"
      onClick={() => setOpen((prevValue) => !prevValue)}
    />
  ) : (
    <CgMenu
      className="hamburger"
      size="40px"
      color="#4c45b3"
      onClick={() => setOpen((prevValue) => !prevValue)}
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

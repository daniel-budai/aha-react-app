import React from "react";
import AhaLogo from "../assets/Aha!.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar h-16 flex items-center justify-center navbar-shadow">
      <img src={AhaLogo} alt="Aha!" className="h-8" />
    </nav>
  );
};

export default Navbar;

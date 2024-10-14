import React from "react";
import { Link } from "react-router-dom";

import CharImg from "../assets/char.png";
import AhaLogo from "../assets/Aha!.png";

const LandingPage: React.FC = () => {
  return (
    <Link to="/todos" className="block min-h-screen">
      <div className="min-h-screen gradient-bg flex flex-col items-center justify-between">
        <div className="flex-grow flex flex-col items-center justify-center">
          <img src={AhaLogo} alt="Aha!" className="mb-4" />
          <h1 className="font-fira-sans font-normal text-2xl leading-6 text-center text-white">
            A Todo app
          </h1>
        </div>
        <img src={CharImg} alt="Character" />
      </div>
    </Link>
  );
};

export default LandingPage;

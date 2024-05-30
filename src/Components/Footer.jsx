import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="*">FaceBook</a>
        </li>
        <li>
          <a href="*">Instagram</a>
        </li>
        <li>
          <a href="*">LinkedIn</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className="font-playfair font-thin">Have any Questions ??</p>
          <a href="#" className="font-lato font-medium">
            Talk to Expert !
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;

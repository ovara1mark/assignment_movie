import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="400 20 10 150"
            className={className}
    >
      <path

        fill="none"
        stroke="#000"
        strokeWidth="3.84"
        d="M559.033 353.343H408.478s31.871-5.567 33.798-6.145c29.632-8.89 203.98-.45 242.731 3.072 27.946 2.54 55.425 16.001 82.959 21.508"
      ></path>
    </svg>
  );
}

export default Icon;

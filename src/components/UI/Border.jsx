import React from "react";

const Border = ({ size = 515 }) => {
  return (
    <span>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size / 2 - 10) * 0.8}
          fill="none"
          stroke="#3E243C"
          strokeWidth={2}
          strokeDasharray="10 27"
        />
      </svg>
    </span>
  );
};

export default Border;

import React, { useEffect, useRef } from "react";

export interface MathMLProps {
  math: string;
}

const MathML: React.FC<MathMLProps> = (props) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: props.math,
      }}
    />
  );
};

export default MathML;

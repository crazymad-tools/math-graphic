import React, { useEffect, useState } from "react";
import MathML from "../../../components/common/MathML";
import Graphic from "./Graphic";

const Quadratic: React.FC = (props) => {
  const [a, setA] = useState<string | number>(1);
  const [b, setB] = useState<string | number>(1);
  const [c, setC] = useState<string | number>(0);

  useEffect(() => {}, [a, b, c]);

  function update(x: number) {
    let an = Number(a);
    let bn = Number(b);
    let cn = Number(c);

    return an * Math.pow(x, 2) + bn * x + cn;
  }

  return (
    <div style={{ marginLeft: 10, marginTop: 10 }}>
      {/* <h2>y = a * x * x + b * x + c</h2> */}
      {/* <p>y = a * Math.pow(x, 2) + b * x + c</p> */}
      <MathML
        math={`
          <math>
            <mrow>
              <mi>y</mi>
              <mo>=</mo>
              <mi>a</mi>
              <msup>
                <mi>x</mi><mn>2</mn>
              </msup>
              <mo>+</mo>
              <mi>b</mi>
              <mi>x</mi>
              <mo>+</mo>
              <mi>c</mi>
            </mrow>
          </math>
        `}
      />
      <div style={{ marginTop: 10 }}>
        <p>
          <label>a = </label>
          <input
            value={a}
            onChange={(e) => setA(e.currentTarget.value)}
            type="number"
            step={0.1}
          />
          <input
            value={a}
            onChange={(e) => setA(e.currentTarget.value)}
            type="range"
            step={0.1}
            max={2}
            min={-2}
          />
        </p>
        <p>
          <label>b = </label>
          <input
            value={b}
            onChange={(e) => setB(e.currentTarget.value)}
            type="number"
            step={0.1}
          />
          <input
            value={b}
            onChange={(e) => setB(e.currentTarget.value)}
            type="range"
            step={0.1}
            max={2}
            min={-2}
          />
        </p>
        <p>
          <label>c = </label>
          <input
            value={c}
            onChange={(e) => setC(e.currentTarget.value)}
            type="number"
            step={0.1}
          />
          <input
            value={c}
            onChange={(e) => setC(e.currentTarget.value)}
            type="range"
            step={0.1}
            max={2}
            min={-2}
          />
        </p>
      </div>
      <Graphic getY={update} />
    </div>
  );
};

export default Quadratic;

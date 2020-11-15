import React, { useEffect, useRef, useState } from "react";

export interface GraphicProps {
  getY: (x: number) => number;
}

function useContext() {
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    if (!context) return;

    context.canvas.width = 500;
    context.canvas.height = 500;
  }, [context]);

  function update(getY: (x: number) => number) {
    if (!context) return;

    context.clearRect(0, 0, 500, 500);

    context.strokeStyle = "#999";
    context.lineWidth = 1;
    context.font = "20px Arial";
    context.fillStyle = "#666";

    context.beginPath();
    context.moveTo(20, 250);
    context.lineTo(480, 250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(250, 20);
    context.lineTo(250, 480);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(250 + 100, 250);
    context.lineTo(250 + 100, 240);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(250 + 200, 250);
    context.lineTo(250 + 200, 240);
    context.stroke();
    context.closePath();

    context.fillText("0.0", 250, 270);
    context.fillText("1.0", 250 + 100, 270);
    context.fillText("2.0", 250 + 200, 270);

    context.beginPath();
    context.strokeStyle = "red";
    for (let i = -2; i < 2; i += 0.01) {
      let y = getY(i) * 100;
      let x = i * 100;

      if (i === -1) {
        context.moveTo(x + 250, 250 - y);
      } else {
        context.lineTo(x + 250, 250 - y);
      }
    }
    context.stroke();
    context.closePath();
  }

  return { context, setContext, update };
}

const Graphic: React.FC<GraphicProps> = (props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { update, context, setContext } = useContext();

  useEffect(() => {
    const context = ref.current!.getContext("2d");

    context && setContext(context);
  }, [setContext]);

  useEffect(() => {
    update(props.getY);
  }, [props.getY, context, update]);

  return <canvas ref={ref} style={{ border: "1px solid black" }}></canvas>;
};

export default Graphic;

import { useEffect, useState } from "react";

export default function useSignature() {
  const [canvas, setCanvas] = useState("");
  const [painting, setPaiting] = useState(true);
  let context;

  async function start(e) {
    await setPaiting(true);
    draw(e);
  }
  async function end() {
    // await setPaiting(false);
    context.beginPath();
  }

  function draw(e) {
    console.log(painting, "P");
    if (!painting) return;
    context.lineWidth = 10;
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();

    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  useEffect(() => {
    if (canvas) {
      context = canvas.getContext("2d");

      canvas.addEventListener("mousedown", start);
      canvas.addEventListener("mouseup", end);
      canvas.addEventListener("mousemove", draw);

      // canvas.addEventListener("touchstart", start);
      // canvas.addEventListener("touchend", end);
      // canvas.addEventListener("touchmove", draw);
    }
  }, [canvas]);

  function reset() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function save() {
    return canvas.toDataURL();
  }

  return { reset, save, setCanvas };
}

import { useEffect } from "react";

export default function MouseEffect() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      glow.remove();
    };
  }, []);

  return null;
}
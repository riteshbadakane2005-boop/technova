import { useEffect } from "react";

export default function MagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll(
      ".primary-btn, .secondary-btn, .join-btn, .outline-btn"
    );

    const handleMove = (e) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `
        translate(${x * 0.15}px, ${y * 0.15}px)
        scale(1.05)
      `;
    };

    const handleLeave = (e) => {
      e.currentTarget.style.transform =
        "translate(0, 0) scale(1)";
    };

    buttons.forEach((button) => {
      button.addEventListener("mousemove", handleMove);
      button.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mousemove", handleMove);
        button.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return null;
}
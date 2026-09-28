import { useEffect } from "react";

export default function TiltCards() {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".tech-card, .project-card, .team-card"
    );

    const handleMove = (e) => {
      const card = e.currentTarget;

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -8;

      const rotateY =
        ((x - centerX) / centerX) * 8;

      card.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    };

    const handleLeave = (e) => {
      e.currentTarget.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return null;
}
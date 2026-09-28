import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {

    // Section headings
    gsap.utils.toArray(".section-heading").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        }
      );
    });

    // Cards
    gsap.utils.toArray(
      ".tech-card, .project-card, .team-card"
    ).forEach((card, index) => {

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: (index % 4) * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );

    });

    // Events
    gsap.utils.toArray(".event-item").forEach((event) => {

      gsap.fromTo(
        event,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: event,
            start: "top 90%",
          },
        }
      );

    });

    // Stats
    gsap.utils.toArray(".stat-box").forEach((stat) => {

      gsap.fromTo(
        stat,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
        }
      );

    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };

  }, []);

  return null;
}
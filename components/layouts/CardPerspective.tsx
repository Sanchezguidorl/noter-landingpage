"use client";

import React, { useEffect, useRef } from "react";

interface CardPerspectiveProps {
  children: React.ReactNode;
  classes: string;
}

function CardPerspective({ children, classes }: CardPerspectiveProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMousePerspective = (event: MouseEvent) => {
    const element = elementRef.current;

    if (element) {
      const { clientY, clientX } = event;
      const { left, width, top, height } = element.getBoundingClientRect();

      const distanceX = clientX - (left + width / 2);
      const distanceY = clientY - (top + height / 2);

      const normalizedX = (distanceX / (width / 2)) * 10;
      const normalizedY = (distanceY / (height / 2)) * 10;

      const classString = `
        perspective(500px)
        scale(1.1)
        rotateX(${-normalizedY}deg)
        rotateY(${normalizedX}deg)
      `;

      element.style.transform = classString;
    }
  };

  const handleMouseOut = () => {
    const element = elementRef.current;

    if (element) {
      const classString = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;

      element.style.transform = classString;
    }
  };

  useEffect(() => {

    if (elementRef.current) {
      const element = elementRef.current;
      element.addEventListener("mousemove", handleMousePerspective);
      element.addEventListener("mouseleave", handleMouseOut);

      return () => {
        element.removeEventListener("mousemove", handleMousePerspective);
        element.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, []);

  return (
    <div ref={elementRef} className={classes}>
      {children}
    </div>
  );
}

export default CardPerspective;

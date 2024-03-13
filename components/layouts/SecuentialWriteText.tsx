"use client";

import { useEffect, useState } from "react";

function SecuentialWriteText({ text, delay }: { text: string; delay: number }) {
  const [indexChar, setIndexChar] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      if (indexChar < text.length) {
        const intervalId = setInterval(() => {
          setIndexChar((prevIndex) =>
            prevIndex < text.length ? prevIndex + 1 : prevIndex
          );
        }, 40);

        return () => clearInterval(intervalId);
      }
    }, delay * 1000);
  }, []);
  return (
    <>
      {text.split("").map((character: string, index: number) => (
        <span
          key={index + indexChar}
          className={` ${
            index < indexChar || indexChar === text.length - 1
              ? "opacity-100"
              : " opacity-0"
          }`}
        >
          {character}
        </span>
      ))}
    </>
  );
}

export default SecuentialWriteText;

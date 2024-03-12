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
      {text.slice(0, indexChar)}
      {indexChar < text.length && (
        <strong className=" text-black opacity-60 font-light blinking">
          |
        </strong>
      )}
    </>
  );
}

export default SecuentialWriteText;

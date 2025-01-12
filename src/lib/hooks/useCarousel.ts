import { useState, useEffect } from "react";

type TUseCarousel = {
    numberOfItems: number;
  interval?: number;
};

export const useCarousel = ({ numberOfItems, interval = 5000 }: TUseCarousel) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % numberOfItems);
    }, interval);

    return () => clearInterval(intervalId);
  }, [numberOfItems, interval]);

  return currentImage;
};
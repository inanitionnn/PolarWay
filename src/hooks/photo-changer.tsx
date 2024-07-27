import { useEffect, useState } from "react";

export const usePhotoChanger = (photos: string[], interval: number): string => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return photos[currentPhotoIndex]!;
};

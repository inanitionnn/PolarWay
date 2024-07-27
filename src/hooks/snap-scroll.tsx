import { useEffect, useRef } from "react";
import { findClosestElementIndex } from "~/helpers";

export const useSnapScroll = (sections: (HTMLElement | null)[]) => {
  const timeoutRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      const sectionOffsets = sections.map((section) => section?.offsetTop ?? 0);
      const scrollPosition = window.scrollY;

      const closestSectionIndex = findClosestElementIndex(
        sectionOffsets,
        scrollPosition,
      );

      const targetScrollY = sectionOffsets[closestSectionIndex] ?? 0;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }, 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);
};

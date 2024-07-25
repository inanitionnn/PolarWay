"use client";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { findClosestElementIndex } from "~/helpers";
import { HomeSection } from "./_modules";

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const controls = useAnimation();
  const timeoutRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      const sectionOffsets = sectionsRef.current.map(
        (section) => section?.offsetTop ?? 0,
      );
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
  }, []);

  return (
    <>
      <motion.div animate={controls} className="overflow-hidden">
        <HomeSection
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
        />

        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="h-screen w-full bg-red-500"
        >
          Section 1
        </section>

        <div className="z-200 absolute h-max w-max bg-blue-500"> Hello</div>
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="h-screen w-full bg-green-500"
        >
          Section 2
        </section>
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="h-screen w-full"
        >
          Section 3
        </section>
      </motion.div>
    </>
  );
};

export default App;

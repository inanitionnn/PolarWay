"use client";
import React, { useRef } from "react";
import { HomeSection } from "./_modules";
import { useSnapScroll } from "~/hooks";

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useSnapScroll(sectionsRef.current);

  return (
    <>
      <div className="overflow-hidden">
        <HomeSection
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
        />

        <section
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
          className="h-screen w-full bg-red-500"
        >
          Section 1
        </section>

        <div className="z-200 absolute h-max w-max bg-blue-500"> Hello</div>
        <section
          ref={(el) => {
            sectionsRef.current.push(el);
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
      </div>
    </>
  );
};

export default App;

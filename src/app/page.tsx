"use client";
import React, { useRef } from "react";
import { GoalsSection, HomeSection, ActivitySection } from "./_modules";
import { useSnapScroll } from "~/hooks";
import { EndSection } from "./_modules/end-section";

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useSnapScroll(sectionsRef.current);

  return (
    <>
      <div className="overflow-hidden">
        <HomeSection
          id="home"
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
        />
        <GoalsSection
          id="goals"
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
        />
        <ActivitySection
          id="activity"
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
        />
        <EndSection
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
        />

        <section
          ref={(el) => {
            sectionsRef.current.push(el);
          }}
          className="h-screen w-full bg-blue-500"
        >
          Section 1
        </section>

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
            sectionsRef.current.push(el);
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

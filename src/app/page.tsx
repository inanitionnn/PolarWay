"use client";
import React, { useRef } from "react";
import {
  GoalsSection,
  HomeSection,
  ActivitySection,
  TeamSection,
} from "./_modules";
import { useSnapScroll } from "~/hooks";
import { EndSection } from "./_modules/end-section";

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useSnapScroll(sectionsRef.current);

  return (
    <>
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
      <TeamSection
        id="team"
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
      <EndSection
        id="end"
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
    </>
  );
};

export default App;

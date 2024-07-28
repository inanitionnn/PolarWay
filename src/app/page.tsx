"use client";
import React, { useRef } from "react";
import {
  GoalsSection,
  HomeSection,
  ActivitySection,
  TeamSection,
  EndSection,
} from "./_modules";
import { useSnapScroll } from "~/hooks";
import { Sections } from "~/constants";

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useSnapScroll(sectionsRef.current);

  return (
    <>
      <HomeSection
        id={Sections.home.id}
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
      <GoalsSection
        id={Sections.goals.id}
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
      <ActivitySection
        id={Sections.activity.id}
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
      <TeamSection
        id={Sections.team.id}
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
      <EndSection
        id={Sections.end.id}
        ref={(el) => {
          sectionsRef.current.push(el);
        }}
      />
    </>
  );
};

export default App;

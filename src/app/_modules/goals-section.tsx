"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, leftSlideAnimation, rightSlideAnimation } from "~/helpers";
import {
  GrainImage,
  MHeader,
  MParagraph,
  SectionWrapper,
} from "../_components";
import { usePhotoChanger } from "~/hooks";

type Props = ComponentPropsWithoutRef<"div">;

export const GoalsSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...restProps } = props;
  const photo = usePhotoChanger(
    [
      "summer-lake.jpg",
      "summer-van.JPG",
      "summer-rock-climbing.JPG",
      "summer-transmitter.JPG",
    ],
    1200,
  );
  return (
    <SectionWrapper
      className={cn(
        "relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1",
        className,
      )}
      ref={ref}
      {...restProps}
    >
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex flex-col items-center justify-center">
          <MHeader
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            variants={rightSlideAnimation}
            className="pr-32"
          >
            Наша
          </MHeader>
          <MHeader
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            custom={1}
            variants={rightSlideAnimation}
            className="pl-32"
          >
            мета
          </MHeader>
        </div>

        <GrainImage alt="team" src={photo} className="absolute" />
      </div>

      <div className="flex items-center justify-center">
        <MParagraph
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          variants={leftSlideAnimation}
          className="p-10 md:max-w-[300px] lg:max-w-[600px]"
        >
          Надихати та об&apos;єднувати молодь для активного соціально
          політичного життя та участі в заходах. Ми прокладаємо шлях до
          створення спільноти змінотворців, сприяючи позитивним трансформаціям
          та великим досягненням в суспільстві.
        </MParagraph>
      </div>
    </SectionWrapper>
  );
});

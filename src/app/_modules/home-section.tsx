"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import {
  cn,
  leftSlideAnimation,
  opacityAnimation,
  rightSlideRotatedAnimation,
} from "~/helpers";
import { GrainImage, MParagraph, SectionWrapper } from "../_components";
import Image from "next/image";
import { usePhotoChanger } from "~/hooks";
import { motion } from "framer-motion";

type Props = ComponentPropsWithoutRef<"div">;

export const HomeSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...restProps } = props;
  const photo = usePhotoChanger(
    [
      "summer-leaves-climbing.JPG",
      "summer-tents.JPG",
      "summer-forest-view.JPG",
      "winter-mountain-panorama.JPG",
      "winter-skiing-legs.JPG",
      "winter-ascent-to-the-mountain.JPG",
    ],
    1200,
  );
  return (
    <SectionWrapper
      className={cn("relative", className)}
      ref={ref}
      {...restProps}
    >
      <GrainImage
        alt="team"
        src={photo}
        className="brightness-50 saturate-[0.8]"
      />
      <MParagraph
        initial="hidden"
        animate="visible"
        variants={leftSlideAnimation}
        className="absolute left-0 right-0 top-0 p-10 sm:left-[95px] sm:top-[60px] sm:p-0 md:max-w-[300px] lg:max-w-[700px]"
      >
        Polar Way - це громадська організація, що розвиває молодь через
        подорожі, активний відпочинок, українську молодіжну культуру та
        національну ідею. Ми віримо у силу спільноти, тому створюємо унікальні
        можливості в галузі подорожей, спорту і активізму.
      </MParagraph>
      <MParagraph
        initial="hidden"
        animate="visible"
        // whileInView="visible"
        // viewport={{ once: true, amount: "some" }}
        variants={rightSlideRotatedAnimation}
        className="absolute right-[0px] top-[170px] hidden max-w-[700px] rotate-90 transform sm:block"
      >
        © 2024 Polar Way
      </MParagraph>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityAnimation}
        className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex items-end justify-center p-20 sm:items-center"
      >
        <Image
          alt="logo"
          src={"pw3.svg"}
          width={230}
          height={230}
          className="backdrop-brightness-70 opacity-75"
        />
      </motion.div>
    </SectionWrapper>
  );
});

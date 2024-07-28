"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, leftSlideAnimation, rightSlideAnimation } from "~/helpers";
import {
  GrainImage,
  MHeader,
  MParagraph,
  SectionWrapper,
  TeamCard,
} from "../_components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import { TeamMembers } from "~/constants";

type Props = ComponentPropsWithoutRef<"div">;

export const TeamSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <SectionWrapper
      className={cn(
        "relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1",
        className,
      )}
      ref={ref}
      {...restProps}
    >
      <Swiper
        className="h-full w-full"
        grabCursor={true}
        modules={[EffectCreative]}
        // slidesPerView={3}
        spaceBetween={30}
        onSlideChange={(swiper) =>
          console.log("slide change", swiper.activeIndex)
        }
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {TeamMembers.map((member, index) => (
          <>
            <SwiperSlide>
              <TeamCard
                key={index}
                firstName={member.firstName}
                lastName={member.lastName}
                mainPosition={member.mainPosition}
                temporaryPosition={member.temporaryPosition}
                photo={member.photo}
                isActive={true}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </SectionWrapper>
  );
});

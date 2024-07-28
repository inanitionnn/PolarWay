"use client";
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { cn, rightSlideAnimation } from "~/helpers";
import { MHeader, SectionWrapper, TeamCard } from "../_components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TeamMembers } from "~/constants";

type Props = ComponentPropsWithoutRef<"div">;

export const TeamSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...restProps } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SectionWrapper
      className={cn("relative ", className)}
      ref={ref}
      {...restProps}
    >
      <div className="absolute left-0 right-0 top-6 z-30 flex flex-col items-center justify-center opacity-75">
        <MHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          variants={rightSlideAnimation}
        >
          Команда
        </MHeader>
      </div>
      <div className=" hidden h-full w-full grid-cols-4 grid-rows-2 justify-items-center gap-8 p-10 pb-20 pt-52 xl:grid">
        {TeamMembers.map((member, index) => (
          <TeamCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            mainPosition={member.mainPosition}
            photo={member.photo}
            isActive={true}
            isSwiper={false}
          />
        ))}
      </div>
      <div className="flex h-full w-full items-center justify-center pt-32 xl:hidden">
        <Swiper
          className="h-[400px] w-full"
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={-10}
          centeredSlides={true}
          initialSlide={0}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex ?? 0)}
        >
          {TeamMembers.map((member, index) => (
            <SwiperSlide key={index} style={{ width: "fit-content" }}>
              <TeamCard
                firstName={member.firstName}
                lastName={member.lastName}
                mainPosition={member.mainPosition}
                photo={member.photo}
                isActive={index === activeIndex}
                isSwiper={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
});

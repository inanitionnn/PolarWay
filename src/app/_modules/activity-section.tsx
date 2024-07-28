"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, rightSlideAnimation } from "~/helpers";
import {
  GrainImage,
  MHeader,
  SectionWrapper,
  ActivityCard,
} from "../_components";
import { usePhotoChanger } from "~/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import { Activities } from "~/constants";

type Props = ComponentPropsWithoutRef<"div">;

export const ActivitySection = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, ...restProps } = props;
    const photo = usePhotoChanger(
      [
        "winter-mountain-top.JPG",
        "summer-climbing.JPG",
        "summer-satisfied-dudes.JPG",
      ],
      1200,
    );
    return (
      <SectionWrapper
        className={cn("relative grid grid-cols-1 grid-rows-2", className)}
        ref={ref}
        {...restProps}
      >
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex flex-col items-center justify-center opacity-75">
            <MHeader
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
              variants={rightSlideAnimation}
            >
              Діяльність
            </MHeader>
          </div>

          <GrainImage alt={photo} src={photo} className="absolute" />
        </div>

        <div className="hidden h-full w-full grid-cols-3 grid-rows-1 md:grid">
          {Activities.map((text, index) => (
            <ActivityCard
              key={index}
              header={text.header}
              paragraph={text.paragraph}
              isFirst={false}
            />
          ))}
        </div>

        <div className="flex h-full w-full items-center justify-center md:hidden">
          <Swiper
            className="h-full w-full"
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {Activities.map((text, index) => (
              <SwiperSlide className=" h-full w-full" key={index}>
                <ActivityCard
                  key={index}
                  header={text.header}
                  paragraph={text.paragraph}
                  isFirst={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionWrapper>
    );
  },
);

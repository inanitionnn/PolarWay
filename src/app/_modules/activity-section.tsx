"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, rightSlideAnimation } from "~/helpers";
import { GrainImage, MHeader, SectionWrapper } from "../_components";
import { usePhotoChanger } from "~/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import { ActivityCard } from "../_components/activity-card";

type Props = ComponentPropsWithoutRef<"div">;

type Text = {
  header: string;
  paragraph: string;
};

const texts: Text[] = [
  {
    header: "01. Походи",
    paragraph:
      "Разом ми організовуємо захоплюючі мандрівки та експедиції, які допомагають молоді розширювати свої горизонти, відкривати культуру та природню красу України.",
  },
  {
    header: "02. Заходи",
    paragraph:
      "Ми активно займаємся проведенням різноманітних заходів, надаючи учасникам унікальні можливості для самовиявлення, навчання та співпраці.",
  },
  {
    header: "03. Волонтерство",
    paragraph:
      "Ми залюбки підтримуємо волонтерські руху та сприяємо поширенню гуманістичних ідеалів серед учасників нашої організації.",
  },
];

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
          <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex flex-col items-center justify-center ">
            <MHeader
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              variants={rightSlideAnimation}
            >
              Наша
            </MHeader>
            <MHeader
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
              custom={1}
              variants={rightSlideAnimation}
            >
              діяльність
            </MHeader>
          </div>

          <GrainImage alt="team" src={photo} className="absolute" />
        </div>

        <div className="hidden h-full w-full grid-cols-3 grid-rows-1 md:grid">
          {texts.map((text, index) => (
            <ActivityCard
              key={index}
              headerText={text.header}
              paragraphText={text.paragraph}
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
            {texts.map((text, index) => (
              <>
                <SwiperSlide className=" h-full w-full">
                  <ActivityCard
                    key={index}
                    headerText={text.header}
                    paragraphText={text.paragraph}
                    isFirst={index === 0}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </SectionWrapper>
    );
  },
);

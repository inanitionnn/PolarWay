"use client";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, opacityAnimation } from "~/helpers";
import { Paragraph, SectionWrapper } from "../_components";
import Image from "next/image";
import { motion } from "framer-motion";
import { AtSign, Phone } from "lucide-react";
import { Sections } from "~/constants";

type Props = ComponentPropsWithoutRef<"div">;

export const EndSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <SectionWrapper
      className={cn("relative", className)}
      ref={ref}
      {...restProps}
    >
      <div className="flex h-full  w-full flex-col justify-between p-10">
        <ul className="flex flex-col items-start justify-start gap-4 lg:gap-2">
          {Object.values(Sections)
            .filter((e) => e.id !== "end")
            .map((section) => (
              <li key={section.id}>
                <Paragraph>
                  <a href={`#${section.id}`} className="hover:underline">
                    {section.name}
                  </a>
                </Paragraph>
              </li>
            ))}
        </ul>
        <div className="flex flex-col items-end justify-start gap-4 lg:gap-2">
          <div className="flex items-center gap-2">
            <AtSign />
            <Paragraph vsize={"sm"}>
              <a
                href="mailto:polar.way.org@gmail.com"
                className="hover:underline"
              >
                polar.way.org@gmail.com
              </a>
            </Paragraph>
          </div>
          <div className="flex items-center gap-2">
            <Phone />
            <Paragraph vsize={"sm"}>
              <a href="tel:+380970254387" className="hover:underline">
                +38 (097) 025-4387
              </a>
            </Paragraph>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={opacityAnimation}
        className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center p-20"
      >
        <Image
          alt="logo"
          src={"/pw3.svg"}
          width={230}
          height={230}
          className="backdrop-brightness-70 h-[230px] w-[230px]"
        />
      </motion.div>
    </SectionWrapper>
  );
});

import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn, leftSlideAnimation, rightSlideRotatedAnimation } from "~/helpers";
import { GrainImage, MParagraph, SectionWrapper } from "../_components";
import Image from "next/image";

type Props = ComponentPropsWithoutRef<"div"> & {};

export const HomeSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <SectionWrapper
      className={cn("relative", className)}
      ref={ref}
      {...restProps}
    >
      <GrainImage alt="team" src="1.webp" />
      <MParagraph
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        variants={leftSlideAnimation}
        className="absolute left-[115px] top-[80px] max-w-[700px] "
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
        className="absolute right-[20px] top-[160px] max-w-[700px] rotate-90 transform"
      >
        © 2024 Polar Way
      </MParagraph>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <Image alt="logo" src={"pw.svg"} width={170} height={170} />
      </div>
    </SectionWrapper>
  );
});

import { ComponentPropsWithoutRef, forwardRef } from "react";
import NextImage from "next/image";
import { cn } from "~/helpers";

type Props = ComponentPropsWithoutRef<"div"> & {
  alt: string;
  src: string;
};

export const GrainImage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { alt, src, className } = props;
  return (
    <div className={cn("h-full w-full", className)} ref={ref}>
      <div className={"relative h-full w-full overflow-hidden"}>
        <div className="grain" />
        <NextImage alt={alt} src={`/${src}`} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
});

GrainImage.displayName = "GrainImage";

import { type ComponentPropsWithoutRef, forwardRef } from "react";
import NextImage from "next/image";
import { cn } from "~/helpers";

type Props = ComponentPropsWithoutRef<"div"> & {
  alt: string;
  src: string;
  isRound?: boolean;
};

export const GrainImage = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { alt, src, isRound, className, ...restProps } = props;
  return (
    <div
      className={cn("h-full w-full brightness-50 saturate-[0.8]", className)}
      ref={ref}
      {...restProps}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden",
          isRound ? "rounded-full" : null,
        )}
      >
        <div className="grain" />
        <NextImage
          alt={alt}
          src={`/${src}`}
          width={2000}
          height={1000}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            isRound ? "rounded-full" : null,
          )}
        />
      </div>
    </div>
  );
});

GrainImage.displayName = "GrainImage";

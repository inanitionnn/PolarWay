import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "~/helpers";

type Props = ComponentPropsWithoutRef<"div"> & {};

export const SectionWrapper = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, children, ...restProps } = props;
    return (
      <div
        className={cn("h-screen w-full", className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

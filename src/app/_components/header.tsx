import { type ComponentPropsWithRef, type Ref, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "~/helpers";

export const headerVariants = cva("font-bold font-head", {
  variants: {
    tag: {
      h1: "text-6xl md:text-8xl xl:text-9xl font-semibold",
      h2: "text-4xl md:text-5xl xl:text-6xl font-normal",
      h3: "text-2xl xl:text-3xl font-normal sm:leading-6 md:leading-7 xl:leading-9",
    },
  },
  defaultVariants: {
    tag: "h1",
  },
});

type HeaderTag = "h1" | "h2" | "h3";

type Props = ComponentPropsWithRef<HeaderTag> &
  VariantProps<typeof headerVariants> & {
    tag?: HeaderTag;
  };

const Header = forwardRef((props: Props, ref: Ref<HTMLHeadingElement>) => {
  const { className, children, tag: Tag = "h1", ...restProps } = props;
  return (
    <Tag
      className={cn(headerVariants({ tag: Tag, className }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </Tag>
  );
});

const MHeader = motion(Header);
export { MHeader, Header };

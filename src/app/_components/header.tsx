import { type ComponentPropsWithRef, type Ref, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "~/helpers";

export const headerVariants = cva(
  "text-center font-bold font-head break-words",
  {
    variants: {
      vsize: {
        base: "text-5xl md:text-6xl lg:text-7xl font-normal",
      },
    },
    defaultVariants: {
      vsize: "base",
    },
  },
);

type Props = ComponentPropsWithRef<"h1"> & VariantProps<typeof headerVariants>;

const Header = forwardRef((props: Props, ref: Ref<HTMLHeadingElement>) => {
  const { className, vsize, children, ...restProps } = props;
  return (
    <h1
      className={cn(headerVariants({ vsize, className }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </h1>
  );
});
const MHeader = motion(Header);
export { MHeader, Header };

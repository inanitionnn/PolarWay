import { type ComponentPropsWithRef, type Ref, forwardRef } from "react";
import { motion } from "framer-motion";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/helpers";

const paragraphVariants = cva("", {
  variants: {
    vsize: {
      base: "sm:text-lg md:text-xl lg:text-2xl font-extralight sm:leading-6 md:leading-7 lg:leading-9",
    },
  },
  defaultVariants: {
    vsize: "base",
  },
});

type Props = ComponentPropsWithRef<"p"> &
  VariantProps<typeof paragraphVariants>;

const Paragraph = forwardRef((props: Props, ref: Ref<HTMLParagraphElement>) => {
  const { className, vsize, children, ...restProps } = props;
  return (
    <p
      className={cn(paragraphVariants({ vsize, className }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </p>
  );
});
const MParagraph = motion(Paragraph);
export { MParagraph, Paragraph };

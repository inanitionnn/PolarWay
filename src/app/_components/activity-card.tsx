import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "~/helpers";
import { Header } from "./header";
import { Paragraph } from "./paragraph";
import { ArrowLeft } from "lucide-react";
import { activity } from "~/types";

type Props = ComponentPropsWithoutRef<"div"> &
  activity & {
    isFirst: boolean;
  };

export const ActivityCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, header, paragraph, isFirst, ...restProps } = props;
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-start justify-center gap-4 bg-zinc-900 p-10",
        className,
      )}
      ref={ref}
      {...restProps}
    >
      <Header tag="h3">{header}</Header>
      <Paragraph vsize={"sm"}>{paragraph}</Paragraph>
      {isFirst ? <ArrowLeft className="absolute bottom-10 right-10" /> : null}
    </div>
  );
});

ActivityCard.displayName = "ActivityCard";

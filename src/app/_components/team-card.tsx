import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "~/helpers";
import { Header } from "./header";
import { Paragraph } from "./paragraph";
import { teamMember } from "~/types";
import { GrainImage } from "./grain-image";

type Props = ComponentPropsWithoutRef<"div"> &
  teamMember & {
    isActive: boolean;
  };

export const TeamCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    firstName,
    lastName,
    mainPosition,
    temporaryPosition,
    isActive,
    photo,
    ...restProps
  } = props;
  return (
    <div
      className={cn(
        "relative flex h-[200px] w-[500px] items-center justify-center gap-4 bg-zinc-900",
        className,
      )}
      ref={ref}
      {...restProps}
    >
      <div className="flex h-[200px] w-[200px] items-center justify-center">
        <GrainImage alt="" src={photo ?? ""} className="rounded-full" />
      </div>
      {isActive ? (
        <div className="flex flex-col items-start justify-center gap-2">
          <Header tag="h3">
            {firstName} {lastName}
          </Header>
          <Paragraph vsize={"sm"}>{mainPosition}</Paragraph>
          {temporaryPosition ? (
            <Paragraph vsize={"sm"}>{temporaryPosition}</Paragraph>
          ) : null}
        </div>
      ) : null}
    </div>
  );
});

TeamCard.displayName = "TeamCard";

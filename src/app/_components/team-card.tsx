import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "~/helpers";
import { Header } from "./header";
import { Paragraph } from "./paragraph";
import type { teamMember } from "~/types";
import { GrainImage } from "./grain-image";

type Props = ComponentPropsWithoutRef<"div"> &
  teamMember & {
    isActive: boolean;
    isSwiper: boolean;
  };

export const TeamCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    firstName,
    lastName,
    mainPosition,
    isActive,
    isSwiper,
    photo,
    ...restProps
  } = props;
  return (
    <>
      {!isSwiper ? (
        <>
          <div
            className={cn(
              "relative flex flex-col items-center justify-start gap-4",
              className,
            )}
            ref={ref}
            {...restProps}
          >
            <div
              className={
                "flex  h-[150px] min-h-[150px] w-[150px] min-w-[150px] items-center justify-center"
              }
            >
              {photo ? (
                <GrainImage alt="" src={photo} isRound={true} />
              ) : (
                <div className="h-full w-full rounded-full bg-white" />
              )}
            </div>
            <div className="flex flex-col items-start  justify-center gap-2">
              <Header tag="h4" className="w-full text-center ">
                {firstName} {lastName}
              </Header>
              <Paragraph
                vsize={"sm"}
                className="w-full text-center  opacity-70"
              >
                {mainPosition}
              </Paragraph>
            </div>
          </div>
        </>
      ) : (
        <div
          className={cn(
            "relative flex w-[200px] flex-col items-center justify-start gap-4",
            className,
          )}
          ref={ref}
          {...restProps}
        >
          <div
            className={cn(
              "flex  items-center justify-center",
              isActive
                ? "h-[200px] min-h-[200px] w-[200px] min-w-[200px]"
                : "mt-[30px] h-[100px] min-h-[100px] w-[100px] min-w-[100px] pt-[30px]",
            )}
          >
            {photo ? (
              <GrainImage alt="" src={photo} isRound={true} />
            ) : (
              <div className="h-full w-full rounded-full bg-white" />
            )}
          </div>
          {isActive ? (
            <div className="flex flex-col items-start justify-center gap-2">
              <Header tag="h4" className="w-full text-center">
                {firstName} {lastName}
              </Header>
              <Paragraph vsize={"sm"} className="w-full text-center opacity-70">
                {mainPosition}
              </Paragraph>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
});

TeamCard.displayName = "TeamCard";

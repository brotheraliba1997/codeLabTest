import React, { ReactNode } from "react";

function Container({
  children,
  // fluid = false,
  className = "",
}: {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
}) {
  return (
    <div
      // className={`${
      //   fluid ?? "max-w-[1440px]"
      // } w-[90%]  md:max-w-[770px] lg:max-w-[1440px] mx-auto ${
      //   className ? className : ""
      // }`}

      className={` w-[95%] mx-auto  ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;

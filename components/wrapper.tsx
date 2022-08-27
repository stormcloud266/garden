import { HTMLProps } from "react";
import clsx from "clsx";

interface WrapperProps extends HTMLProps<HTMLDivElement> {
  small?: boolean;
}

const Wrapper = ({ small, children, ...rest }: WrapperProps) => {
  return (
    <div
      {...rest}
      className={clsx("w-full max-w-7xl mx-auto px-4", {
        "max-w-xl": small,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;

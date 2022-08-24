import { clsx } from "clsx";
import { HTMLProps } from "react";

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  center?: boolean;
  small?: boolean;
}

const Title = ({
  tag = "h2",
  children,
  center,
  small,
  ...rest
}: TitleProps) => {
  const classes = clsx("text-5xl font-bold");

  switch (tag) {
    case "h1":
      return (
        <h1 {...rest} className={classes}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...rest} className={classes}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...rest} className={classes}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...rest} className={classes}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...rest} className={classes}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 {...rest} className={classes}>
          {children}
        </h6>
      );
  }
};

export default Title;

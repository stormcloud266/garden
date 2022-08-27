import { HTMLProps } from "react";
import clsx from "clsx";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  tag?: "div" | "main";
}

const Section = ({ tag, children, ...rest }: SectionProps) => {
  const classes = clsx("pb-24 md:pb-32 lg:pb-36 pt-28 md:pt-36 lg:pt-40");
  switch (tag) {
    case "div":
      return (
        <div {...rest} className={classes}>
          {children}
        </div>
      );
    case "main":
      return (
        <main {...rest} className={classes}>
          {children}
        </main>
      );
    default:
      return (
        <section {...rest} className={classes}>
          {children}
        </section>
      );
  }
};

export default Section;

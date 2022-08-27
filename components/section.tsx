import { HTMLProps } from "react";
import clsx from "clsx";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  tag?: "div" | "main";
}

const Section = ({ tag, children, ...rest }: SectionProps) => {
  const classes = clsx("py-24 md:py-32 lg:py-36");
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

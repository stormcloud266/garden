import { HTMLProps } from "react";
import clsx from "clsx";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  tag?: "div" | "main";
}

const Section = ({ tag, children, ...rest }: SectionProps) => {
  const classes = clsx("py-20 md:py-28 lg:py-32");
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

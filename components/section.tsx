import { HTMLProps } from "react";
import clsx from "clsx";

interface SectionProps extends HTMLProps<HTMLElement> {}

const Section = ({ children, ...rest }: SectionProps) => {
  return (
    <section {...rest} className={clsx("py-20 md:py-28 lg:py-32")}>
      {children}
    </section>
  );
};

export default Section;

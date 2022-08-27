import { HTMLProps } from "react";

const Title = ({ children, ...rest }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 {...rest} className="text-4xl md:text-5xl font-bold">
      {children}
    </h1>
  );
};

export default Title;

import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl md:text-5xl font-bold">{children}</h1>;
};

export default Title;

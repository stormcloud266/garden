import { HTMLProps } from "react";

const Wrapper = ({ children, ...rest }: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...rest} className="w-full max-w-xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Wrapper;

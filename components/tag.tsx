import { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-block py-1 px-4 text-burnt bg-burnt/20 text-xs  rounded-full mt-5 font-semibold">
      {children}
    </span>
  );
};

export default Tag;

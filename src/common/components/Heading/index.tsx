import { HTMLAttributes } from "react";

const Heading = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      className={`
        ${className} text-3xl font-bold
      `}
    >
      {children}
    </h3>
  );
};

export default Heading;

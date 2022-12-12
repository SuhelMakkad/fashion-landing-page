import { HTMLAttributes } from "react";

const Heading = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 {...props} className={`${className} text-4xl font-bold`}>
      <span className="relative">
        {children}
        <svg
          className="absolute top-1/2 right-0 -z-10"
          width="120"
          height="25"
          viewBox="0 0 186 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
            fill="#EBD96B"
          />
        </svg>
      </span>
    </h3>
  );
};

export default Heading;

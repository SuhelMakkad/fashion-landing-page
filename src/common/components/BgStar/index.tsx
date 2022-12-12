import { SVGProps } from "react";

const Star = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className={`${className} fill-slate-200 -z-10 absolute`}
    width="45"
    height="40"
    viewBox="0 0 56 51"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z" />
  </svg>
);

export default Star;

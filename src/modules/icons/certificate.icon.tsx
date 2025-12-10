import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m15.661 16.212-3.742-1.279-1.288 3.734-2.875-5.6-2.725 5.6-1.288-3.734L0 16.212l2.725-5.6a6.533 6.533 0 1 1 10.21 0l2.726 5.6ZM3.164 6.533l2.51 1.251-.177 2.8 2.334-1.55 2.333 1.54-.159-2.79 2.492-1.25-2.501-1.26.168-2.782-2.333 1.53-2.334-1.549.159 2.81-2.492 1.25Z"
    />
  </svg>
);
export default SvgComponent;

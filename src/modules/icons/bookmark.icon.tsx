import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M16.8 7.467a1.866 1.866 0 0 1 1.866 1.866v14.934a1.867 1.867 0 0 1-1.867 1.866H5.6a1.866 1.866 0 0 1-1.867-1.866V9.333A1.867 1.867 0 0 1 5.6 7.467h11.2Zm0 1.866h-4.668V16.8L9.8 14.7l-2.333 2.1V9.333H5.599v14.934h11.2V9.333Z"
    />
  </svg>
);
export default SvgComponent;

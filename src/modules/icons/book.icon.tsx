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
      d="M17.734 8.4h-3.901c-.392-1.083-1.419-1.867-2.632-1.867-1.214 0-2.24.784-2.632 1.867H4.667a1.867 1.867 0 0 0-1.866 1.867v13.066A1.867 1.867 0 0 0 4.667 25.2h13.067a1.867 1.867 0 0 0 1.867-1.867V10.267A1.867 1.867 0 0 0 17.734 8.4Zm-6.533 0a.933.933 0 1 1 0 1.867.933.933 0 0 1 0-1.867Zm-4.667 3.733h9.333v-1.866h1.867v13.066H4.667V10.267h1.867v1.866Zm.467 6.067 1.4-1.4 1.866 1.867 4.2-4.2 1.4 1.4-5.6 5.6L7.001 18.2Z"
    />
  </svg>
);
export default SvgComponent;

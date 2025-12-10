import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <g clipPath="url(#c)">
          <mask
            id="d"
            width={16}
            height={16}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path fill="#fff" d="M16 0H0v16h16V0Z" />
          </mask>
          <g mask="url(#d)">
            <path
              stroke="#000D4D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={0.45}
              strokeWidth={1.8}
              d="M14.667 8A6.667 6.667 0 0 1 8 14.667M14.667 8A6.667 6.667 0 0 0 8 1.333M14.667 8H1.333M8 14.667A6.667 6.667 0 0 1 1.333 8M8 14.667A10.2 10.2 0 0 0 10.667 8 10.2 10.2 0 0 0 8 1.333m0 13.334A10.2 10.2 0 0 1 5.333 8 10.2 10.2 0 0 1 8 1.333m0 0A6.667 6.667 0 0 0 1.333 8"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;

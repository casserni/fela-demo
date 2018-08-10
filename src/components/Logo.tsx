import * as React from "react";

// @ts-ignore
import { FelaComponent } from "react-fela";

export default () => {
  return (
    <FelaComponent
      style={(theme: any) => {
        return {
          fill:
            theme.logo.foreground || theme.header.foreground || "dodgerblue",

          width: "80px"
        };
      }}
      render={({ className }: { className: any }) => {
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512.017 512.017"
            className={className}
          >
            <path
              d="M435.217,290.142c-4.719,0-8.533,3.823-8.533,8.533v68.267c0,14.114-11.486,25.6-25.6,25.6H110.95
           c-14.114,0-25.6-11.486-25.6-25.6v-68.267c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v68.267
           c0,23.526,19.14,42.667,42.667,42.667h290.133c23.526,0,42.667-19.14,42.667-42.667v-68.267
           C443.75,293.965,439.936,290.142,435.217,290.142z"
            />
            <path
              d="M85.35,264.542v-85.333c0-14.114,11.486-25.6,25.6-25.6h68.267c4.719,0,8.533-3.823,8.533-8.533
           c0-33.638,36.702-59.733,68.267-59.733c22.204,0,45.713,12.262,58.522,30.515c2.705,3.849,8.021,4.796,11.887,2.091
           c3.857-2.714,4.796-8.03,2.082-11.887c-14.455-20.617-38.886-34.577-63.957-37.231V49.638
           c9.907-3.541,17.067-12.919,17.067-24.03c0-14.114-11.486-25.6-25.6-25.6s-25.6,11.486-25.6,25.6
           c0,11.11,7.159,20.489,17.067,24.021v19.174c-35.166,3.891-71.279,31.104-76.228,67.738H110.95
           c-23.526,0-42.667,19.14-42.667,42.667l-0.017,76.8H49.63c-3.541-9.916-12.919-17.067-24.03-17.067
           c-14.114,0-25.6,11.486-25.6,25.6c0,14.114,11.486,25.6,25.6,25.6c11.11,0,20.489-7.151,24.03-17.067h27.187
           C81.536,273.075,85.35,269.252,85.35,264.542z M256.017,17.075c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533
           s-8.533-3.831-8.533-8.533C247.484,20.907,251.307,17.075,256.017,17.075z M25.6,273.075c-4.71,0-8.533-3.831-8.533-8.533
           c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533C34.133,269.244,30.31,273.075,25.6,273.075z"
            />
            <path
              d="M486.417,238.942c-11.11,0-20.488,7.151-24.021,17.067H443.75v-76.8c0-23.526-19.14-42.667-42.667-42.667H213.35
           c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h187.733c14.114,0,25.6,11.486,25.6,25.6v85.333
           c0,4.71,3.814,8.533,8.533,8.533h27.179c3.533,9.916,12.911,17.067,24.021,17.067c14.114,0,25.6-11.486,25.6-25.6
           C512.017,250.428,500.531,238.942,486.417,238.942z M486.417,273.075c-4.71,0-8.533-3.831-8.533-8.533
           c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533C494.95,269.244,491.128,273.075,486.417,273.075z"
            />
            <path
              d="M332.817,426.675h-153.6c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h153.6
           c4.719,0,8.533-3.823,8.533-8.533S337.536,426.675,332.817,426.675z"
            />
            <path
              d="M375.484,230.409c0-14.114-11.486-25.6-25.6-25.6s-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6
           S375.484,244.523,375.484,230.409z M341.35,230.409c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533
           c0,4.702-3.823,8.533-8.533,8.533C345.173,238.942,341.35,235.11,341.35,230.409z"
            />
            <path
              d="M187.75,230.409c0-14.114-11.486-25.6-25.6-25.6s-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6
           S187.75,244.523,187.75,230.409z M162.15,238.942c-4.71,0-8.533-3.831-8.533-8.533c0-4.702,3.823-8.533,8.533-8.533
           c4.71,0,8.533,3.831,8.533,8.533C170.684,235.11,166.861,238.942,162.15,238.942z"
            />
            <path
              d="M315.75,494.942H196.284c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H315.75
           c4.719,0,8.533-3.823,8.533-8.533S320.469,494.942,315.75,494.942z"
            />
            <path
              d="M170.684,315.742v34.133c0,4.71,3.814,8.533,8.533,8.533h153.6c4.719,0,8.533-3.823,8.533-8.533v-34.133
           c0-4.71-3.814-8.533-8.533-8.533h-153.6C174.498,307.209,170.684,311.031,170.684,315.742z M290.15,324.275h34.133v17.067H290.15
           V324.275z M238.95,324.275h34.133v17.067H238.95V324.275z M187.75,324.275h34.133v17.067H187.75V324.275z"
            />
            <path
              d="M315.75,460.809H196.284c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H315.75
           c4.719,0,8.533-3.823,8.533-8.533S320.469,460.809,315.75,460.809z"
            />
          </svg>
        );
      }}
    />
  );
};
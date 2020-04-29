import React from "react";
import ClapButton from "react-clap-button";
import { AddComment, Favorite, Visibility } from "@material-ui/icons/";
export default function Clap({ onCountChange }) {
  // All Props are Optional
  return (
    <ClapButton
      count={0}
      countTotal={0}
      maxCount={50}
      isClicked={false}
      onCountChange={onCountChange}
      iconComponent={props => <Favorite {...props} size={38} />}
    />
  );
}
<button class="sc-ifAKCX gZrJOM clap" style="transform: scale(1, 1);">
  <svg
    class="MuiSvgIcon-root clap--icon"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
    size="38"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
  <span
    class="sc-EHOje dDncuX clap--count"
    style="opacity: 0; transform: scale(0);"
  >
    +0
  </span>
  <span
    class="sc-bZQynM dsnfhh clap--count-total"
    style="opacity: 0; transform: scale(0);"
  >
    0
  </span>
  <div
    data-name="mojs-shape"
    class=""
    style="position: absolute; width: 0px; height: 0px; margin-left: 0px; margin-top: 0px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
  >
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 14px; height: 14px; margin-left: -7px; margin-top: -7px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <path
          d="M7.0000,1.0000 L12.1962,10.0000 L1.8038,10.0000 z"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="deeppink"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="rgba(211,84,0 ,0.5)"
        ></path>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 14px; height: 14px; margin-left: -7px; margin-top: -7px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <path
          d="M7.0000,1.0000 L12.1962,10.0000 L1.8038,10.0000 z"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="deeppink"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="rgba(211,84,0 ,0.5)"
        ></path>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 14px; height: 14px; margin-left: -7px; margin-top: -7px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <path
          d="M7.0000,1.0000 L12.1962,10.0000 L1.8038,10.0000 z"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="deeppink"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="rgba(211,84,0 ,0.5)"
        ></path>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 14px; height: 14px; margin-left: -7px; margin-top: -7px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <path
          d="M7.0000,1.0000 L12.1962,10.0000 L1.8038,10.0000 z"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="deeppink"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="rgba(211,84,0 ,0.5)"
        ></path>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 14px; height: 14px; margin-left: -7px; margin-top: -7px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <path
          d="M7.0000,1.0000 L12.1962,10.0000 L1.8038,10.0000 z"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="deeppink"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="rgba(211,84,0 ,0.5)"
        ></path>
      </svg>
    </div>
  </div>
  <div
    data-name="mojs-shape"
    class=""
    style="position: absolute; width: 0px; height: 0px; margin-left: 0px; margin-top: 0px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
  >
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 8px; height: 8px; margin-left: -4px; margin-top: -4px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <ellipse
          rx="3"
          ry="3"
          cx="4"
          cy="4"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="rgba(149,165,166 ,0.5)"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="transparent"
        ></ellipse>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 8px; height: 8px; margin-left: -4px; margin-top: -4px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <ellipse
          rx="3"
          ry="3"
          cx="4"
          cy="4"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="rgba(149,165,166 ,0.5)"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="transparent"
        ></ellipse>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 8px; height: 8px; margin-left: -4px; margin-top: -4px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <ellipse
          rx="3"
          ry="3"
          cx="4"
          cy="4"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="rgba(149,165,166 ,0.5)"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="transparent"
        ></ellipse>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 8px; height: 8px; margin-left: -4px; margin-top: -4px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <ellipse
          rx="3"
          ry="3"
          cx="4"
          cy="4"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="rgba(149,165,166 ,0.5)"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="transparent"
        ></ellipse>
      </svg>
    </div>
    <div
      data-name="mojs-shape"
      class=""
      style="position: absolute; width: 8px; height: 8px; margin-left: -4px; margin-top: -4px; opacity: 1; left: 50%; top: 50%; transform: scale(0); transform-origin: 50% 50%;"
    >
      <svg style="display: block; width: 100%; height: 100%; left: 0px; top: 0px;">
        <ellipse
          rx="3"
          ry="3"
          cx="4"
          cy="4"
          fill-opacity="1"
          stroke-linecap=""
          stroke-dashoffset=""
          fill="rgba(149,165,166 ,0.5)"
          stroke-dasharray=""
          stroke-opacity="1"
          stroke-width="2"
          stroke="transparent"
        ></ellipse>
      </svg>
    </div>
  </div>
</button>;

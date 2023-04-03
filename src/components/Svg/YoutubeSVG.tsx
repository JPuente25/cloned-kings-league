import React from 'react';

interface Props {}

interface YoutubeSVGStates {}

const YoutubeSVG = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="31"
         height="21"
         viewBox="0 0 31 21"
         fill="none">
         <script
            type="text/javascript"
            src="chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/in-page.js"
         />
         <g filter="url(#filter0_d_98_19227)">
            <rect
               x="1"
               width="29"
               height="19"
               rx="5.51268"
               fill="#FF0000"
            />
         </g>
         <path
            d="M22.0294 9.55549L22.1342 9.5L22.0294 9.44451L13.0294 4.68137L12.9372 4.6326L12.9372 4.73686L12.9372 14.2631L12.9372 14.3674L13.0294 14.3186L22.0294 9.55549Z"
            fill="url(#paint0_linear_98_19227)"
            stroke="#DCDCDC"
            stroke-width="0.125571"
         />
         <defs>
            <filter
               id="filter0_d_98_19227"
               x="0.310915"
               y="0"
               width="30.3782"
               height="20.3782"
               filterUnits="userSpaceOnUse"
               color-interpolation-filters="sRGB">
               <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
               />
               <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
               />
               <feOffset dy="0.689085" />
               <feGaussianBlur stdDeviation="0.344542" />
               <feComposite
                  in2="hardAlpha"
                  operator="out"
               />
               <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
               />
               <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_98_19227"
               />
               <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_98_19227"
                  result="shape"
               />
            </filter>
            <linearGradient
               id="paint0_linear_98_19227"
               x1="15.9429"
               y1="4"
               x2="15.9429"
               y2="15"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#EAEAEA" />
               <stop
                  offset="1"
                  stop-color="white"
               />
            </linearGradient>
         </defs>
      </svg>
   );
};

export { YoutubeSVG };

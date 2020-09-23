import React, { FC } from 'react';



const EmailCrainFirstPivot: FC = ({ children })=>(
  <>
    <polyline
      id="Fill-283"
      points="268.04 151.01 254.64 187.28 258.75 188.91 276.64 155.48 268.04 151.01"
      fill="#d3ddfc"
      fillOpacity="0.4"
    />
    <path
      id="Fill-300"
      d="M272.62,164.76a8.4,8.4,0,1,1,8.39-8.39,8.4,8.4,0,0,1-8.39,8.39"
      fill="#b8c8fa"
      fillRule="evenodd"
    />
    <path
      id="Fill-301"
      d="M272.62,161.39a5,5,0,1,1,5-5,5,5,0,0,1-5,5"
      fillRule="evenodd"
      fill="url(#linear-gradient-3)"
    />
    {children}
  </>
);



export default EmailCrainFirstPivot;
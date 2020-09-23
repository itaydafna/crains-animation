import React, { FC } from 'react';


const AnalyticsCrainFirstPivot: FC = ({ children  })=>(
  <>
    <polyline
      id="Fill-283-2"
      data-name="Fill-283"
      points="89.87 82.77 61.27 108.78 58.21 105.58 82.5 76.47 89.87 82.77"
      fill="#d3ddfc"
      fillOpacity="0.4"
    />
    <path
      id="Fill-300-2"
      data-name="Fill-300"
      d="M78.66,78.61a8.4,8.4,0,1,0,8.39-8.4,8.39,8.39,0,0,0-8.39,8.4"
      fill="#b8c8fa"
      fillRule="evenodd"
    />
    <path
      id="Fill-301-2"
      data-name="Fill-301"
      d="M82,78.61a5,5,0,1,0,5-5,5,5,0,0,0-5,5h5.81"
      fillRule="evenodd"
      fill="url(#linear-gradient-9)"
    />
    {children}
  </>
);


export default AnalyticsCrainFirstPivot;
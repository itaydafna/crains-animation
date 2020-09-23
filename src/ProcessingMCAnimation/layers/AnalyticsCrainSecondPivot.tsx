import React, { ReactNode } from  'react';


interface Props {
  children?: ReactNode
}

const AnalyticsCrainSecondPivot = ({  children  }:Props)=> (
  <>
    <polyline
      id="Fill-281-2"
      data-name="Fill-281"
      points="63.72 106.86 87.05 126.58 84.75 129.25 57.77 109.88 63.72 106.86"
      fill="#d3ddfc"
      fillOpacity="0.4"
    />
    <path
      id="Fill-304-2"
      data-name="Fill-304"
      d="M56.13,106.56a4.2,4.2,0,1,0,4.2-4.2,4.19,4.19,0,0,0-4.2,4.2"
      fill="#b8c8fa"
      fillRule="evenodd"
    />
    <path
      id="Fill-305-2"
      data-name="Fill-305"
      d="M57.81,106.56a2.52,2.52,0,1,0,2.52-2.51,2.52,2.52,0,0,0-2.52,2.51"
      fillRule="evenodd"
      fill="url(#linear-gradient-10)"
    />
    {children}
  </>
);



export default AnalyticsCrainSecondPivot;
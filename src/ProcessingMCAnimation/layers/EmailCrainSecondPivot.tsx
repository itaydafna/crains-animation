import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const EmailCrainSecondPivot = ({
  children }:Props)=> (
    <>
      <polyline
        id="Fill-281"
        points="257.36 182.7 237.65 159.37 234.98 161.67 254.34 188.66 257.36 182.7"
        fill="#d3ddfc"
        fillOpacity="0.4"
      />
      <path
        id="Fill-304"
        d="M257.67,190.29a4.2,4.2,0,1,1,4.2-4.19,4.2,4.2,0,0,1-4.2,4.19"
        fill="#b8c8fa"
        fillRule="evenodd"
      />
      <path
        id="Fill-305"
        d="M257.67,188.61a2.52,2.52,0,1,1,2.51-2.51,2.51,2.51,0,0,1-2.51,2.51"
        fillRule="evenodd"
        fill="url(#linear-gradient-4)"
      />
      <g id="email-crain-3rd-pivot">
        <polygon
          id="Fill-280"
          points="222.96 157.1 222.96 165.23 236.72 165.23 236.72 157.1 222.96 157.1"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <path
          id="Fill-308"
          d="M237,165.49a4.2,4.2,0,1,1,4.19-4.19,4.2,4.2,0,0,1-4.19,4.19"
          fill="#b8c8fa"
          fillRule="evenodd"
        />
        <path
          id="Fill-309"
          d="M237,163.81a2.52,2.52,0,1,1,2.51-2.51,2.52,2.52,0,0,1-2.51,2.51"
          fillRule="evenodd"
          fill="url(#linear-gradient-5)"
        />
        <g id="email-crain-4th-pivot">
          {children}
          <g id="Group-4">
            <g mask="url(#mask)">
              <path
                id="Fill-278"
                d="M217.54,160.69h6s-1.2-16.82-11.39-17.08c-13.68-.36-14.41,13.49-14.41,13.49h1.6s2.63-10.78,10.14-10.29c6.67.43,8.1,13.88,8.1,13.88"
                fill="#37383a"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g
            id="Fill-279"
            opacity="0.2"
            filter="url(#filter-5)"
            style={{ isolation: 'isolate' }}
          >
            <path
              d="M209.8,175.28c-4.33-.64-7.05-1.49-8.14-2.56a12.25,12.25,0,0,1-3.85-8.57l1.94-.16s1,4.13,3.42,6.32c1.89,1.7,5.18,1.58,6.41,1.58C209.76,171.89,209.84,173,209.8,175.28Z"
              fill="#4f5053"
              fillRule="evenodd"
            />
          </g>
          <path
            id="Fill-279-2"
            data-name="Fill-279"
            d="M217.68,160.87h6s-1.21,16.82-11.39,17.09c-13.68.35-14.42-13.5-14.42-13.5h1.61s2.62,10.78,10.14,10.29c6.67-.43,8.09-13.88,8.09-13.88"
            fill="#37383a"
            fillRule="evenodd"
          />
          <path
            id="Fill-317"
            d="M220.61,164.32a3.16,3.16,0,1,1,3.16-3.16,3.16,3.16,0,0,1-3.16,3.16"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-318"
            d="M220.61,162.82a1.66,1.66,0,1,1,1.66-1.66,1.66,1.66,0,0,1-1.66,1.66"
            fillRule="evenodd"
            fill="url(#linear-gradient-6)"
          />
        </g>
      </g>
    </>
);




export default EmailCrainSecondPivot;
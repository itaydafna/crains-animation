import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AnimationProps, motion, Transition } from 'framer-motion';

interface Props {
  animate?: AnimationProps['animate'],
  transition?: Transition,
  children?: ReactNode
}

const AnalyticsCrainFirstPivot = ({ animate, transition, children  }:Props)=>(
  <Container animate={animate} transition={transition} id="analytics-crain-1st-pivot">
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
    <g id="analytics-crain-2nd-pivot">
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
      <g id="analytics-crain-3rd-pivot">
        <polygon
          id="Fill-280-2"
          data-name="Fill-280"
          points="89.32 143.5 81.19 143.5 81.19 127.5 89.32 127.5 89.32 143.5"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <path
          id="Fill-308-2"
          data-name="Fill-308"
          d="M80.93,127.2a4.2,4.2,0,1,0,4.2-4.2,4.2,4.2,0,0,0-4.2,4.2"
          fill="#b8c8fa"
          fillRule="evenodd"
        />
        <path
          id="Fill-309-2"
          data-name="Fill-309"
          d="M82.61,127.2a2.52,2.52,0,1,0,2.52-2.51,2.51,2.51,0,0,0-2.52,2.51"
          fillRule="evenodd"
          fill="url(#linear-gradient-11)"
        />
        <g
          id="analytics-crain-4th-pivot"
          data-name="analytics-crain-4th-pivot"
        >
          <g id="charts" opacity="0.7">
            <path
              id="Shape"
              d="M79.25,149.71a4.89,4.89,0,0,1,6.21,3l14,40.62a4.89,4.89,0,0,1-9.24,3.18l-14-40.62A4.9,4.9,0,0,1,79.25,149.71ZM56.58,167.84a4.88,4.88,0,0,1,6.2,3l10.81,31.39a4.88,4.88,0,1,1-9.23,3.18L53.55,174.05A4.89,4.89,0,0,1,56.58,167.84Zm16.74,6.63a4.9,4.9,0,0,1,6.21,3l7,20.31A4.88,4.88,0,1,1,77.29,201l-7-20.31A4.89,4.89,0,0,1,73.32,174.47Zm-25.85,8.91a4.87,4.87,0,0,1,6.2,3l7,20.32a4.88,4.88,0,0,1-9.24,3.17l-7-20.31A4.87,4.87,0,0,1,47.47,183.38Z"
              fill="#b8c8fa"
              fillRule="evenodd"
            />
            <path
              id="Combined-Shape"
              d="M43.05,173.54a1.91,1.91,0,0,1,1.77.26l0,0,.07.06a2,2,0,1,1-1.89-.35Zm.31.92a1,1,0,0,0,.64,1.85,1,1,0,0,0,.61-1.24l0,0-.18.26a.5.5,0,0,1-.61.15l-.08,0a.49.49,0,0,1-.11-.68h0l.23-.31A1,1,0,0,0,43.36,174.46Zm3.11-3.69a.49.49,0,1,1,.79.57h0l-.57.79a.49.49,0,1,1-.79-.57h0ZM68.23,159.7a2,2,0,1,1,1.27,3.69,2,2,0,0,1-1.27-3.69Zm.32.92a.94.94,0,0,0-.48.37l.51,0,0,0a.5.5,0,0,1,.4-.09l.08,0a.49.49,0,0,1,.26.64h0l-.06.15a.49.49,0,0,1-.47.3h0L68,162h0l0-.09a1,1,0,1,0,1.84-.64A1,1,0,0,0,68.55,160.62Zm-19.79,7a.5.5,0,0,1,.68-.11.5.5,0,0,1,.11.69h0L49,169a.49.49,0,0,1-.68.11.48.48,0,0,1-.11-.68h0ZM68.58,161h0a.75.75,0,0,0-.09.15l-.06.15.45.19,0-.49Zm-4.93.29a.49.49,0,0,1,.51-.47h0l1,0a.49.49,0,0,1,0,1h0l-1,0A.49.49,0,0,1,63.65,161.3Zm-12.6,3.14a.49.49,0,1,1,.79.57h0l-.57.79a.49.49,0,1,1-.79-.57h0ZM70,157.57a.49.49,0,0,1,.64-.26.49.49,0,0,1,.26.64h0l-.38.9a.48.48,0,0,1-.64.26.49.49,0,0,1-.26-.64h0Zm-10.24,3.57a.48.48,0,0,1,.51-.46h0l1,0a.5.5,0,0,1,.47.51.49.49,0,0,1-.51.47h0l-1,0A.49.49,0,0,1,59.75,161.14Zm-6-1.6a2,2,0,0,1,2.41,1,.4.4,0,0,1,.22,0h0l1,0a.49.49,0,1,1,0,1h0l-1,0h0A2,2,0,0,1,53,162.82a.56.56,0,0,1-.16-.07.51.51,0,0,1-.2-.37,2,2,0,0,1,1-2.84Zm.31.92a1,1,0,0,0-.64.75.5.5,0,0,1,.63-.05.48.48,0,0,1,.11.68h0l-.27.38a1,1,0,1,0,.17-1.76ZM71.52,154a.48.48,0,1,1,.89.38h0l-.38.9a.5.5,0,0,1-.64.26.51.51,0,0,1-.26-.64h0Zm1.52-3.6a.48.48,0,0,1,.64-.26.49.49,0,0,1,.26.64h0l-.38.9a.5.5,0,0,1-.64.26.48.48,0,0,1-.26-.64h0Zm1.52-3.6a.49.49,0,1,1,.9.38h0l-.38.9a.49.49,0,0,1-.9-.38h0ZM77,140.16a2,2,0,1,1-.12,3.65l-.28.65a.48.48,0,0,1-.64.26.49.49,0,0,1-.26-.64h0l.38-.89a2.06,2.06,0,0,1-.29-.55A1.94,1.94,0,0,1,77,140.16Zm.31.92a1,1,0,0,0,.64,1.85,1,1,0,0,0,.61-1.24A1,1,0,0,0,77.31,141.08Z"
              fill="#b8c8fa"
            />
          </g>
          <g id="Group-4-2" data-name="Group-4">
            <g mask="url(#mask-2)">
              <path
                id="Fill-278-2"
                data-name="Fill-278"
                d="M83.35,145.82l3.25-5s13.45,10.16,8.12,18.85c-7.15,11.67-19.16,4.74-19.16,4.74l.87-1.34s10.47,3.67,14.15-2.9c3.27-5.83-7.23-14.35-7.23-14.35"
                fill="#37383a"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g
            id="Fill-279-3"
            data-name="Fill-279"
            opacity="0.2"
            filter="url(#filter-12)"
            style={{ isolation: 'isolate' }}
          >
            <path
              d="M74.58,163c-.57-.78-.24-.54,1,.7a13.92,13.92,0,0,0,9.75,4.38l.19-2.21s-5.06-1-7.55-3.73c-1.94-2.16-1.23,1.66-1.23.26C76.72,162.18,76,162.38,74.58,163Z"
              fill="#4f5053"
              fillRule="evenodd"
            />
          </g>
          <path
            id="Fill-279-4"
            data-name="Fill-279"
            d="M85.55,146.54v-6S68.73,141.78,68.47,152C68.11,165.65,82,166.38,82,166.38v-1.6s-10.78-2.63-10.29-10.14c.43-6.67,13.88-8.1,13.88-8.1"
            fill="#37383a"
            fillRule="evenodd"
          />
          <path
            id="Fill-317-2"
            data-name="Fill-317"
            d="M82.1,143.62a3.16,3.16,0,1,0,3.16-3.16,3.15,3.15,0,0,0-3.16,3.16"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-318-2"
            data-name="Fill-318"
            d="M83.6,143.62A1.66,1.66,0,1,0,85.26,142a1.66,1.66,0,0,0-1.66,1.67"
            fillRule="evenodd"
            fill="url(#linear-gradient-12)"
          />
        </g>
      </g>
    </g>
  </Container>
);

const Container = styled(motion.g)`
  transform-origin: 24.8% 28.6% !important;
`;

export default AnalyticsCrainFirstPivot;
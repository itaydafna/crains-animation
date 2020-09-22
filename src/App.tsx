import React from 'react';
import './App.css';

import Defs from './Defs';

import EmailCrainBase from './EmailCrainBase';
import EmailCrainFirstPivot from './EmailCrainFirstPivot';
import EmailCrainSecondPivot from './EmailCrainSecondPivot';
import Envelope from './Envelope';

function App() {
  return (
    <svg
      id="processing-mc"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="350.77"
      height="277.99"
      viewBox="0 0 350.77 277.99"
    >
      <Defs />
      <g id="Email">
        <EmailCrainBase />
        <EmailCrainFirstPivot
          animate={{
            // rotate: [40, -30, 40],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            loop: Infinity,
          }}
        >
          <EmailCrainSecondPivot
            animate={{
              // rotate: [-40, 35, -40],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          >
            <Envelope />
          </EmailCrainSecondPivot>
        </EmailCrainFirstPivot>
      </g>


      <g id="Analytics">
        <g id="analytics-crain-base">
          <path
            id="Fill-288-2"
            data-name="Fill-288"
            d="M63.25,41a1.28,1.28,0,1,0,1.27-1.28A1.27,1.27,0,0,0,63.25,41"
            fillRule="evenodd"
            fill="url(#linear-gradient-7)"
          />
          <path
            id="Fill-289-2"
            data-name="Fill-289"
            d="M56.93,41a1.28,1.28,0,1,0,1.28-1.28A1.28,1.28,0,0,0,56.93,41"
            fillRule="evenodd"
            fill="url(#linear-gradient-8)"
          />
          <polygon
            id="Fill-292-2"
            data-name="Fill-292"
            points="95.21 79.2 78.66 79.2 78.66 64.85 95.21 64.85 95.21 79.2"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Fill-282-2"
            data-name="Fill-282"
            d="M48.54,43.57H100a3.29,3.29,0,0,0,3.29-3.29V25.85A3.28,3.28,0,0,0,100,22.57H48.54a3.28,3.28,0,0,0-3.29,3.28V40.28a3.29,3.29,0,0,0,3.29,3.29"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Fill-284-2"
            data-name="Fill-284"
            d="M45.08,25.19h58.71a4.68,4.68,0,0,0,4.81-4.53H40.27a4.68,4.68,0,0,0,4.81,4.53"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-276-2"
            data-name="Fill-276"
            d="M45.7,31c-.15,0-3,.95-3,.95v4.45l3.5,1.22L45.7,31"
            fill="#d3ddfc"
            fillRule="evenodd"
          />
          <path
            id="Fill-277-2"
            data-name="Fill-277"
            d="M72.24,69.09a6,6,0,0,0,1.61-.22,5.73,5.73,0,0,0,4.34-5.39h-.93A4.79,4.79,0,0,1,73.6,68a5.09,5.09,0,0,1-5.89-2.58A17.3,17.3,0,0,1,66,60.71c-1.09-4.26-2.21-8.66-12.11-9.16-6.31-.31-10.9-3.14-12.59-7.76-1.13-3.11-.69-6.54,1-8.16,4.13-3.83,7.82-2.16,7.85-2.14l.4-.84c-.17-.09-4.3-2-8.88,2.3-2,1.87-2.55,5.72-1.29,9.16.86,2.36,3.89,7.9,13.42,8.37,9.2.46,10.15,4.17,11.25,8.46a17.8,17.8,0,0,0,1.81,4.93,6.1,6.1,0,0,0,5.32,3.22"
            fill="#d3ddfc"
            fillRule="evenodd"
          />
          <path
            id="Fill-312-2"
            data-name="Fill-312"
            d="M81.77,46.32H98a.85.85,0,0,0,0-1.69H81.77a.85.85,0,0,0,0,1.69"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-313-2"
            data-name="Fill-313"
            d="M81.77,50.6H98a.85.85,0,0,0,0-1.7H81.77a.85.85,0,0,0,0,1.7"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-314-2"
            data-name="Fill-314"
            d="M81.77,55.05H98a.85.85,0,0,0,0-1.69H81.77a.85.85,0,0,0,0,1.69"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-315-2"
            data-name="Fill-315"
            d="M81.77,59.34H98a.85.85,0,0,0,0-1.69H81.77a.85.85,0,0,0,0,1.69"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-316-2"
            data-name="Fill-316"
            d="M82,63.48H98.23a.85.85,0,1,0,0-1.69H82a.85.85,0,0,0,0,1.69"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-286-2"
            data-name="Fill-286"
            d="M50.14,38h19a.89.89,0,0,0,.89-.88V30.75a.89.89,0,0,0-.89-.89h-19a.89.89,0,0,0-.89.89v6.33a.89.89,0,0,0,.89.88"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-287-2"
            data-name="Fill-287"
            d="M75.2,35.07h23A.78.78,0,0,0,99,34.3V30.64a.78.78,0,0,0-.77-.78h-23a.78.78,0,0,0-.77.78V34.3a.78.78,0,0,0,.77.77"
            fill="#b8c8fa"
            fillRule="evenodd"
          />
          <path
            id="Fill-290-2"
            data-name="Fill-290"
            d="M73.05,45.71h0a2.36,2.36,0,0,1,2.53-2.14H97.72a2.17,2.17,0,1,1,0,4.28,2.17,2.17,0,1,1,0,4.28,2.17,2.17,0,1,1,0,4.29H75.58a2.17,2.17,0,1,1,0-4.29,2.17,2.17,0,1,1,0-4.28,2.36,2.36,0,0,1-2.53-2.14"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Fill-291-2"
            data-name="Fill-291"
            d="M75.59,56.25l22.11.06a2.47,2.47,0,0,1,2.54,2.28,2.24,2.24,0,0,1-1.84,2.06,2.23,2.23,0,0,1,1.84,2.06,2.36,2.36,0,0,1-2.52,2.14H75.58a2.36,2.36,0,0,1-2.53-2.14,2.23,2.23,0,0,1,1.84-2.06,2.24,2.24,0,0,1-1.84-2.06,2.52,2.52,0,0,1,2.54-2.34"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
        </g>
        <g id="analytics-crain-1st-pivot">
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
        </g>
      </g>
      <g id="Top-trail">
        <rect
          id="Rectangle-4"
          data-name="Rectangle"
          width="313.28"
          height="1.72"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <rect
          id="Rectangle-Copy-28"
          y="18.07"
          width="313.28"
          height="3.44"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <g id="Tri">
          <path
            id="Triangle-Copy-5"
            d="M294.62,0,315,20.66H294.62Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-6"
            d="M275.09,0l20.39,20.66H275.09Zm2.58,6.29V18.07H289.3Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-7"
            d="M255.57,0,276,20.66H255.57Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-14"
            d="M118.88,0l20.39,20.66H118.88Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-8"
            d="M236,0l20.39,20.66H236Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-15"
            d="M99.35,0l20.39,20.66H99.35Zm2.59,6.29V18.07h11.62Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-9"
            d="M216.51,0,236.9,20.66H216.51Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-16"
            d="M79.83,0l20.38,20.66H79.83Zm2.58,6.29V18.07H94Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-10"
            d="M197,0l20.38,20.66H197Zm2.58,6.29V18.07H211.2Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-17"
            d="M60.3,0,80.69,20.66H60.3Zm2.58,6.29V18.07H74.51Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-11"
            d="M177.46,0l20.39,20.66H177.46ZM180,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-18"
            d="M40.77,0,61.16,20.66H40.77Zm2.59,6.29V18.07H55Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-12"
            d="M157.93,0l20.39,20.66H157.93Zm2.58,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-19"
            d="M21.25,0,41.64,20.66H21.25Zm2.58,6.29V18.07H35.46Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-13"
            d="M138.41,0l20.38,20.66H138.41ZM141,6.29V18.07h11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-20"
            d="M1.72,0,22.11,20.66H1.72ZM4.3,6.29V18.07H15.93Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
        </g>
      </g>
      <g id="Top-trail-Copy">
        <rect
          id="Rectangle-5"
          data-name="Rectangle"
          x="349.05"
          y="58.52"
          width="1.72"
          height="219.47"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <rect
          id="Rectangle-Copy-28-2"
          data-name="Rectangle-Copy-28"
          x="329.25"
          y="58.52"
          width="3.44"
          height="219.47"
          fill="#d3ddfc"
          fillOpacity="0.4"
        />
        <g id="Tri-2" data-name="Tri">
          <path
            id="Triangle-2"
            data-name="Triangle"
            d="M350.77,254.22l-20.66,20.39V254.22Zm-6.29,2.59H332.7v11.62Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy"
            d="M350.77,234.7l-20.66,20.38V234.7Zm-6.29,2.58H332.7v11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-2"
            d="M350.77,215.17l-20.66,20.39V215.17Zm-6.29,2.58H332.7v11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-5-2"
            data-name="Triangle-Copy-5"
            d="M350.77,195.64,330.11,216V195.64Zm-6.29,2.59H332.7v11.62Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-6-2"
            data-name="Triangle-Copy-6"
            d="M350.77,176.12,330.11,196.5V176.12Zm-6.29,2.58H332.7v11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-7-2"
            data-name="Triangle-Copy-7"
            d="M350.77,156.59,330.11,177V156.59Zm-6.29,2.58H332.7V170.8Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-8-2"
            data-name="Triangle-Copy-8"
            d="M350.77,137.06l-20.66,20.39V137.06Zm-6.29,2.59H332.7v11.62Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-9-2"
            data-name="Triangle-Copy-9"
            d="M350.77,117.54l-20.66,20.39V117.54Zm-6.29,2.58H332.7v11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-10-2"
            data-name="Triangle-Copy-10"
            d="M350.77,98,330.11,118.4V98Zm-6.29,2.58H332.7v11.63Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-11-2"
            data-name="Triangle-Copy-11"
            d="M350.77,78.48,330.11,98.87V78.48Zm-6.29,2.59H332.7V92.7Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
          <path
            id="Triangle-Copy-12-2"
            data-name="Triangle-Copy-12"
            d="M350.77,59,330.11,79.35V59Zm-6.29,2.58H332.7V73.17Z"
            fill="#d3ddfc"
            fillOpacity="0.4"
          />
        </g>
      </g>
    </svg>
  );
}

export default App;

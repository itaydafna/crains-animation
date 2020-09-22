import React from 'react';
import './App.css';

import Defs from './Defs';

import AnalyticsCarinBase from './AnalyticsCrainBase';
import AnalyticsCrainFirstPivot from './AnalyticsCrainFirstPivot';
import AnalyticsCrainSecondPivot from './AnalyticsCrainSecondPivot';

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
        <AnalyticsCarinBase />
        <AnalyticsCrainFirstPivot
          animate={{
            // rotate: [0, 45, 0],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            loop: Infinity,
          }}
        >
          <AnalyticsCrainSecondPivot
            animate={{
              rotate: [0, -60, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          />
        </AnalyticsCrainFirstPivot>
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

import React from 'react';
import './App.css';

import Defs from './Defs';

import SideRail from './SideRail';
import TopRail from './TopRail';

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
              // rotate: [0, -60, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          />
        </AnalyticsCrainFirstPivot>
      </g>
      <TopRail />
      <SideRail />
    </svg>
  );
}

export default App;

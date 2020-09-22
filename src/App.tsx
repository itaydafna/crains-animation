import React from 'react';
import './App.css';

import Defs from './Defs';

import SideRail from './SideRail';
import TopRail from './TopRail';

import AnalyticsCrain from './AnalyticsCrain';
import AnalyticsCarinBase from './AnalyticsCrainBase';
import AnalyticsCrainFirstPivot from './AnalyticsCrainFirstPivot';
import AnalyticsCrainSecondPivot from './AnalyticsCrainSecondPivot';
import AnalyticsCrainThirdPivot from './AnalyticsCrainThirdPivot';

import EmailCrain from './EmailCrain';
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
      <EmailCrain
        animate={{
          y: [-60, 70],
        }}
        transition={{
          duration: 4.5,
          ease: 'easeOut',
          yoyo: Infinity,


        }}
      >
        <EmailCrainBase />
        <EmailCrainFirstPivot
          animate={{
            rotate: [40, -30],
          }}
          transition={{
            duration: 4.5,
            ease: 'easeInOut',
            yoyo: Infinity,

          }}
        >
          <EmailCrainSecondPivot
            animate={{
              rotate: [-40, 35],
            }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              yoyo: Infinity,

            }}
          >
            <Envelope />
          </EmailCrainSecondPivot>
        </EmailCrainFirstPivot>
      </EmailCrain>


      <AnalyticsCrain
        animate={{
          x: [-5, 180],
        }}
        transition={{
          duration: 4.5,
          ease: 'easeInOut',
          yoyo: Infinity,

        }}
      >
        <AnalyticsCarinBase />
        <AnalyticsCrainFirstPivot
          animate={{
            rotate: [0, 45],
          }}
          transition={{
            duration: 4.5,
            ease: 'easeOut',
            yoyo: Infinity,

          }}
        >
          <AnalyticsCrainSecondPivot
            animate={{
              rotate: [0, -60],
            }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              yoyo: Infinity,

            }}
          >
            <AnalyticsCrainThirdPivot
              animate={{
                rotate: [0, 50],
              }}
              transition={{
                duration: 4.5,
                ease: 'easeInOut',
                yoyo: Infinity,

              }}
            />
          </AnalyticsCrainSecondPivot>
        </AnalyticsCrainFirstPivot>
      </AnalyticsCrain>
      <TopRail />
      <SideRail />
    </svg>
  );
}

export default App;

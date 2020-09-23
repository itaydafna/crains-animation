import React from 'react';

import Defs from './layers/Defs';

import SideRail from './layers/SideRail';
import TopRail from './layers/TopRail';

import AnalyticsCarinBase from './layers/AnalyticsCrainBase';
import AnalyticsCrainFirstPivot from './layers/AnalyticsCrainFirstPivot';
import AnalyticsCrainSecondPivot from './layers/AnalyticsCrainSecondPivot';
import AnalyticsCrainThirdPivot from './layers/AnalyticsCrainThirdPivot';

import EmailCrainBase from './layers/EmailCrainBase';
import EmailCrainFirstPivot from './layers/EmailCrainFirstPivot';
import EmailCrainSecondPivot from './layers/EmailCrainSecondPivot';
import Envelope from './layers/Envelope';

import AnimatedLayer from './common/AnimatedLayer';


const ProcessingMCAnimation = ()=>(
  <svg
    id="processing-mc"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="350.77"
    height="277.99"
    viewBox="0 0 350.77 277.99"
  >
    <Defs />

    <AnimatedLayer
      id="email-crain"
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
      <AnimatedLayer
        id="email-crain-first-pivot"
        layer={EmailCrainFirstPivot}
        transformOrigin="78% 56%"
        animate={{
          rotate: [40, -30],
        }}
        transition={{
          duration: 4.5,
          ease: 'easeInOut',
          yoyo: Infinity,

        }}
      >
        <AnimatedLayer
          id="email-crain-second-pivot"
          layer={EmailCrainSecondPivot}
          transformOrigin="73.4% 67.1%"
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
        </AnimatedLayer>
      </AnimatedLayer>
    </AnimatedLayer>


    <AnimatedLayer
      id="analytics-crain"
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
      <AnimatedLayer
        id="analytics-crain-first-pivot"
        layer={AnalyticsCrainFirstPivot}
        transformOrigin="24.8% 28.6%"
        animate={{
          rotate: [0, 45],
        }}
        transition={{
          duration: 4.5,
          ease: 'easeOut',
          yoyo: Infinity,

        }}
      >
        <AnimatedLayer
          id="analytics-crain-second-pivot"
          layer={AnalyticsCrainSecondPivot}
          transformOrigin="16.99% 38.56%"
          animate={{
            rotate: [0, -60],
          }}
          transition={{
            duration: 4.5,
            ease: 'easeInOut',
            yoyo: Infinity,

          }}
        >
          <AnimatedLayer
            id="analytics-crain-third-pivot"
            layer={AnalyticsCrainThirdPivot}
            transformOrigin="24.2% 45.9%"
            animate={{
              rotate: [0, 50],
            }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              yoyo: Infinity,

            }}
          />
        </AnimatedLayer>
      </AnimatedLayer>
    </AnimatedLayer>
    <TopRail />
    <SideRail />
  </svg>
);


export default ProcessingMCAnimation;
import React from 'react';

import Defs from './layers/Defs';

import SideRail from './layers/SideRail';
import TopRail from './layers/TopRail';

import AnalyticsCrain from './layers/AnalyticsCrain';
import AnalyticsCarinBase from './layers/AnalyticsCrainBase';
import AnalyticsCrainFirstPivot from './layers/AnalyticsCrainFirstPivot';
import AnalyticsCrainSecondPivot from './layers/AnalyticsCrainSecondPivot';
import AnalyticsCrainThirdPivot from './layers/AnalyticsCrainThirdPivot';

import EmailCrain from './layers/EmailCrain';
import EmailCrainBase from './layers/EmailCrainBase';
import EmailCrainFirstPivot from './layers/EmailCrainFirstPivot';
import EmailCrainSecondPivot from './layers/EmailCrainSecondPivot';
import Envelope from './layers/Envelope';

import AnimatedLayerWrapper from './common/AnimatedLayerWrapper';


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


export default ProcessingMCAnimation;
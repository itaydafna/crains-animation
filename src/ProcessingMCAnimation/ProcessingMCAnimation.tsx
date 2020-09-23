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

    <AnimatedLayerWrapper
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
      <AnimatedLayerWrapper
        id="email-crain-first-pivot"
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
        <EmailCrainFirstPivot>
          <AnimatedLayerWrapper
            id="email-crain-second-pivot"
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
            <EmailCrainSecondPivot>
              <Envelope />
            </EmailCrainSecondPivot>
          </AnimatedLayerWrapper>
        </EmailCrainFirstPivot>
      </AnimatedLayerWrapper>
    </AnimatedLayerWrapper>


    <AnimatedLayerWrapper
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
      <AnimatedLayerWrapper
        id="analytics-crain-first-pivot"
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
        <AnalyticsCrainFirstPivot>
          <AnimatedLayerWrapper
            id="analytics-crain-second-pivot"
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
            <AnalyticsCrainSecondPivot>
              <AnimatedLayerWrapper
                id="analytics-crain-third-pivot"
                transformOrigin="24.2% 45.9%"
                animate={{
                  rotate: [0, 50],
                }}
                transition={{
                  duration: 4.5,
                  ease: 'easeInOut',
                  yoyo: Infinity,

                }}
              >
                <AnalyticsCrainThirdPivot />
              </AnimatedLayerWrapper>
            </AnalyticsCrainSecondPivot>
          </AnimatedLayerWrapper>
        </AnalyticsCrainFirstPivot>
      </AnimatedLayerWrapper>
    </AnimatedLayerWrapper>
    <TopRail />
    <SideRail />
  </svg>
);


export default ProcessingMCAnimation;
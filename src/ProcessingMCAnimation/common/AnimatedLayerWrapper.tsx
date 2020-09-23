import React, { ReactNode, ReactComponentElement } from 'react';
import styled from 'styled-components';
import { AnimationProps, motion, Transition } from 'framer-motion';


interface Props {
  id: string,
  animate: AnimationProps['animate'],
  transition: Transition,
  transformOrigin?: string,
  children?: ReactNode,
}

const AnimatedLayerWrapper = ({ animate,
  transition,
  transformOrigin,
  children }: Props)=> (
    <Container animate={animate} transition={transition} transformOrigin={transformOrigin}>
      {children}
    </Container>);

  


const Container = styled(motion.g)<{transformOrigin?: string }>`
  ${({ transformOrigin })=> transformOrigin && `transform-origin: ${transformOrigin} !important;`} 
`;


export default AnimatedLayerWrapper;
import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { AnimationProps, motion, Transition } from 'framer-motion';


interface Props {
  id: string,
  animate: AnimationProps['animate'],
  transition: Transition,
  transformOrigin?: string,
  layer?: FC,
  children?: ReactNode,
}

const GhostWrapper: FC = ({ children })=> <>{children}</>;

const AnimatedLayer = ({ id, animate,
  transition,
  transformOrigin,
  layer,
  children }: Props)=> {

  const Layer = layer || GhostWrapper;

  return (
    <Container id={id} animate={animate} transition={transition} transformOrigin={transformOrigin}>
      <Layer>
        {children}
      </Layer>
    </Container>);
};

AnimatedLayer.defaultProps = {
  transformOrigin: '0% 0%',
  layer: GhostWrapper,
  children: null
};

  


const Container = styled(motion.g)<{transformOrigin?: string }>`
  ${({ transformOrigin })=> transformOrigin && `transform-origin: ${transformOrigin} !important;`} 
`;


export default AnimatedLayer;
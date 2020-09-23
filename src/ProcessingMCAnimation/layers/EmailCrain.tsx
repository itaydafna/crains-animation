import React, { ReactNode } from 'react';
import { motion, AnimationProps, Transition } from 'framer-motion';

interface Props {
  animate?: AnimationProps['animate'],
  transition?: Transition,
  children?: ReactNode
}

const EmailCrain = ({ animate, transition, children = null }: Props)=>(
  <motion.g
    id="email-crain"
    animate={animate}
    transition={transition}
  >
    {children}
  </motion.g>
);



export default EmailCrain;
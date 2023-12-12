'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface Props extends PropsWithChildren {
  timeout: number;
  becomeHiddenInstead?: boolean;
}

/**
 * An WaitForToShowUpChildren React Component.
 * @author Jane Will
 * @version 0.1
 */
export const WaitForToShowUpChildren: React.FC<Props> = ({
  children,
  timeout,
  becomeHiddenInstead,
}) => {
  const [show, setShow] = useState(becomeHiddenInstead ? true : false);

  useEffect(() => {
    window.setTimeout(() => {
      setShow(becomeHiddenInstead ? false : true);
    }, timeout);
  }, [timeout, becomeHiddenInstead]);

  return show ? children : undefined;
};

WaitForToShowUpChildren.defaultProps = { becomeHiddenInstead: false };

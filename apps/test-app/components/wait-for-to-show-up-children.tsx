'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface Props extends PropsWithChildren {
  timeout: number;
}

/**
 * An WaitForToShowUpChildren React Component.
 * @author Jane Will
 * @version 0.1
 */
export const WaitForToShowUpChildren: React.FC<Props> = ({
  children,
  timeout,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setShow(true);
    }, timeout);
  }, [timeout]);

  return show ? children : undefined;
};

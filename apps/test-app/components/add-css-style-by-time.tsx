'use client';
import React, { useEffect, useState } from 'react';

export interface Props {
  style: { key: keyof CSSStyleDeclaration; value: string | null };
  timeout: number;
  'data-testid': string;
}

/**
 * An AddCSSStyleByTime React Component.
 * @author Jane Will
 * @version 0.1
 */
export const AddCSSStyleByTime: React.FC<Props> = ({
  style: { key, value },
  timeout,
  'data-testid': dataTestId,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setShow(true);
    }, timeout);
  }, [timeout]);

  return (
    <div data-testid={dataTestId} style={{ [key]: show ? value : undefined }}>
      <span>Test3421</span>
    </div>
  );
};

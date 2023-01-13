import * as React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

export interface ScrollToExampleProps {}

export function ScrollToExample(props: ScrollToExampleProps): JSX.Element {
  const scrollTo = useScrollTo();
  return (
    <div style={{ border: 'solid 2px #67788a', padding: '20px' }}>
      <button onClick={() => scrollTo(500, 0)}>Hard Scroll To (500, 0)</button>{' '}
      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Smooth Scroll To Top (0, 0)</button>
    </div>
  );
}

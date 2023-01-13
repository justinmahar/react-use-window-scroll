import * as React from 'react';
import { useScrollBy } from '../hooks/useScrollBy';

export interface ScrollByExampleProps {}

export function ScrollByExample(props: ScrollByExampleProps): JSX.Element {
  const scrollBy = useScrollBy();
  return (
    <div style={{ border: 'solid 2px #67788a', padding: '20px' }}>
      <button onClick={() => scrollBy(200, 0)}>Hard Scroll Down By 200</button>
      <button onClick={() => scrollBy({ top: 200, left: 0, behavior: 'smooth' })}>
        Smooth Scroll Down By 200
      </button>{' '}
      {[...Array(10).keys()].map((_, i) => (
        <p key={`lorem-${i}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      ))}
      <button onClick={() => scrollBy(-200, 0)}>Hard Scroll Up By 200</button>
      <button onClick={() => scrollBy({ top: -200, left: 0, behavior: 'smooth' })}>Smooth Scroll Up By 200</button>{' '}
    </div>
  );
}

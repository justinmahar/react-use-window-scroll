import React from 'react';
import { useScrollBy } from '../hooks/useScrollBy';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
const title = 'useScrollBy Hook';
export default {
  title: title,
};

const paragraphCount = 3;
const paragraphs = Array(paragraphCount)
  .fill(paragraphCount)
  .map(i => {
    return (
      <p key={`p${Math.random()}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum tortor id eros dignissim vulputate.
        Morbi orci sapien, suscipit ac massa sed, interdum tempus ante. Aliquam tincidunt turpis id arcu blandit, eu
        euismod erat pulvinar. Praesent sed urna a ligula sagittis malesuada. Phasellus dapibus fringilla ligula. Etiam
        augue nulla, bibendum vitae luctus quis, aliquam ac sapien. Cras condimentum ac ex a dignissim. Sed lectus est,
        euismod sed laoreet vitae, euismod vitae mauris. Phasellus malesuada sem dolor, vitae facilisis tortor vulputate
        a. Duis posuere vitae augue quis molestie. Cras at orci eu nulla porttitor sagittis sed vel ante.
      </p>
    );
  });

const lotsOfText = <div>{paragraphs}</div>;

// The named exports define the stories

// Needed to wrap the hook and give it visual representation.
const ScrollHookComponent = () => {
  const scrollBy = useScrollBy();

  const scrollButtons = (
    <div style={{ border: 'solid 1px #cccccc', padding: '10px' }}>
      <div>
        <h4>scrollBy using number args:</h4>
        <button onClick={() => scrollBy(0, 0)}>0, 0</button>{' '}
        <button onClick={() => scrollBy(200, 200)}>200, 200</button>{' '}
        <button onClick={() => scrollBy(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)}>Max safe integer</button>{' '}
        <button onClick={() => scrollBy(-200, -200)}>-200, -200</button>{' '}
        <button onClick={() => scrollBy(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)}>Min safe integer</button>
      </div>
      <div>
        <h4>scrollBy using options arg:</h4>
        <button onClick={() => scrollBy({ top: 0, left: 0 })}>0, 0</button>{' '}
        <button onClick={() => scrollBy({ top: 200, left: 200 })}>200, 200</button>{' '}
        <button onClick={() => scrollBy({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER })}>
          Max safe integer
        </button>{' '}
        <button onClick={() => scrollBy({ top: -200, left: -200 })}>-200, -200</button>{' '}
        <button onClick={() => scrollBy({ top: Number.MIN_SAFE_INTEGER, left: Number.MIN_SAFE_INTEGER })}>
          Min safe integer
        </button>
      </div>
      <div>
        <h4>scrollBy using smooth behavior:</h4>
        <button onClick={() => scrollBy({ top: 0, left: 0, behavior: 'smooth' })}>0, 0</button>{' '}
        <button onClick={() => scrollBy({ top: 200, left: 200, behavior: 'smooth' })}>200, 200</button>{' '}
        <button
          onClick={() => scrollBy({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER, behavior: 'smooth' })}
        >
          Max safe integer
        </button>{' '}
        <button onClick={() => scrollBy({ top: -200, left: -200, behavior: 'smooth' })}>-200, -200</button>{' '}
        <button
          onClick={() => scrollBy({ top: Number.MIN_SAFE_INTEGER, left: Number.MIN_SAFE_INTEGER, behavior: 'smooth' })}
        >
          Min safe integer
        </button>
      </div>
    </div>
  );

  return (
    <>
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
    </>
  );
};

export const SScrollByStory = () => <ScrollHookComponent />;
SScrollByStory.story = {
  name: 'Hook Visual',
};

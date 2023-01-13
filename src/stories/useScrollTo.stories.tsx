import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
const title = 'Stories/useScrollTo';
export default {
  title: title,
};

const paragraphCount = 20;
const paragraphs = Array(paragraphCount)
  .fill(paragraphCount)
  .map((i) => {
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
  const scrollTo = useScrollTo();

  // Scroll on first render
  React.useEffect(() => {
    scrollTo(0, 0);
  }, [scrollTo]);

  const scrollButtons = (
    <div style={{ border: 'solid 1px #cccccc', padding: '10px' }}>
      <div>
        <h4>scrollTo using number args:</h4>
        <button onClick={() => scrollTo(0, 0)}>0, 0</button>{' '}
        <button onClick={() => scrollTo(200, 200)}>200, 200</button>{' '}
        <button onClick={() => scrollTo(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)}>max safe integer</button>
      </div>
      <div>
        <h4>scrollTo using options arg:</h4>
        <button onClick={() => scrollTo({ top: 0, left: 0 })}>0, 0</button>{' '}
        <button onClick={() => scrollTo({ top: 200, left: 200 })}>200, 200</button>{' '}
        <button onClick={() => scrollTo({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER })}>
          max safe integer
        </button>
      </div>
      <div>
        <h4>scrollTo using smooth behavior:</h4>
        <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>0, 0</button>{' '}
        <button onClick={() => scrollTo({ top: 200, left: 200, behavior: 'smooth' })}>200, 200</button>{' '}
        <button
          onClick={() => scrollTo({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER, behavior: 'smooth' })}
        >
          max safe integer
        </button>
      </div>
    </div>
  );

  return (
    <>
      {scrollButtons}
      {lotsOfText}
      {scrollButtons}
    </>
  );
};

export const ScrollToStory = () => <ScrollHookComponent />;
ScrollToStory.story = {
  name: 'Hook Visual',
};

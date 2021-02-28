import * as React from "react";
import smoothscroll from "smoothscroll-polyfill";

/**
 * See documentation: [useScrollBy](https://justinmahar.github.io/react-use-window-scroll/useScrollBy)
 *
 * This hook scrolls the page by the specified vertical and horizontal amount by using the Window Web API's Window.scrollBy function.
 * Smooth scrolling behavior (native to the browser) is supported by providing ScrollToOptions.
 *
 * @param options You can optionally provide the hook with `{ polyfillDisabled: true }` to disable the polyfill for browsers that don't natively support smooth scrolling. The polyfill is enabled by default and only patches browsers that lack support.
 *
 * @returns The hook returns an overloaded function that can take either a ScrollToOptions, or top and left, for scrolling the page by the provided amount. Use the ScrollToOptions signature if you'd like to use smooth scrolling.
 */
export function useScrollBy(
  options: { polyfillDisabled?: boolean } = {}
): ScrollBy {
  const [scrollToOptions, setScrollToOptions] = React.useState<ScrollToOptions>(
    {}
  );
  const [shouldScroll, setShouldScroll] = React.useState(false);

  React.useEffect(() => {
    if (shouldScroll && !!window) {
      setShouldScroll(false);
      const scrollToOptionsToUse = {
        ...scrollToOptions,
        top: scrollToOptions.top ? scrollToOptions.top : 0,
        left: scrollToOptions.left ? scrollToOptions.left : 0,
      };
      if (window.scrollBy) {
        if (
          !options.polyfillDisabled &&
          !!scrollToOptionsToUse.behavior &&
          scrollToOptionsToUse.behavior === "smooth"
        ) {
          try {
            // Detect if the smooth scroll behavior is natively supported and take action only when necessary
            smoothscroll.polyfill();
          } catch (e) {
            console.error(e);
          }
        }
        window.scrollBy(scrollToOptionsToUse);
      }
    }
  }, [shouldScroll, scrollToOptions, options.polyfillDisabled]);

  const scrollBy: ScrollBy = (
    scrollToOptionsOrTop: ScrollToOptions | number = { top: 0, left: 0 },
    left: number | undefined = undefined
  ): void => {
    if (typeof scrollToOptionsOrTop === "number" && typeof left === "number") {
      const top = scrollToOptionsOrTop;
      setScrollToOptions({
        top: top,
        left: left,
      });
      setShouldScroll(true);
    } else if (typeof scrollToOptionsOrTop !== "number") {
      setScrollToOptions(scrollToOptionsOrTop);
      setShouldScroll(true);
    } else {
      console.error("Invalid scroll param(s):", scrollToOptionsOrTop, left);
    }
  };

  return scrollBy;
}

export type ScrollBy = (
  scrollToOptionsOrTop?: ScrollToOptions | number,
  left?: number
) => void;

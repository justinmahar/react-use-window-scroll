/**
 * See documentation: [useScrollTo](https://justinmahar.github.io/react-use-window-scroll/useScrollTo)
 *
 * This hook scrolls the page to the specified page coordinates using the Window Web API's Window.scrollTo function. Smooth scrolling behavior (native to the browser) is supported by providing ScrollToOptions.
 *
 * @param options You can optionally provide the hook with `{ polyfillDisabled: true }` to disable the polyfill for browsers that don't natively support smooth scrolling. The polyfill is enabled by default and only patches browsers that lack support.
 *
 * @returns The hook returns an overloaded function that can take either a ScrollToOptions, or top and left, for scrolling the page to the provided page coordinates. Use the ScrollToOptions signature if you'd like to use smooth scrolling.
 */
export declare function useScrollTo(options?: {
    polyfillDisabled?: boolean;
}): ScrollTo;
export declare type ScrollTo = (scrollToOptionsOrTop?: ScrollToOptions | number, left?: number) => void;

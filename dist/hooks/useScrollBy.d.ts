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
export declare function useScrollBy(options?: {
    polyfillDisabled?: boolean;
}): ScrollBy;
export declare type ScrollBy = (scrollToOptionsOrTop?: ScrollToOptions | number, left?: number) => void;

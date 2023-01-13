"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollTo = void 0;
const React = __importStar(require("react"));
const smoothscroll_polyfill_1 = __importDefault(require("smoothscroll-polyfill"));
/**
 * See documentation: [useScrollTo](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page)
 *
 * This hook scrolls the page to the specified page coordinates using the Window Web API's Window.scrollTo function. Smooth scrolling behavior (native to the browser) is supported by providing ScrollToOptions.
 *
 * @param options You can optionally provide the hook with `{ polyfillDisabled: true }` to disable the polyfill for browsers that don't natively support smooth scrolling. The polyfill is enabled by default and only patches browsers that lack support.
 *
 * @returns The hook returns an overloaded function that can take either a ScrollToOptions, or top and left, for scrolling the page to the provided page coordinates. Use the ScrollToOptions signature if you'd like to use smooth scrolling.
 */
function useScrollTo(options = {}) {
    const [scrollToOptions, setScrollToOptions] = React.useState({});
    const [shouldScroll, setShouldScroll] = React.useState(false);
    React.useEffect(() => {
        if (shouldScroll && typeof window !== 'undefined') {
            setShouldScroll(false);
            const scrollToOptionsToUse = Object.assign(Object.assign({}, scrollToOptions), { top: scrollToOptions.top ? scrollToOptions.top : 0, left: scrollToOptions.left ? scrollToOptions.left : 0 });
            if (!options.polyfillDisabled && !!scrollToOptionsToUse.behavior && scrollToOptionsToUse.behavior === 'smooth') {
                try {
                    // Detect if the smooth scroll behavior is natively supported and take action only when necessary
                    smoothscroll_polyfill_1.default.polyfill();
                }
                catch (e) {
                    console.error(e);
                }
            }
            if (!!scrollToOptions && window.scroll) {
                window.scroll(scrollToOptionsToUse);
            }
            else if (window.scrollTo) {
                window.scrollTo(scrollToOptionsToUse);
            }
        }
    }, [shouldScroll, scrollToOptions, options.polyfillDisabled]);
    const scrollTo = React.useCallback((scrollToOptionsOrTop = { top: 0, left: 0 }, left = undefined) => {
        if (typeof scrollToOptionsOrTop === 'number' && typeof left === 'number') {
            const top = scrollToOptionsOrTop;
            setScrollToOptions({
                top: top,
                left: left,
            });
            setShouldScroll(true);
        }
        else if (typeof scrollToOptionsOrTop !== 'number') {
            setScrollToOptions(scrollToOptionsOrTop);
            setShouldScroll(true);
        }
        else {
            console.error('Invalid scroll param(s):', scrollToOptionsOrTop, left);
        }
    }, []);
    return scrollTo;
}
exports.useScrollTo = useScrollTo;

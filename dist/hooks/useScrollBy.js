"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollBy = void 0;
var React = __importStar(require("react"));
var smoothscroll_polyfill_1 = __importDefault(require("smoothscroll-polyfill"));
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
function useScrollBy(options) {
    if (options === void 0) { options = {}; }
    var _a = React.useState({}), scrollToOptions = _a[0], setScrollToOptions = _a[1];
    var _b = React.useState(false), shouldScroll = _b[0], setShouldScroll = _b[1];
    React.useEffect(function () {
        if (shouldScroll && !!window) {
            setShouldScroll(false);
            var scrollToOptionsToUse = __assign(__assign({}, scrollToOptions), { top: scrollToOptions.top ? scrollToOptions.top : 0, left: scrollToOptions.left ? scrollToOptions.left : 0 });
            if (window.scrollBy) {
                if (!options.polyfillDisabled &&
                    !!scrollToOptionsToUse.behavior &&
                    scrollToOptionsToUse.behavior === 'smooth') {
                    try {
                        // Detect if the smooth scroll behavior is natively supported and take action only when necessary
                        smoothscroll_polyfill_1.default.polyfill();
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                window.scrollBy(scrollToOptionsToUse);
            }
        }
    }, [shouldScroll, scrollToOptions, options.polyfillDisabled]);
    var scrollBy = function (scrollToOptionsOrTop, left) {
        if (scrollToOptionsOrTop === void 0) { scrollToOptionsOrTop = { top: 0, left: 0 }; }
        if (left === void 0) { left = undefined; }
        if (typeof scrollToOptionsOrTop === 'number' && typeof left === 'number') {
            var top_1 = scrollToOptionsOrTop;
            setScrollToOptions({
                top: top_1,
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
    };
    return scrollBy;
}
exports.useScrollBy = useScrollBy;

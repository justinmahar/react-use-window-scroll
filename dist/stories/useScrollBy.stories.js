"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SScrollByStory = void 0;
const react_1 = __importDefault(require("react"));
const useScrollBy_1 = require("../hooks/useScrollBy");
// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.
// The default export defines metadata that applies to the group.
const title = 'Stories/useScrollBy';
exports.default = {
    title: title,
};
const paragraphCount = 3;
const paragraphs = Array(paragraphCount)
    .fill(paragraphCount)
    .map((i) => {
    return (react_1.default.createElement("p", { key: `p${Math.random()}` }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum tortor id eros dignissim vulputate. Morbi orci sapien, suscipit ac massa sed, interdum tempus ante. Aliquam tincidunt turpis id arcu blandit, eu euismod erat pulvinar. Praesent sed urna a ligula sagittis malesuada. Phasellus dapibus fringilla ligula. Etiam augue nulla, bibendum vitae luctus quis, aliquam ac sapien. Cras condimentum ac ex a dignissim. Sed lectus est, euismod sed laoreet vitae, euismod vitae mauris. Phasellus malesuada sem dolor, vitae facilisis tortor vulputate a. Duis posuere vitae augue quis molestie. Cras at orci eu nulla porttitor sagittis sed vel ante."));
});
const lotsOfText = react_1.default.createElement("div", null, paragraphs);
// The named exports define the stories
// Needed to wrap the hook and give it visual representation.
const ScrollHookComponent = () => {
    const scrollBy = (0, useScrollBy_1.useScrollBy)();
    const scrollButtons = (react_1.default.createElement("div", { style: { border: 'solid 1px #cccccc', padding: '10px' } },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h4", null, "scrollBy using number args:"),
            react_1.default.createElement("button", { onClick: () => scrollBy(0, 0) }, "0, 0"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy(200, 200) }, "200, 200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) }, "Max safe integer"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy(-200, -200) }, "-200, -200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER) }, "Min safe integer")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h4", null, "scrollBy using options arg:"),
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: 0, left: 0 }) }, "0, 0"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: 200, left: 200 }) }, "200, 200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER }) }, "Max safe integer"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: -200, left: -200 }) }, "-200, -200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: Number.MIN_SAFE_INTEGER, left: Number.MIN_SAFE_INTEGER }) }, "Min safe integer")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h4", null, "scrollBy using smooth behavior:"),
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: 0, left: 0, behavior: 'smooth' }) }, "0, 0"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: 200, left: 200, behavior: 'smooth' }) }, "200, 200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: Number.MAX_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER, behavior: 'smooth' }) }, "Max safe integer"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: -200, left: -200, behavior: 'smooth' }) }, "-200, -200"),
            ' ',
            react_1.default.createElement("button", { onClick: () => scrollBy({ top: Number.MIN_SAFE_INTEGER, left: Number.MIN_SAFE_INTEGER, behavior: 'smooth' }) }, "Min safe integer"))));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        scrollButtons,
        lotsOfText,
        scrollButtons,
        lotsOfText,
        scrollButtons,
        lotsOfText,
        scrollButtons,
        lotsOfText,
        scrollButtons,
        lotsOfText,
        scrollButtons));
};
const SScrollByStory = () => react_1.default.createElement(ScrollHookComponent, null);
exports.SScrollByStory = SScrollByStory;
exports.SScrollByStory.story = {
    name: 'Hook Visual',
};

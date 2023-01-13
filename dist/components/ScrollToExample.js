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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToExample = void 0;
const React = __importStar(require("react"));
const useScrollTo_1 = require("../hooks/useScrollTo");
function ScrollToExample(props) {
    const scrollTo = (0, useScrollTo_1.useScrollTo)();
    return (React.createElement("div", { style: { border: 'solid 2px #67788a', padding: '20px' } },
        React.createElement("button", { onClick: () => scrollTo(500, 0) }, "Hard Scroll To (500, 0)"),
        ' ',
        React.createElement("button", { onClick: () => scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }, "Smooth Scroll To Top (0, 0)")));
}
exports.ScrollToExample = ScrollToExample;

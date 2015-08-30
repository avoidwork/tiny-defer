(function (global) {
const server = typeof process !== "undefined" && typeof process.nextTick === "function";
const Promise = !server && global.Promise ? global.Promise : require("es6-promise").Promise;

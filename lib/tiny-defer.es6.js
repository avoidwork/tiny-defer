/**
 * Tiny Deferred for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-defer
 * @version 1.0.3
 */
(function (global) {
const Promise = global.Promise || require("es6-promise").Promise;

function deferred () {
	let promise, resolver, rejecter;

	promise = new Promise(function (resolve, reject) {
		resolver = resolve;
		rejecter = reject;
	});

	return {resolve: resolver, reject: rejecter, promise: promise};
}

// Node, AMD & window supported
if (typeof exports !== "undefined") {
	module.exports = deferred;
} else if (typeof define === "function") {
	define(function () {
		return deferred;
	});
} else {
	global.deferred = deferred;
}
}(typeof global !== "undefined" ? global : window));

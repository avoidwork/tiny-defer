/**
 * Tiny Deferred for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2016 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-defer
 * @version 2.0.0
 */
(function (global) {
const Promise = global.Promise;

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
}(typeof window !== "undefined" ? window : global));

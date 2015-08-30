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

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

var deferred = require("../lib/tiny-defer.js");

exports["resolve"] = {
	setUp: function (done) {
		this.deferred = deferred();
		done();
	},
	test: function (test) {
		test.expect(1);
		this.deferred.promise.then(function (arg) {
			test.equal(arg, true, "Should be 'true'");
			test.done();
		});
		this.deferred.resolve(true);
	}
};

exports["reject"] = {
	setUp: function (done) {
		this.deferred = deferred();
		done();
	},
	test: function (test) {
		test.expect(1);
		this.deferred.promise.then(null, function (arg) {
			test.equal(arg, false, "Should be 'false'");
			test.done();
		});
		this.deferred.reject(false);
	}
};

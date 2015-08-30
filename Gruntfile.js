module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat: {
			options : {
				banner : "/**\n" +
				         " * <%= pkg.description %>\n" +
				         " *\n" +
				         " * @author <%= pkg.author %>\n" +
				         " * @copyright <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n" +
				         " * @license <%= pkg.license %>\n" +
				         " * @link <%= pkg.homepage %>\n" +
				         " * @version <%= pkg.version %>\n" +
				         " */\n"
			},
			dist: {
				src : [
					"src/intro.js",
					"src/deferred.js",
					"src/outro.js"
				],
				dest : "lib/<%= pkg.name %>.es6.js"
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					"lib/<%= pkg.name %>.js": "lib/<%= pkg.name %>.es6.js"
				}
			}
		},
		eslint: {
			target: ["lib/<%= pkg.name %>.es6.js"]
		},
		uglify: {
			options: {
				banner: '/* <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
				sourceMap: true,
				sourceMapIncludeSources: true
			},
			target: {
				files: {
					"lib/<%= pkg.name %>.min.js" : ["lib/<%= pkg.name %>.js"]
				}
			}
		},
		watch : {
			js : {
				files : "<%= concat.dist.src %>",
				tasks : "default"
			},
			pkg: {
				files : "package.json",
				tasks : "default"
			}
		}
	});

	// tasks
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-eslint");

	// aliases
	grunt.registerTask("test", ["eslint"]);
	grunt.registerTask("build", ["concat", "babel", "uglify"]);
	grunt.registerTask("default", ["build", "test"]);
};
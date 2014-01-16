/**
 * sails-generate-gruntfile
 *
 * Usage:
 * `sails generate gruntfile`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-gruntfile) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};


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
		'./Gruntfile.js': { template: './Gruntfile.js' },

		'./tasks': { folder: {} },
		'./tasks/config': { folder: {} },
		'./tasks/register': { folder: {} }
	}
};


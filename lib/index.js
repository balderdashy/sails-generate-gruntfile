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

		'./gruntTasks': { folder: {} },
		'./gruntTasks/config': { folder: {} },
		'./gruntTasks/register': { folder: {} }
	}
};


var includeAll = require('include-all')
	, path = require('path');




/**
 * Gruntfile
 *
 * By default, the Gruntfile in new Sails projects comes with a `linker`
 * task, which will automatically inject client-side scripts, styles, and templates
 * from your `assets` folder into specific regions of certain EJS and HTML files
 * specified below.  This behavior is completely optional, but here for convenience.
 *
 * At the top part of this file, you'll find a few of the most commonly
 * configured options, but Sails' integration with Grunt is also fully
 * customizable.  If you'd like to work with your assets differently
 * you can change this file to do anything you like!
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */

module.exports = function(grunt) {


	var TASK_DIR = './tasks';

	// Load Grunt tasks and store them in a big object.
	var tasks = loadTasks(path.resolve(__dirname, TASK_DIR));

	console.log(tasks);

};





/**
 * Load CommonJS submodules from the specified
 * relative path.
 *
 * @return {Object}
 */
function loadTasks(relPath) {
  return includeAll({
    dirname: path.resolve(__dirname, relPath),
    filter: /(.+)\.js$/
  });
}

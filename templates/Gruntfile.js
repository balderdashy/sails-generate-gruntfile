/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt` or `sails lift`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

module.exports = function(grunt) {


	/**
	 * Load CommonJS submodules from the specified
	 * relative path.
	 *
	 * @return {Object}
	 */
	function loadTasks(relPath) {
		return includeAll({
			dirname: require('path').resolve(__dirname, relPath),
			filter: /(.+)\.js$/
		});
	}

	/**
	 * Invokes the config function for the task config and register definitions.
	 * Make sure to pass in grunt.
	 *
	 * @param  {Object} tasks [Grunt object that each task will need]
	 */
	function invokeConfigFn(tasks) {
		for (var taskName in tasks) {
			if (tasks.hasOwnProperty(taskName)) {
				tasks[taskName](grunt);
			}
		}
	}


	// Load the include-all library in order to require all of our grunt
	// configurations and task registrations dynamically.
	var includeAll;
	try {
		includeAll = require('include-all');
	} catch (e) {
		console.error('Grunt:\nCould not find `include-all` module.');
		console.error('Skipping grunt tasks...');
		console.error('To fix this, please run:');
		console.error('npm install include-all --save`');
		console.error();
		return;
	}

	// Load tasks and configure Grunt.
	var taskConfigurations = loadTasks('./tasks/config'),
		registerDefinitions = loadTasks('./tasks/register');
	invokeConfigFn(taskConfigurations);
	invokeConfigFn(registerDefinitions);

};

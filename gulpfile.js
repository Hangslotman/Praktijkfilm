
/**
 * Module Dependencies
 */

var gulp        	= require('gulp');
var browserSync 	= require('browser-sync');
var reload 			= browserSync.reload;
var nodemon 		= require('gulp-nodemon');

/**
* Gulp Tasks
*/

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		files: ['public/**/*.*'],
		browser: ['google chrome'],
		port: 6060,
		notify: true
	});
});

gulp.task('nodemon', function(cb) {
	var called = false;
	return nodemon({
		script: 'server.js',
		watch: ['server.js']

	}).on('start', function onStart() {
		// ensure start only got called once
		if (!called) { 
			called = true;
			cb(); 
		}
	})
	.on('restart', function onRestart() {
		// reload connected browsers after a slight delay
		setTimeout(function () {
			browserSync.reload({stream: false});
		}, 1000);
	});
});




gulp.task('default', ['browser-sync'], function() {
	gulp.watch(['public/*.html'], reload);
});
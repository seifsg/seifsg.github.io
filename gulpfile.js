"use strict";

var gulp = require('gulp');
var pug = require('gulp-pug');
var parcel = require('gulp-parcel');
var browserSync = require('browser-sync').create();
var run = require('gulp-run-command').default;
var log = require('fancy-log');
var errorHandler = require('gulp-error-handle');

/*gulp.task('html', function () {
	return gulp.src('src/templates/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build/html'))
		.pipe(browserSync.reload({
			stream: true
		}));
});*/


gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	});
});

gulp.task('watch', gulp.parallel('browserSync'), function () {
	gulp.watch('dist/**/*',browserSync.reload);
});

gulp.task('default', gulp.series('watch'), function () {
	console.log('Started default');
});
var gulp = require('gulp');
var parcel = require('gulp-parcel');

gulp.task('html', function () {
	return gulp.src('src/templates/*.pug')
		.pipe(parcel())
		.pipe(gulp.dest('.'))
});

gulp.task('default', ['html']);
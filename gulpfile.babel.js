'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import run from 'gulp-run-command';
import log from 'fancy-log';
import errorHandler from 'gulp-error-handle';


const server = browserSync.create();


const paths = {
	parcel: {
		dist: 'dist/*'
	}
};

gulp.task('parcel', run('parcel watch src/templates/index.pug --no-cache'));

const reload = done => {
	server.reload();
	done();
};

const serve = done => {
	server.init({
		server: {
			baseDir: 'dist/'
		}
	});
	done();
};

const watch = done => {
	gulp.watch(paths.parcel.dist, gulp.series(reload));
	done();
};

const dev = gulp.parallel('parcel', serve, watch);
export default dev;
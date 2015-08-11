'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('browser/**/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('browser'));	
});

gulp.task('default', function(){
	gulp.watch('browser/**/**/*.scss', ['sass']);
});
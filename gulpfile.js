var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    clean = require('gulp-clean'),
    del = require('del');

var bases = {
 app: '/',
 dist: 'dist/',
};
 

 //paths
 var paths = {
   scripts: ['./server/api/**/*.js','./server/**/*.js', 
     './public/javascripts/*.js','./browser/**/**/*.js'],
   html:['/browser/**/**/*.html']
 };
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
 gulp.src(paths.scripts, {cwd: bases.app})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(uglify())
 .pipe(concat('app.min.js'))
 .pipe(gulp.dest(bases.dist + 'scripts/'));
})

// A development task to run anytime a file changes
gulp.task('watch', function() {
 gulp.watch(paths.scripts,{cwd:bases.app}, ['scripts']);
});
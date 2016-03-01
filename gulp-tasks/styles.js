
'use strict';
var cleanCSS    = require('gulp-clean-css'),
    gulp        = require('gulp'),
    rename      = require("gulp-rename"),
    sass        = require('gulp-sass');

/*
* Stylesheets
*/

gulp.task("sass", function () {
  return gulp.src("src/main.scss")
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dev/css/'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('dev/css/main.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

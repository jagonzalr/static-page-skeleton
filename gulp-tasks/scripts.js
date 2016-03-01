
'use strict';

var gulp        = require('gulp'),
    rename      = require("gulp-rename"),
    uglify      = require('gulp-uglify')

/*
* Javascript
*/

gulp.task('minify-js', function() {
    return gulp.src('dev/js/main.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

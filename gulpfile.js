/**
 * Created by Radiobeat33 on 12/30/15.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
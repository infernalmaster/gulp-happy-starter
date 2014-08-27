var gulp       = require('gulp');
var coffeelint = require('gulp-coffeelint');
var gulpIf     = require('gulp-if');

gulp.task('coffeelint', function () {
  return gulp.src('src/scripts/**/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(gulpIf(!global.isWatching, coffeelint.reporter('fail')));
});

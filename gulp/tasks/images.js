var changed  = require('gulp-changed');
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpIf   = require('gulp-if');

gulp.task('images', function() {
  var dest = '.tmp/assets';

  return gulp.src('src/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulpIf(global.isWatching, gulp.dest(dest)))  // for development
    .pipe(gulpIf(!global.isWatching, gulp.dest('dist/assets')))   // for dist
});

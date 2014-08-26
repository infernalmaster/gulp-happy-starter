var gulp    = require('gulp');
var gulpIf  = require('gulp-if');
var changed = require('gulp-changed');

gulp.task('fonts', function() {
  var dest = '.tmp/assets';

  return gulp.src('src/fonts/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulpIf(global.isWatching, gulp.dest(dest)))  // for development
    .pipe(gulpIf(!global.isWatching, gulp.dest('dist/assets')))   // for dist
});

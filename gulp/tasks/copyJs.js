var gulp    = require('gulp');
var gulpIf  = require('gulp-if');
var changed = require('gulp-changed');

gulp.task('copyJs', function() {
  var dest = '.tmp/assets';

  return gulp.src(['src/scripts/**/*.js'])
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});

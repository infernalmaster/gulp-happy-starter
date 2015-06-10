var gulp    = require('gulp');
var changed = require('gulp-changed');


gulp.task('copyCssJs', function () {
  var dest = '.tmp/assets';

  return gulp.src(['src/styles/**/*.css', 'src/scripts/**/*.js'])
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});

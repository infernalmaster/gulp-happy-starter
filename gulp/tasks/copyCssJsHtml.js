var gulp    = require('gulp');
var changed = require('gulp-changed');


gulp.task('copyCssJsHtml', function () {
  var dest = '.tmp/assets';

  return gulp.src(['src/sass/**/*.css', 'src/scripts/**/*.js', 'src/templates/**/*.html'])
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});

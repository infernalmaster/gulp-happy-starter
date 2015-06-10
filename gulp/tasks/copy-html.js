var gulp    = require('gulp');
var changed = require('gulp-changed');


gulp.task('copyHtml', function () {
  var dest = '.tmp';

  return gulp.src('src/templates/**/*.html')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});

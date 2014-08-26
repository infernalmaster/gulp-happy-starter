/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/sass/**/*.{scss, sass}', ['sass']);
  gulp.watch('src/sass/**/*.css', ['copyCss']);

  gulp.watch('src/templates/**/*.jade', ['jade']);
  gulp.watch('src/templates/**/*.html', ['copyHtml']);

  gulp.watch('src/scripts/**/*.coffee', ['coffeelint']);
  gulp.watch('src/scripts/**/*.js', ['copyJs']);

  gulp.watch('src/fonts/**', ['fonts']);

  gulp.watch('src/images/**', ['images']);
});

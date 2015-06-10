/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', function(cb) {

  runSequence(['clean'], ['setWatch'], 'browserSync', cb);


  gulp.watch('src/styles/**/*.{scss, sass}', ['sass']);
  gulp.watch('src/styles/**/*.css', ['copyCssJs']);

  gulp.watch('src/templates/**/*.jade', ['jade']);
  gulp.watch('src/templates/**/*.html', ['copyHtml']);

  gulp.watch('src/scripts/**/*.coffee', ['coffeelint']);
  gulp.watch('src/scripts/**/*.js', ['copyCssJs']);

  gulp.watch('src/images/**', ['images']);

  gulp.watch('src/fonts/**', ['copyOther']);
  gulp.watch('src/sounds/**', ['copyOther']);


});

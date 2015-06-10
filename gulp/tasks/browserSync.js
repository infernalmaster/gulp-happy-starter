var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', [
  'browserify', 'coffeelint',
  'copyCssJs', 'copyHtml', 'copyOther',
  'sass', 'images', 'jade'
], function() {
  // watch .tmp and bower dir for changes
  browserSync.init(['.tmp/**', '.bower_components/**'], {
    server: {
      //  '.' for bower_components availability
      baseDir: ['.tmp', '.']
    }
  });
});

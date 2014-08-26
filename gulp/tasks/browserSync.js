var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['browserify', 'coffeelint', 'copyJs', 'fonts', 'sass', 'copyCss', 'images', 'jade', 'copyHtml'], function() {
  browserSync.init(['.tmp/**'], {
    server: {
      baseDir: ['.tmp', 'src']
    }
  });
});

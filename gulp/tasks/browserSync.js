var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['browserify', 'coffeelint', 'sass', 'images', 'jade'], function() {
  browserSync.init(['.tmp/**'], {
    server: {
      baseDir: ['.tmp', 'src']
    }
  });
});

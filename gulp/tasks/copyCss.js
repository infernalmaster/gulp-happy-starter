var gulp    = require('gulp');
var changed = require('gulp-changed');
// var autoprefixer    = require('gulp-autoprefixer');


// Compile and Automatically Prefix Stylesheets
gulp.task('copyCss', function () {
  var dest = '.tmp/assets';

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src(['src/sass/**/*.css'])
    .pipe(changed(dest)) // Ignore unchanged files
    // .pipe(autoprefixer(AUTOPREFIXER_BROWSERS, { map: true }))
    .pipe(gulp.dest(dest));
});
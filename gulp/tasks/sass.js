var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var plumber = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');
// var autoprefixer    = require('gulp-autoprefixer');

// Compile and Automatically Prefix Stylesheets
gulp.task('sass', function () {
  var dest = '.tmp/assets';

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src(['src/styles/*.{scss, sass}'])
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(sourcemaps.init({}))
    .pipe(sass({
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map'
      // imagePath: '/images' // Used by the image-url helper
    }))
    .pipe(sourcemaps.write())
    // .pipe(autoprefixer(AUTOPREFIXER_BROWSERS, { map: true }))
    .pipe(gulp.dest(dest));
});

var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var plumber = require('gulp-plumber');
// var autoprefixer    = require('gulp-autoprefixer');

// Compile and Automatically Prefix Stylesheets
gulp.task('sass', function () {
  var dest = '.tmp/assets';

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src(['src/sass/*.{scss, sass}'])
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(sass({sourceComments: 'map'}))
    // .pipe(autoprefixer(AUTOPREFIXER_BROWSERS, { map: true }))
    .pipe(gulp.dest(dest));
});
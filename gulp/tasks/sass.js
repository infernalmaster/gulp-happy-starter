var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var gulpIf = require('gulp-if');
var plumber = require('gulp-plumber');

// var autoprefixer    = require('gulp-autoprefixer');


// Compile and Automatically Prefix Stylesheets
gulp.task('sass', function () {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
      'src/sass/*.{scss, sass}',
      'src/sass/**/*.css'
    ])
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(gulpIf('*.scss', sass({
      sourceComments: 'map'
    })))

    // .pipe(autoprefixer(AUTOPREFIXER_BROWSERS, { map: true }))

    .pipe(gulp.dest('.tmp/assets'));
});
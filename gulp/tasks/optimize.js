var gulp = require('gulp');
var gulpIf = require('gulp-if');
var glob = require('glob');
var useref = require('gulp-useref');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var autoprefixer    = require('gulp-autoprefixer');
var gulpReplace    = require('gulp-replace');


var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Scan Your HTML For Assets & Optimize Them
gulp.task('optimize', function () {
  var assets = useref.assets();

  return gulp.src(['.tmp/**/*.html', 'src/templates/**/*.html'])
    .pipe(assets)

    // Concatenate And Minify JavaScript
    .pipe(gulpIf('*.js.min', uglify({preserveComments: 'some'})))

    // Remove Any Unused CSS
    // Note: If not using the Style Guide, you can delete it from
    // the next line to only include styles your project uses.
    .pipe(gulpIf('*.css.min', uncss({
      html: glob.sync('{.tmp/**/*.html, src/templates/**/*.html}')
      // // CSS Selectors for UnCSS to ignore
      // ,ignore: [
      //   /.navdrawer-container.open/,
      //   /.app-bar.open/
      // ]
    })))

	.pipe(gulpIf('*.css.min', autoprefixer(AUTOPREFIXER_BROWSERS)))
    // Concatenate And Minify Styles
    .pipe(gulpIf('*.css.min', csso()))
    

    .pipe(assets.restore())
    .pipe(useref())


    // Update some path
    .pipe(gulpIf('*.html', gulpReplace('/assets/', 'assets/')))
    .pipe(gulpIf('*.css.min', gulpReplace('/assets/', '')))

    // Minify Any HTML
    .pipe(gulpIf('*.html', minifyHtml()))

    // Output Files
    .pipe(gulp.dest('dist'));
});


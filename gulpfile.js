var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var stripCssComments = require('gulp-strip-css-comments');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var size = require('gulp-size');

// Development Tasks 
// -----------------
var cssFiles = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'bower_components/slick-carousel/slick/slick.css',
  'bower_components/fancybox/dist/jquery.fancybox.min.css',
  'bower_components/font-awesome/css/font-awesome.min.css'
];

var jsFiles = [
  'app/partial-scripts/font-script.js',
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/retinajs/dist/retina.min.js',
  'bower_components/slick-carousel/slick/slick.min.js',
  'bower_components/fancybox/dist/jquery.fancybox.min.js',
  'app/partial-scripts/header.js',
  'app/partial-scripts/main.js'
];


// Start browserSync server
// -----------------
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('app/css')) // Outputs it in the css folder
      .pipe(size())
      .pipe(browserSync.reload({ // Reloading with Browser Sync
        stream: true
      }));
});

// create minified main js file
// -----------------
gulp.task('js', function () {
  return gulp.src(jsFiles)
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(size())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('app/js/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// create minified css with all vendor css files.
// -----------------
gulp.task('css', function () {
  return gulp.src(cssFiles)
      .pipe(concatCss("vendor.min.css", cssFiles))
      .pipe(cssnano())
      .pipe(stripCssComments({preserve: false}))
      .pipe(size())
      .pipe(gulp.dest('app/css'));
});

// Watchers
// -----------------
gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/partial-scripts/**/*.js', ['js']);
});

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function () {

  return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssmin()))
      .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function () {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
      .pipe(cache(imagemin({
        interlaced: true
      })))
      .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('fonts', function () {
  return gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
});

// Copying videos
gulp.task('video', function () {
  return gulp.src('app/video/**/*')
      .pipe(gulp.dest('dist/video'))
});

// Cleaning 
gulp.task('clean', function () {
  return del.sync('dist').then(function (cb) {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:dist', function () {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences

gulp.task('default', function (callback) {
  runSequence(['sass', 'js', 'browserSync'], 'watch',
      callback
  )
});

gulp.task('build', function (callback) {
  runSequence(
      'clean:dist',
      'js',
      'css',
      'sass',
      ['useref',  'images', 'fonts', 'video'],
      callback
  )
});
